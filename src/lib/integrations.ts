import { Dropbox, DropboxAuth, DropboxResponse } from "dropbox";
import { toast } from "react-toastify";

const DROPBOX_APP_KEY = "rn4ijkyjweusr1h"; //process.env.VITE_DROPBOX_APP_KEY
const STATE = "random_string";
const REDIRECT_URI = "http://localhost:5173"; //"https://vmt-frontend.vercel.app" //process.env.VITE_REDIRECT_URL;
const SCOPE = "https://www.googleapis.com/auth/adwords";

export const handleDropboxAuth = async (): Promise<{
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}> => {
  const dbx = new DropboxAuth({ clientId: DROPBOX_APP_KEY });

  const authUrl = await dbx.getAuthenticationUrl(
    REDIRECT_URI,
    STATE,
    "code",
    "offline",
    undefined,
    "none",
    true
  );

  const authWindow = window.open(
    authUrl.toString(),
    "_blank",
    "width=500,height=700"
  )!;

  return new Promise<{
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
  }>((resolve, reject) => {
    const interval = setInterval(() => {
      try {
        if (authWindow.closed) {
          clearInterval(interval);
          reject(new Error("Popup closed by user"));
        }

        const authUrl = new URL(authWindow.location.href);
        if (
          authUrl.origin === window.location.origin &&
          authUrl.searchParams.get("code") &&
          authUrl.searchParams.get("state") === STATE
        ) {
          const code = authUrl.searchParams.get("code");
          authWindow.close();
          clearInterval(interval);

          if (code) {
            dbx
              .getAccessTokenFromCode(REDIRECT_URI, code)
              .then((response: DropboxResponse<any>) => {
                console.log(response);
                const accessToken: string = response.result.access_token;
                const refreshToken: string = response.result.refresh_token;
                const expiresIn: number = response.result.expires_in;
                resolve({ accessToken, refreshToken, expiresIn });
              })
              .catch(reject);
          } else {
            reject(new Error("Authorization failed"));
          }
        }
      } catch (error) {}
    }, 2000);

    authWindow.onbeforeunload = () => {
      clearInterval(interval);
      reject(new Error("Popup closed by user"));
    };
  });
};

export async function GoogleAdsAuth(clientId: string, clientSecret: string) {
  if (!clientId || !clientSecret) {
    toast.info("Please Enter your Client ID and Client Secret to Proceed");
    return;
  }
  const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPE}&access_type=offline&prompt=consent`;

  const authWindow = window.open(
    authUrl.toString(),
    "_blank",
    "width=500,height=700"
  );
  return new Promise<{ refreshToken: string }>((resolve, reject) => {
    const interval = setInterval(() => {
      try {
        if (authWindow.closed) {
          clearInterval(interval);
          reject(new Error("Popup closed by user"));
        }

        const authUrl = new URL(authWindow.location.href);
        if (
          authUrl.origin === window.location.origin &&
          authUrl.searchParams.get("code")
        ) {
          const code = authUrl.searchParams.get("code");
          authWindow.close();
          clearInterval(interval);

          if (code) {
            exchangeAuthorizationCode(code, clientId, clientSecret)
              .then(({ refreshToken }) => {
                resolve({ refreshToken });
              })
              .catch(reject);
          } else {
            reject(new Error("Authorization failed"));
          }
        }
      } catch (error) {
        console.error("Error in interval:", error);
      }
    }, 2000);

    authWindow.onbeforeunload = () => {
      clearInterval(interval);
      reject(new Error("Popup closed by user"));
    };
  });
}

async function exchangeAuthorizationCode(
  code: string,
  clientId: string,
  clientSecret: string
) {
  const tokenUrl = "https://oauth2.googleapis.com/token";

  const body = new URLSearchParams({
    code: code,
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: REDIRECT_URI,
    grant_type: "authorization_code",
  });

  try {
    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body,
    });

    const data = await response.json();
    if (data.refresh_token) {
      // console.log('Access Token:', data.access_token);
      // console.log('Refresh Token:', data.refresh_token); // Store this securely
      return { refreshToken: data.refresh_token };
    } else {
      throw new Error(`Error fetching tokens: ${JSON.stringify(data)}`);
    }
  } catch (error) {
    console.error("Error during fetch:", error);
    throw error; // Propagate error for handling in the calling function
  }
}

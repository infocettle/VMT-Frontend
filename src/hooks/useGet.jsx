import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchContacts = async (userData, url) => {
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${userData.token}`,
  };

  try {
    const { data } = await axios.get(url, { headers: headers });
    //console.log(data);
    return data;
  } catch (error) {
    const errorBody = error.response.data;
    console.log(errorBody);
    toast.error(`${errorBody.detail}`, {
      autoClose: 2000,
      theme: "light",
    });
  }
};

const useContacts = ({ url }) => {
  const { userData } = useContext(UserContext);
  return useQuery({
    queryKey: ["contacts"],
    queryFn: () => fetchContacts(userData, url),
  });
};

export default useContacts;

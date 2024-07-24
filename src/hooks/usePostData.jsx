import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

const postData = async ({ url, body, title }) => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  try {
    const { data } = await axios.post(url, body, { headers });
    toast.success(`${title} added successfully`, {
      autoClose: 2000,
      theme: "light",
    });
    return data;
  } catch (error) {
    const errorBody = error.response?.data || { detail: error.message };
    console.error(errorBody);
    toast.error(`${errorBody}`, {
      autoClose: 2000,
      theme: "light",
    });
    throw new Error(errorBody.detail);
  }
};

export const sendData = async ({ url, body, title, setLoading }) => {
  console.log(body, url, title);
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  setLoading(true); // Set loading to true when the request starts

  try {
    const { data } = await axios.post(url, body, { headers });
    console.log(data);
    toast.success(`${title} successfully`, {
      autoClose: 2000,
      theme: "light",
    });
    setLoading(false); // Set loading to false when the request ends
    return data;
  } catch (error) {
    const errorBody = error.response?.data || { detail: error.message };
    console.error(errorBody);
    toast.error(`${errorBody.message}`, {
      autoClose: 2000,
      theme: "light",
    });
    setLoading(false); // Set loading to false if there's an error
    throw new Error(errorBody.detail);
  }
};


export const usePostData = ({ queryKey, url, title }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body) => postData({ url, body, title }),
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });
};

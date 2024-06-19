import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

const patchData = async ({ url, body, title }) => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  try {
    const { data } = await axios.patch(url, body, { headers });
    toast.success(`${title} entry approved`, {
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

const usePatchData = ({ queryKey, url, title }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body) => patchData({ url, body, title }),
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });
};

export default usePatchData;

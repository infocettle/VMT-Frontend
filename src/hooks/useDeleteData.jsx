import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

const deleteData = async ({ url, title }) => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  try {
    const { data } = await axios.delete(url, { headers });
    toast.success(`${title} deleted successfully`, {
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

const useDeleteData = ({ queryKey, url, title }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteData({ url, title }),
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });
};

export default useDeleteData;

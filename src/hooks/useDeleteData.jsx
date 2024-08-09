import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const deleteData = async ({ url, title,token }) => {

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
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
  const token = useSelector((state) => state.auth.token);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteData({ url, title,token }),
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });
};

export default useDeleteData;

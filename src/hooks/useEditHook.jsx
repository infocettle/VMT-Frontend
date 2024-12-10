import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const editData = async ({ url, body, title, image, token }) => {
  const headers = {
    Accept: "application/json",
    "Content-Type": image ? "multipart/form-data" : "application/json",
    Authorization: `Bearer ${token}`,
  };

  try {
    const { data } = await axios.put(url, body, { headers });
    toast.success(`${title} updated successfully`, {
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

const useEditData = ({ queryKey, url, title, image }) => {
  const token = useSelector((state) => state.auth.token);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body) => editData({ url, body, title, image, token }),
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });
};

export default useEditData;

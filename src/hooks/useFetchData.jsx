import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const fetchData = async (url, token) => {
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  };

  try {
    const { data } = await axios.get(url, { headers });
    return data;
  } catch (error) {
    console.error(error);
    const errorBody = error.response?.data || { detail: error.message };
    toast.error(errorBody.detail, {
      autoClose: 2000,
      theme: "light",
    });
    throw new Error(errorBody.detail);
  }
};

const useFetchData = (url, queryKey) => {
  const token = useSelector((state) => state.auth.token);

  return useQuery({
    queryKey: [queryKey],
    queryFn: () => fetchData(url, token),
  });
};

export default useFetchData;

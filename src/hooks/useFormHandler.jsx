import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
const useFormHandler = (fetchDataFn, createUrl, updateUrl, title) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const mode = queryParams.get("mode") || "create";
  const id = queryParams.get("id") || "";
  const [loading, setLoading] = useState(true); // Add loading state
  const [formData, setFormData] = useState({ data: {} });
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (mode === "edit" && id) {
      fetchDataFn(id)
        .then((data) => setFormData(data))
        .finally(() => setLoading(false)); // Stop loading;
    }else {
        setLoading(false); // Stop loading when not in edit mode
      }
  }, [mode, id, fetchDataFn]);

  const handleFormSubmit = async (values) => {
    const url = mode === "edit" ? updateUrl : createUrl;
    const body = { ...values, id: mode === "edit" ? id : undefined };

    const response = await fetch(url, {
        method: mode === 'edit' ? 'PUT' : 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      toast.success(
        `${title} ${mode === "edit" ? "updated" : "added"} successfully`,
        {
          autoClose: 2000,
          theme: "light",
        }
      );
      navigate(-1);
    } else {
      toast.error(`${response.error}`, {
        autoClose: 2000,
        theme: "light",
      });
    }
  };

  return { formData, mode, handleFormSubmit,loading };
};

export default useFormHandler;

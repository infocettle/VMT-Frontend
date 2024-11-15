import { Loader, Trash } from "lucide-react";
import React from "react";

export default function DeleteButton({ onClick, loading }) {
  return (
    <button onClick={onClick} className={`${loading ? "animate-spin" : ""}`}>
      {loading ? (
        <Loader color="#D02B20" size="24px" />
      ) : (
        <Trash color="#D02B20" size="24px" />
      )}
    </button>
  );
}

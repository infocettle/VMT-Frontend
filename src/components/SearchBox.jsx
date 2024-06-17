// src/components/SearchBox.js
import React from 'react';
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return (
    <div className="relative w-full max-w-xs ">
         <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      <Input
        type="text"
        placeholder="Search..."
        className="w-full px-10 bg-gray-100 text-black rounded-md pr-10"
      />
     
    </div>
  );
};

export default SearchBox;

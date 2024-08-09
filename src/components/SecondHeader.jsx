import React from "react";

const SecondHeader = ({ title }) => {
  return (
    <div className="flex w-auto items-center px-2 space-x-5 mt-5">
      <h2 className="uppercase font-light text-base">{title}</h2>
      <div className="flex w-auto p-2 border border-black bg-white items-center">
        <h3 className="text-sm">
          A<sup>-</sup>
        </h3>
      </div>
      <div className="flex w-auto p-2 border border-black bg-white items-center">
        <h3 className="text-sm">
          A<sup>+</sup>
        </h3>
      </div>
    </div>
  );
};

export default SecondHeader;

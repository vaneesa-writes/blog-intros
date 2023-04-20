import React from "react";

const OptionHeader = ({ currentPage, setCurrentPage, saved }) => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex gap-2">
        <div
          className={`px-3 py-2 ${
            currentPage === "New Results" && "font-bold"
          } cursor-pointer text-white flex items-center border-[1px] border-[#464646] border-b-0`}
          style={{
            background:
              currentPage === "New Results" &&
              "linear-gradient(135deg, #76edc5, #d5fa9d)",
            color: currentPage === "New Results" && "black",
          }}
          onClick={() => setCurrentPage("New Results")}
        >
          New Results
        </div>

        <div
          className={`px-3 py-2 ${
            currentPage === "Saved" && "font-bold"
          } cursor-pointer text-white flex items-center border-[1px] border-[#464646] border-b-0`}
          onClick={() => setCurrentPage("Saved")}
          style={{
            background:
              currentPage === "Saved" &&
              "linear-gradient(135deg, #76edc5, #d5fa9d)",
              color: currentPage === "Saved" && "black",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
            />
          </svg>
          <div>Saved({saved.length})</div>
        </div>
      </div>
      <div
        className={`px-3 py-2 ${
            currentPage === "All Results" && "font-bold"
          } cursor-pointer text-white flex items-center border-[1px] border-[#464646] border-b-0`}
        onClick={() => setCurrentPage("All Results")}
        style={{
          background:
            currentPage === "All Results" &&
            "linear-gradient(135deg, #76edc5, #d5fa9d)",
            color: currentPage === "All Results" && "black",
        }}
      >
        Select All Results
      </div>
    </div>
  );
};

export default OptionHeader;

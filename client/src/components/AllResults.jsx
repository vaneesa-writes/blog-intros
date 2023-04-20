import React from "react";
import IntroCard from "./IntroCard";

const AllResults = ({ allIntros, setSaved }) => {
  return (
    <div
      className={`flex flex-col h-full w-full px-3 overflow-y-auto ${
        allIntros.length === 0 ? "justify-center" : "justify-start"
      } items-center`}
    >
      {allIntros.length === 0 ? (
        <>
          <p className="font-bold text-3xl">All Intros</p>
          <p>Create captative blog intros in seconds</p>
        </>
      ) : (
        allIntros.map((intro) => (
          <div>
            <IntroCard intro={intro} setSaved={setSaved} />
          </div>
        ))
      )}
    </div>
  );
};

export default AllResults;

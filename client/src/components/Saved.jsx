import React from "react";
import IntroCard from "./IntroCard";

const Saved = ({ saved, setSaved }) => {
  return (
    <div
      className={`flex flex-col h-full w-full px-3 overflow-y-auto ${
        saved.length === 0 ? "justify-center" : "justify-start"
      } items-center`}
    >
      {saved.length === 0 ? (
        <>
          <p className="font-bold text-3xl">Saved</p>
          <p>Save captative blog intros in seconds</p>
        </>
      ) : (
        saved.map((intro) => (
          <div>
            <IntroCard intro={intro} setSaved={setSaved} />
          </div>
        ))
      )}
    </div>
  );
};

export default Saved;

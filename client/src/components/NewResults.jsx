import React from "react";
import Loading from "./Loading";
import IntroCard from "./IntroCard";

const NewResults = ({ intros = [], loading, setSaved }) => {
  console.log(intros.length, loading, intros.length === 0 || loading === true);
  return (
    <div
      className={`flex flex-col h-full w-full px-3 overflow-y-auto ${
        intros.length === 0 || loading === true
          ? "justify-center"
          : "justify-start"
      } items-center`}
    >
      {loading ? (
        <Loading />
      ) : intros.length === 0 ? (
        <>
          <p className="font-bold text-4xl">Blog Intros</p>
          <p>Create captative blog intros in seconds</p>
        </>
      ) : (
        intros.map((intro) => <IntroCard intro={intro} setSaved={setSaved} />)
      )}
    </div>
  );
};

export default NewResults;

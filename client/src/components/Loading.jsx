import React from "react";
import { ClipLoader } from "react-spinners";

const Loading = () => {

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "linear-gradient(to bottom, #ff416c, #ff4b2b)",
      }}
    >
      <ClipLoader
        size={50}
        color={"#79dfbd"}
        loading={true}
      />
    </div>
  );
};

export default Loading;

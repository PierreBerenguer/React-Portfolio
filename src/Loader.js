import React from "react";
import { Snow } from "./components/Snow";
import LoaderGif from "./Lapin2.gif";

export default function Loader() {
  return (
    <div style={{ overflow: "hidden" }}>
      {" "}
      <Snow />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background:
            "linear-gradient(180deg, rgba(0,2,3,1) 0%, #043651 100% )",
        }}
      >
        <img src={LoaderGif} style={{ width: "6%", minWidth: "80px" }} />
      </div>
    </div>
  );
}

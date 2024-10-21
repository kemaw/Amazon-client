import React from "react";
import { GridLoader } from "react-spinners";
function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        // width: '100vw',
        // backgroundColor: '#f5f5f5'
      }}
    >
      <GridLoader color="#36d7b7" />
    </div>
  );
}

export default Loader;

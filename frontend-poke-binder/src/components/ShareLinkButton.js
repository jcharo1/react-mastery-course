import React from "react";
import { Button } from "semantic-ui-react";

const ButtonFluid = () => (
  <button
    className=""
    style={{
      backgroundSize: "100% 100%",
      background: "rgba(255, 255, 255, 0.9)",

      borderRadius: "16px",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",

      border: " 1px solid rgba(255, 255, 255, 0.3)",
      padding: "15px",
    }}
  >
    Share Link
  </button>
);

export default ButtonFluid;

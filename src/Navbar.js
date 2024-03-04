import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        background: "#bde3f6",
        color: "black",
      }}
    >
      <div>
        <span>OncoNPC</span>
      </div>
      <div>
        <a href="/tutorial" style={{ color: "black", marginRight: "1rem" }}>
          Tutorial
        </a>
        <a href="/prediction" style={{ color: "black", marginRight: "1rem" }}>
          Prediction Tool
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

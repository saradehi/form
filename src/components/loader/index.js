import React from "react";
import "../../styles/loader.css";

const Loader = () => {
  return (
    <div className="loader-div">
      <div className="progress-bar"></div>
      <p>Cargando</p>
    </div>
  );
};

export default Loader;

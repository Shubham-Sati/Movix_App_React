import React from "react";
import "./style.scss";

const ContentWrapper = ({ children }) => {
  // here ContentWrapper div is treated as higher order component
  return <div className="contentWrapper">{children}</div>;
};

export default ContentWrapper;

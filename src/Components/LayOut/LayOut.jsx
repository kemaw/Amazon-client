import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LowerFooter from "../Footer/LowerFooter";
import classes from "../Footer/Footer.module.css";
function LayOut({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <LowerFooter />
    </>
  );
}

export default LayOut;

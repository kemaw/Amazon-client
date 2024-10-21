import React from "react";
import numeral from "numeral";

const CurrencyFormat = ({ amount }) => {
  const formattedamount = numeral(amount).format("$0,0.00");
  return formattedamount;
};
export default CurrencyFormat;

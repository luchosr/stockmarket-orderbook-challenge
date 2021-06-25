import React, { useState, useEffect } from "react";

const StockRow = ({ ticker }) => {
  const [price, setPrice] = useState(5);
  const [date, setDate] = useState("12-12-12");
  const [time, setTime] = useState("09:45");

  //fetch api
  useEffect(() => {}, []);

  return (
    <tr>
      <td>{ticker}</td>
      <td>{price}</td>
      <td>{date}</td>
      <td>{time}</td>
    </tr>
  );
};

export default StockRow;

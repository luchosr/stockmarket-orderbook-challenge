import React, { useState, useEffect, useRef } from "react";

const StockRow = ({ ticker }) => {
  const [price, setPrice] = useState(5);
  const [date, setDate] = useState("12-12-12");
  const [time, setTime] = useState("09:45");
  const ws = useRef(null);

  // const ws = new WebSocket("wss://www.cryptofacilities.com/ws/v1");
  //fetch api
  useEffect(() => {
    ws.current = new WebSocket("wss://www.cryptofacilities.com/ws/v1");
    ws.current.onopen = () => console.log("ws opened");
    ws.current.onclose = () => console.log("ws closed");

    return () => {
      ws.current.close();
    };
  }, []);

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

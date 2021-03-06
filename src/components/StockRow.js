import React, { useState, useEffect } from "react";

const StockRow = () => {
  const [orders, setOrders] = useState([]);
  const currencyPair = "PI_XBTUSD";
  const currencyArray = currencyPair.toUpperCase().match(/.{1,3}/g);

  useEffect(() => {
    const subscribe = {
      event: "subscribe",
      feed: "book_ui_1",
      product_ids: ["PI_XBTUSD"],
    };

    const ws = new WebSocket("wss://www.cryptofacilities.com/ws/v1");
    ws.onopen = () => {
      console.log("ws opened");
      ws.send(JSON.stringify(subscribe));
    };
    ws.onmessage = (event) => {
      const response = JSON.parse(event.data);
      // setOrders(response.data);
      console.log("las ordenes son ", response);
    };

    ws.onclose = () => {
      console.log("ws closed");
      ws.close();
    };

    return () => {
      ws.close();
    };
  }, [currencyPair]);

  // const { price, size } = orders;
  const orderRows = (arr) =>
    arr &&
    arr.map((item, index) => (
      <tr key={index}>
        <td> {item[1]} </td>
        <td> {item[0]} </td>
      </tr>
    ));

  const orderHead = (title) => (
    <thead>
      <tr>
        <th colSpan="2">{title}</th>
      </tr>
      <tr>
        <th>Amount ({currencyArray[0]})</th>
        <th>Price ({currencyArray[1]})</th>
      </tr>
    </thead>
  );

  return (
    <div className="order-container">
      <table>{orderHead("Bids")}</table>

      <table>{orderHead("Asks")}</table>
    </div>
  );
};

export default StockRow;

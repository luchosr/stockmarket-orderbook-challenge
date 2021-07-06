import React from "react";
import "./App.css";
import OrderBook from "./components/OrderBook";
import StockRow from "./components/StockRow";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <h2>Crypto Order Book </h2>
      {/* <OrderBook /> */}
      <StockRow />
    </div>
  );
}

export default App;

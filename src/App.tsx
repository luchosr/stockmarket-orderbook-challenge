import React from "react";
import "./App.css";
import StockRow from "./components/StockRow";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <table className="table mt-5">
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Price</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <StockRow ticker="aapl"></StockRow>
            <StockRow ticker="googl"></StockRow>
            <StockRow ticker="msft"></StockRow>
            <StockRow ticker="tsla"></StockRow>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

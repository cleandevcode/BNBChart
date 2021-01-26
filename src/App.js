import "./App.css";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

function App() {
  return (
    <div className="App">
      <h2>BINANCE: BNBUSDT Chart</h2>
      <TradingViewWidget
        className="custom"
        symbol="BINANCE:BNBUSDT"
        theme={Themes.DARK}
        locale="fr"
        autosize
      />
      {/* TradingView Widget BEGIN */}
      <div className="tradingview-widget-container">
        <div id="tradingview_c1706"></div>
      </div>
      {/* TradingView Widget END */}
    </div>
  );
}

export default App;

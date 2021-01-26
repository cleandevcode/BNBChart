import "./App.css";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

function App() {
  return (
    <div className="App">
      <h2>BINANCE Chart</h2>
      <TradingViewWidget
        symbol="BINANCE:BNBBTC"
        theme={Themes.DARK}
        locale="fr"
        autosize
      />
    </div>
  );
}

export default App;

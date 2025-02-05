import { useState } from "react";
import InputBox from "./component/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount((prev) => convertedAmount);
    setConvertedAmount((prev) => amount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="converter">
      <InputBox
        amount={amount}
        onAmountChange={(amount) => setAmount(amount)}
        currencyOption={options}
        onCurrencyChange={(currency) => setFrom(currency)}
        selectedCurrency={from}
      />
      <button className="swap" onClick={swap}>
        Swap
      </button>
      <InputBox
        amount={convertedAmount}
        currencyOption={options}
        onCurrencyChange={(currency) => setTo(currency)}
        selectedCurrency={to}
      />
      <button
        onClick={convert}
      >{`Convert ${from.toUpperCase()} to ${to.toUpperCase()}`}</button>
    </div>
  );
}

export default App;

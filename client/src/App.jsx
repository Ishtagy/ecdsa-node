import Wallet from "./Wallet";
import Transfer from "./Transfer";
import "./App.scss";
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");
  const [signature, setSignature] = useState("");
  const [transactionNumber, setTransactionNumber] = useState(0);

  return (
    <div className="app">
      <Wallet
        balance={balance}
        setBalance={setBalance}
        address={address}
        setAddress={setAddress}
        signature={signature}
        setSignature={setSignature}
        transactionNumber={transactionNumber}
        setTransactionNumber={setTransactionNumber}
      />
      <Transfer
        setBalance={setBalance}
        address={address}
        signature={signature}
        setTransactionNumber={setTransactionNumber}
      />
    </div>
  );
}

export default App;

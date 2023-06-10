import server from "./server";
import * as secp from "ethereum-cryptography/secp256k1";

function Wallet({
  address,
  setAddress,
  balance,
  setBalance,
  signature,
  setSignature,
  transactionNumber,
  setTransactionNumber,
}) {
  async function onChangeAddress(evt) {
    const address = evt.target.value;
    setAddress(address);

    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
      const {
        data: { transaction },
      } = await server.get(`transaction/${address}`);
      setTransactionNumber(transaction);
    } else {
      setBalance(0);
      setTransactionNumber(0);
    }
  }
  async function onChangeSignature(evt) {
    const signature = evt.target.value;
    setSignature(signature);
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Wallet Address
        <input
          placeholder="Type an address"
          value={address}
          onChange={onChangeAddress}
        ></input>
      </label>
      <input
        placeholder="Type an signature, with your transaction number incremented by one as signed message"
        value={signature}
        onChange={onChangeSignature}
      ></input>

      <div className="balance">Balance: {balance}</div>
      <div className="balance">Transactions: {transactionNumber}</div>
    </div>
  );
}

export default Wallet;

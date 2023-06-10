const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;
const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

app.use(cors());
app.use(express.json());

const balances = {
  "0xb952bdf1620defe4bd79770af6062ae1d1cbf3ff": 100,
  "0x1bf119fbc2afe044bdf8d8b10fb4597ea123f00a": 50,
  "0x9e94ff92a81c50a8186b277814b8b1a9bf91e97e": 75,
};

const transactions = {
  "0xb952bdf1620defe4bd79770af6062ae1d1cbf3ff": 3,
  "0x1bf119fbc2afe044bdf8d8b10fb4597ea123f00a": 4,
  "0x9e94ff92a81c50a8186b277814b8b1a9bf91e97e": 1,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.get("/transaction/:address", (req, res) => {
  const { address } = req.params;
  const transaction = transactions[address] || 0;
  res.send({ transaction });
});

app.post("/send", async (req, res) => {
  const { sender, recipient, amount, signature } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);
  setInitialTransaction(sender);
  setInitialTransaction(recipient);

  let isVerified = await verifySender(sender, signature);
  console.log("Rslt is", isVerified);
  if (!isVerified) {
    res.status(400).send({ message: "Wrong signature!" });
  } else if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    transactions[sender] += 1;
    res.send({ balance: balances[sender], transaction: transactions[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}

function setInitialTransaction(address) {
  if (!transactions[address]) {
    transactions[address] = 0;
  }
}

async function verifySender(sender, signature) {
  const fromHexString = (hexString) =>
    Uint8Array.from(
      hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16))
    );

  tsN = transactions[sender] + 1;
  transactionNumber = tsN.toString();
  signature = fromHexString(signature);

  async function recoverKey(message, signature, recoveryBit) {
    const bytes = utf8ToBytes(message);
    const hash = keccak256(bytes);
    return secp.recoverPublicKey(hash, signature, recoveryBit);
  }

  const publicKey = await recoverKey(transactionNumber, signature, 0);
  const publicKey2 = await recoverKey(transactionNumber, signature, 1);
  const publicAddress = "0x" + toHex(keccak256(publicKey.slice(1)).slice(-20));
  const publicAddress2 =
    "0x" + toHex(keccak256(publicKey2.slice(1)).slice(-20));
  console.log(publicAddress);
  console.log(publicAddress2);
  console.log(publicAddress == sender);
  console.log(publicAddress2 == sender);
  console.log(publicAddress == sender || publicAddress2 == sender);
  const rslt = publicAddress == sender || publicAddress2 == sender;
  return rslt;
}

const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

async function main() {
  async function signMessage(msg, PRIVATE_KEY) {
    hash = keccak256(utf8ToBytes(msg));
    return secp.sign(hash, PRIVATE_KEY, { recovered: true });
  }

  // const [signature, recoveryBit] = await signMessage(
  //   "5",
  //   "67a30e42512278a4c7fe40be5c3498a9cefd6b52ccc0153e27d5cd3be5b2c117"
  // );

  // console.log(toHex(signature));

  // console.log(toHex(publicKey));
  // publicAddress = keccak256(publicKey.slice(1)).slice(-20);
  // console.log(toHex(publicAddress));

  const fromHexString = (hexString) =>
    Uint8Array.from(
      hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16))
    );

  console.log(
    fromHexString(
      "3045022100eec6eab8328e6c33d8ef93332b376a246a92b62aeec0e558681dfbecbf73ca8b022046ddf551c0e122ed34c61eaee96e72ce72bc5a01b74a8bfeeb16a2891f1ca482"
    )
  );

  // async function verifySender(sender, signature) {
  //   //transactionNumber = toString(transactions[sender] + 1);
  //   transactionNumber = "2";
  //   signature = fromHexString(signature);

  //   async function recoverKey(message, signature) {
  //     recoveryBit = 0;
  //     const bytes = utf8ToBytes(message);
  //     const hash = keccak256(bytes);
  //     return secp.recoverPublicKey(hash, signature, recoveryBit);
  //   }
  //   const publicKey = await recoverKey(transactionNumber, signature);

  //   const publicAddress = keccak256(publicKey.slice(1)).slice(-20);

  //   console.log("Public key: ", toHex(publicKey));
  //   console.log("Public address: ", toHex(publicAddress));

  //   return 1;
  //   //return publicAddress == sender;
  // }

  // verifySender(
  //   "1bf119fbc2afe044bdf8d8b10fb4597ea123f00a",
  //   "30440220145f28ffd43feab3d7b9e4c3ddeb8a027db317d77cce239d525ec149cadf150702206c80e0ecccd08194f83928f1b64dc266ac5e042521fd58b84134540867e8ba3e"
  // );
}
main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

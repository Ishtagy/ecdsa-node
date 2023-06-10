const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

async function main() {
  const fromHexString = (hexString) =>
    Uint8Array.from(
      hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16))
    );
  async function recoverKey(message, signature) {
    signature = fromHexString(signature);
    recoveryBit = 0;
    const bytes = utf8ToBytes(message);
    const hash = keccak256(bytes);
    return toHex(secp.recoverPublicKey(hash, signature, recoveryBit));
  }

  console.log(
    await recoverKey(
      "5",
      "3045022100b161a072d564ddc01ddc41aaa8d57efc576867d8f305a6156394e44e66a5b41b02205504be6de9bb2c7bfa501934fc4bb523e868fdac6554ab1e01a6dddb6496eac2"
    )
  );
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

//export { recoverKey };

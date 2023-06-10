const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

async function main() {
  async function signMessage(msg, PRIVATE_KEY) {
    hash = keccak256(utf8ToBytes(msg));
    return secp.sign(hash, PRIVATE_KEY, { recovered: true });
  }

  const [signature, recoveryBit] = await signMessage(
    "5",
    "67a30e42512278a4c7fe40be5c3498a9cefd6b52ccc0153e27d5cd3be5b2c117"
  );

  console.log(`Message signature: ${toHex(signature)}`);
}
main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

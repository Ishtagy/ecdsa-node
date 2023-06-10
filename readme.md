## ECDSA Node

This project is an example of using a client and server to facilitate transfers between different addresses. Since there is just a single server on the back-end handling transfers, this is clearly very centralized. We won't worry about distributed consensus for this project.

However, something that we would like to incoporate is Public Key Cryptography. By using Elliptic Curve Digital Signatures we can make it so the server only allows transfers that have been signed for by the person who owns the associated address.

### Video instructions

For an overview of this project as well as getting started instructions, check out the following video:

https://www.loom.com/share/0d3c74890b8e44a5918c4cacb3f646c4

### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder
2. Run `npm install` to install all the depedencies
3. Run `node index` to start the server

The application should connect to the default server port (3042) automatically!

_Hint_ - Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.
Private key: f13967d2450909cba2b264cb850adc39652f2b4a9020038f7f6bdbf3bf567c6b
Public key: 041cbce01a0600037e98a3866ec4fd2b38b8e9bc3304d7826a76e7bbac9c574aaa2f1925471c37e6dcc8e2bb39c7538b50cd31808939da6f04c384df222fb5cd4e
Public address: 0xb952bdf1620defe4bd79770af6062ae1d1cbf3ff

Private key: 67a30e42512278a4c7fe40be5c3498a9cefd6b52ccc0153e27d5cd3be5b2c117
Public key: 04d46d593e7e145ede3b2f7faae828e3b4e3c7b5175ee1c1c54bccb4e0299e92303d75c66c8995e4b0c6de6b06748c0541caca1774222d6d774999ff6e7ddc4194
Public address: 0x1bf119fbc2afe044bdf8d8b10fb4597ea123f00a

Private key: b6bc4c4a651626690edbfadcc1f09bafdaae13aeb00ded018d02f043a1b70fda
Public key: 046591b9eccb8e119e4d86def0210385196359e87fc4c8ac56ec4791e4a4c9966a83945478c992bbe9adb07a6c05c763d949a2171a32047c75ad18833961403cd2
Public address: 0x9e94ff92a81c50a8186b277814b8b1a9bf91e97e

3045022100b161a072d564ddc01ddc41aaa8d57efc576867d8f305a6156394e44e66a5b41b02205504be6de9bb2c7bfa501934fc4bb523e868fdac6554ab1e01a6dddb6496eac2

3045022100b161a072d564ddc01ddc41aaa8d57efc576867d8f305a6156394e44e66a5b41b02205504be6de9bb2c7bfa501934fc4bb523e868fdac6554ab1e01a6dddb6496eac2

04a3b94989db0ade3045e41d8336897d39102234c6f8666129171a33f1a2fe3005994c82e2b0640045b78fd90f2c4a123d32648c02e7beb1b9c48bec2db5a91355

3045022100eec6eab8328e6c33d8ef93332b376a246a92b62aeec0e558681dfbecbf73ca8b022046ddf551c0e122ed34c61eaee96e72ce72bc5a01b74a8bfeeb16a2891f1ca482

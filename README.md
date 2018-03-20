matrixes-simple
=========================
gRpc Server Simple for `protoc-gen-grpc` and `matrixes-lib`.

## Install

```bash
// install npm modules
npm install
```

## gRpc Test

```bash
// start gRpc server
node ./build/server.js

// start gRpc client
node ./build/client.js
```

## gateway Test

> [gateway address](http://127.0.0.1:8081/v1/getBookUser)

```bash
// start gateway server
node ./build/gateway.js
```

POST body
```json
{
    "isbn":"9",
    "type":"GMAIL",
    "author":"12345689",
    "isNew":"123",
    "user":{"id":"123"},
    "subTagsMap":{
        "1": "string"
    }
}
```

## Update proto file && Generate gateway source code

```bash
// linux
cd bash && ./gateway.sh

// windows
cd bash && gateway.bat
```

## Tool Chain

- [protoc-gen-grpc](https://github.com/niklaus0823/protoc-gen-grpc)
- [matrixes-cli](https://github.com/niklaus0823/matrixes-cli)
- [matrixes-lib](https://github.com/niklaus0823/matrixes-lib)
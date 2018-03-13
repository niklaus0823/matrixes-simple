"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc = require("grpc");
const book_grpc_pb_1 = require("../../proto/book/book_grpc_pb");
class MSBookApiServiceClient {
    constructor(address, ctx) {
        this.client = new book_grpc_pb_1.BookApiServiceClient(address, grpc.credentials.createInsecure());
    }
    // Send IRpcServerUnaryCall
    getBookApi(request, metadata) {
        return new Promise((resolve, reject) => {
            this.client.getBookApi(request, metadata, (err, res) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
        });
    }
    // Send IRpcServerUnaryCall
    getBooksViaAuthorApi(request, metadata) {
        return new Promise((resolve, reject) => {
            this.client.getBooksViaAuthorApi(request, metadata, (err, res) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
        });
    }
}
exports.default = MSBookApiServiceClient;

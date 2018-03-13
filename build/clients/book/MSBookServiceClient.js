"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc = require("grpc");
const book_grpc_pb_1 = require("../../proto/book/book_grpc_pb");
class MSBookServiceClient {
    constructor(address, ctx) {
        this.client = new book_grpc_pb_1.BookServiceClient(address, grpc.credentials.createInsecure());
    }
    // Send IRpcServerUnaryCall
    getBook(request, metadata) {
        return new Promise((resolve, reject) => {
            this.client.getBook(request, metadata, (err, res) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
        });
    }
    // Send IRpcServerWriteableStream
    getBooksViaAuthor(request, metadata) {
        return new Promise((resolve, reject) => {
            let call = this.client.getBooksViaAuthor(request, metadata);
            let response = [];
            // receive response stream
            call.on('data', (res) => {
                response.push(res);
            });
            call.on('error', (err) => {
                reject(err);
            });
            call.on('end', () => {
                resolve(response);
            });
        });
    }
    // Send IRpcServerReadableStream
    getGreatestBook(requests, metadata) {
        return new Promise((resolve, reject) => {
            let call = this.client.getGreatestBook(metadata, (err, res) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
            // send request stream
            requests.forEach((request) => call.write(request));
            call.end();
        });
    }
    // Send IRpcServerDuplexStream
    getBooks(requests, metadata) {
        return new Promise((resolve, reject) => {
            let call = this.client.getBooks(metadata);
            let response = [];
            // receive response stream
            call.on('data', (res) => {
                response.push(res);
            });
            call.on('error', (err) => {
                reject(err);
            });
            call.on('end', () => {
                resolve(response);
            });
            // send request stream
            requests.forEach((request) => call.write(request));
            call.end();
        });
    }
    // Send IRpcServerUnaryCall
    getBookUser(request, metadata) {
        return new Promise((resolve, reject) => {
            this.client.getBookUser(request, metadata, (err, res) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
        });
    }
}
exports.default = MSBookServiceClient;

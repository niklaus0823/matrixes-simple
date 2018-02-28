"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_grpc_pb_1 = require("../proto/book/book_grpc_pb");
const getBook_1 = require("./book/book_grpc_pb/BookService/getBook");
const getBooks_1 = require("./book/book_grpc_pb/BookService/getBooks");
const getBooksViaAuthor_1 = require("./book/book_grpc_pb/BookService/getBooksViaAuthor");
const getGreatestBook_1 = require("./book/book_grpc_pb/BookService/getGreatestBook");
exports.registerServices = function (app) {
    app.server.addService(book_grpc_pb_1.BookServiceService, {
        getBook: (call, callback) => __awaiter(this, void 0, void 0, function* () {
            let wrappedHandler = app.wrapGrpcHandler(getBook_1.getBookHandler);
            wrappedHandler(call, callback).then(_ => _);
        }),
        getBooks: (call, callback) => __awaiter(this, void 0, void 0, function* () {
            let wrappedHandler = app.wrapGrpcHandler(getBooks_1.getBooksHandler);
            wrappedHandler(call, callback).then(_ => _);
        }),
        getBooksViaAuthor: (call, callback) => __awaiter(this, void 0, void 0, function* () {
            let wrappedHandler = app.wrapGrpcHandler(getBooksViaAuthor_1.getBooksViaAuthorHandler);
            wrappedHandler(call, callback).then(_ => _);
        }),
        getGreatestBook: (call, callback) => __awaiter(this, void 0, void 0, function* () {
            let wrappedHandler = app.wrapGrpcHandler(getGreatestBook_1.getGreatesBookHandler);
            wrappedHandler(call, callback).then(_ => _);
        }),
    });
};

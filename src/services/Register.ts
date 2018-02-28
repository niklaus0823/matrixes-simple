import {RpcApplication, WrappedHandler} from "matrixes-lib";
import {
    BookServiceService,
} from '../proto/book/book_grpc_pb';

import {getBookHandler} from "./book/book_grpc_pb/BookService/getBook";
import {getBooksHandler} from "./book/book_grpc_pb/BookService/getBooks";
import {getBooksViaAuthorHandler} from "./book/book_grpc_pb/BookService/getBooksViaAuthor";
import {getGreatesBookHandler} from "./book/book_grpc_pb/BookService/getGreatestBook";

export const registerServices = function (app: RpcApplication) {

    app.server.addService(BookServiceService, {
        getBook: async (call, callback) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(getBookHandler);
            wrappedHandler(call, callback).then(_ => _);
        },
        getBooks: async (call, callback) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(getBooksHandler);
            wrappedHandler(call, callback).then(_ => _);
        },
        getBooksViaAuthor: async (call, callback) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(getBooksViaAuthorHandler);
            wrappedHandler(call, callback).then(_ => _);
        },
        getGreatestBook: async (call, callback) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(getGreatesBookHandler);
            wrappedHandler(call, callback).then(_ => _);
        },
    });

};
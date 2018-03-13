import {RpcApplication, WrappedHandler} from 'matrixes-lib';

import {BookServiceService} from '../proto/book/book_grpc_pb';
import {UserServiceService} from '../proto/user/user_grpc_pb';

import {getBookHandler} from './book/book_grpc_pb/BookService/getBook';
import {getBooksViaAuthorHandler} from './book/book_grpc_pb/BookService/getBooksViaAuthor';
import {getGreatestBookHandler} from './book/book_grpc_pb/BookService/getGreatestBook';
import {getBooksHandler} from './book/book_grpc_pb/BookService/getBooks';
import {getBookUserHandler} from './book/book_grpc_pb/BookService/getBookUser';
import {getUserHandler} from './user/user_grpc_pb/UserService/getUser';

export const registerServices = function (app: RpcApplication) {
    app.server.addService(BookServiceService, {
        getBook: async (call, callback) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(getBookHandler);
            wrappedHandler(call, callback).then(_ => _);
        },
        getBooksViaAuthor: async (call, callback) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(getBooksViaAuthorHandler);
            wrappedHandler(call, callback).then(_ => _);
        },
        getGreatestBook: async (call, callback) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(getGreatestBookHandler);
            wrappedHandler(call, callback).then(_ => _);
        },
        getBooks: async (call, callback) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(getBooksHandler);
            wrappedHandler(call, callback).then(_ => _);
        },
        getBookUser: async (call, callback) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(getBookUserHandler);
            wrappedHandler(call, callback).then(_ => _);
        },
    });
    app.server.addService(UserServiceService, {
        getUser: async (call, callback) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(getUserHandler);
            wrappedHandler(call, callback).then(_ => _);
        },
    });
};

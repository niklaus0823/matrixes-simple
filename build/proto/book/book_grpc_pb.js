// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var book_book_pb = require('../book/book_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var user_user_pb = require('../user/user_pb.js');

function serialize_com_book_AuthorBook(arg) {
  if (!(arg instanceof book_book_pb.AuthorBook)) {
    throw new Error('Expected argument of type com.book.AuthorBook');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_book_AuthorBook(buffer_arg) {
  return book_book_pb.AuthorBook.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_book_Book(arg) {
  if (!(arg instanceof book_book_pb.Book)) {
    throw new Error('Expected argument of type com.book.Book');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_book_Book(buffer_arg) {
  return book_book_pb.Book.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_book_GetAuthorBookApiRequest(arg) {
  if (!(arg instanceof book_book_pb.GetAuthorBookApiRequest)) {
    throw new Error('Expected argument of type com.book.GetAuthorBookApiRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_book_GetAuthorBookApiRequest(buffer_arg) {
  return book_book_pb.GetAuthorBookApiRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_book_GetBookRequest(arg) {
  if (!(arg instanceof book_book_pb.GetBookRequest)) {
    throw new Error('Expected argument of type com.book.GetBookRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_book_GetBookRequest(buffer_arg) {
  return book_book_pb.GetBookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_book_GetBookViaAuthorRequest(arg) {
  if (!(arg instanceof book_book_pb.GetBookViaAuthorRequest)) {
    throw new Error('Expected argument of type com.book.GetBookViaAuthorRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_book_GetBookViaAuthorRequest(buffer_arg) {
  return book_book_pb.GetBookViaAuthorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_user_GetUserRequest(arg) {
  if (!(arg instanceof user_user_pb.GetUserRequest)) {
    throw new Error('Expected argument of type com.user.GetUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_user_GetUserRequest(buffer_arg) {
  return user_user_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_user_User(arg) {
  if (!(arg instanceof user_user_pb.User)) {
    throw new Error('Expected argument of type com.user.User');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_user_User(buffer_arg) {
  return user_user_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}


var BookServiceService = exports.BookServiceService = {
  getBook: {
    path: '/com.book.BookService/GetBook',
    requestStream: false,
    responseStream: false,
    requestType: book_book_pb.GetBookRequest,
    responseType: book_book_pb.Book,
    requestSerialize: serialize_com_book_GetBookRequest,
    requestDeserialize: deserialize_com_book_GetBookRequest,
    responseSerialize: serialize_com_book_Book,
    responseDeserialize: deserialize_com_book_Book,
  },
  getBooksViaAuthor: {
    path: '/com.book.BookService/GetBooksViaAuthor',
    requestStream: false,
    responseStream: true,
    requestType: book_book_pb.GetBookViaAuthorRequest,
    responseType: book_book_pb.Book,
    requestSerialize: serialize_com_book_GetBookViaAuthorRequest,
    requestDeserialize: deserialize_com_book_GetBookViaAuthorRequest,
    responseSerialize: serialize_com_book_Book,
    responseDeserialize: deserialize_com_book_Book,
  },
  getGreatestBook: {
    path: '/com.book.BookService/GetGreatestBook',
    requestStream: true,
    responseStream: false,
    requestType: book_book_pb.GetBookRequest,
    responseType: book_book_pb.Book,
    requestSerialize: serialize_com_book_GetBookRequest,
    requestDeserialize: deserialize_com_book_GetBookRequest,
    responseSerialize: serialize_com_book_Book,
    responseDeserialize: deserialize_com_book_Book,
  },
  getBooks: {
    path: '/com.book.BookService/GetBooks',
    requestStream: true,
    responseStream: true,
    requestType: book_book_pb.GetBookRequest,
    responseType: book_book_pb.Book,
    requestSerialize: serialize_com_book_GetBookRequest,
    requestDeserialize: deserialize_com_book_GetBookRequest,
    responseSerialize: serialize_com_book_Book,
    responseDeserialize: deserialize_com_book_Book,
  },
  getBookUser: {
    path: '/com.book.BookService/GetBookUser',
    requestStream: false,
    responseStream: false,
    requestType: user_user_pb.GetUserRequest,
    responseType: user_user_pb.User,
    requestSerialize: serialize_com_user_GetUserRequest,
    requestDeserialize: deserialize_com_user_GetUserRequest,
    responseSerialize: serialize_com_user_User,
    responseDeserialize: deserialize_com_user_User,
  },
};

exports.BookServiceClient = grpc.makeGenericClientConstructor(BookServiceService);
var BookApiServiceService = exports.BookApiServiceService = {
  getBookApi: {
    path: '/com.book.BookApiService/GetBookApi',
    requestStream: false,
    responseStream: false,
    requestType: book_book_pb.GetBookRequest,
    responseType: book_book_pb.Book,
    requestSerialize: serialize_com_book_GetBookRequest,
    requestDeserialize: deserialize_com_book_GetBookRequest,
    responseSerialize: serialize_com_book_Book,
    responseDeserialize: deserialize_com_book_Book,
  },
  getAuthorBookApi: {
    path: '/com.book.BookApiService/GetAuthorBookApi',
    requestStream: false,
    responseStream: false,
    requestType: book_book_pb.GetAuthorBookApiRequest,
    responseType: book_book_pb.AuthorBook,
    requestSerialize: serialize_com_book_GetAuthorBookApiRequest,
    requestDeserialize: deserialize_com_book_GetAuthorBookApiRequest,
    responseSerialize: serialize_com_book_AuthorBook,
    responseDeserialize: deserialize_com_book_AuthorBook,
  },
};

exports.BookApiServiceClient = grpc.makeGenericClientConstructor(BookApiServiceService);

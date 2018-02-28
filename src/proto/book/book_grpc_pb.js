// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var book_pb = require('./book_pb.js');

function serialize_com_book_Book(arg) {
  if (!(arg instanceof book_pb.Book)) {
    throw new Error('Expected argument of type com.book.Book');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_book_Book(buffer_arg) {
  return book_pb.Book.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_book_GetBookRequest(arg) {
  if (!(arg instanceof book_pb.GetBookRequest)) {
    throw new Error('Expected argument of type com.book.GetBookRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_book_GetBookRequest(buffer_arg) {
  return book_pb.GetBookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_book_GetBookViaAuthorRequest(arg) {
  if (!(arg instanceof book_pb.GetBookViaAuthorRequest)) {
    throw new Error('Expected argument of type com.book.GetBookViaAuthorRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_book_GetBookViaAuthorRequest(buffer_arg) {
  return book_pb.GetBookViaAuthorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var BookServiceService = exports.BookServiceService = {
  getBook: {
    path: '/com.book.BookService/GetBook',
    requestStream: false,
    responseStream: false,
    requestType: book_pb.GetBookRequest,
    responseType: book_pb.Book,
    requestSerialize: serialize_com_book_GetBookRequest,
    requestDeserialize: deserialize_com_book_GetBookRequest,
    responseSerialize: serialize_com_book_Book,
    responseDeserialize: deserialize_com_book_Book,
  },
  getBooksViaAuthor: {
    path: '/com.book.BookService/GetBooksViaAuthor',
    requestStream: false,
    responseStream: true,
    requestType: book_pb.GetBookViaAuthorRequest,
    responseType: book_pb.Book,
    requestSerialize: serialize_com_book_GetBookViaAuthorRequest,
    requestDeserialize: deserialize_com_book_GetBookViaAuthorRequest,
    responseSerialize: serialize_com_book_Book,
    responseDeserialize: deserialize_com_book_Book,
  },
  getGreatestBook: {
    path: '/com.book.BookService/GetGreatestBook',
    requestStream: true,
    responseStream: false,
    requestType: book_pb.GetBookRequest,
    responseType: book_pb.Book,
    requestSerialize: serialize_com_book_GetBookRequest,
    requestDeserialize: deserialize_com_book_GetBookRequest,
    responseSerialize: serialize_com_book_Book,
    responseDeserialize: deserialize_com_book_Book,
  },
  getBooks: {
    path: '/com.book.BookService/GetBooks',
    requestStream: true,
    responseStream: true,
    requestType: book_pb.GetBookRequest,
    responseType: book_pb.Book,
    requestSerialize: serialize_com_book_GetBookRequest,
    requestDeserialize: deserialize_com_book_GetBookRequest,
    responseSerialize: serialize_com_book_Book,
    responseDeserialize: deserialize_com_book_Book,
  },
};

exports.BookServiceClient = grpc.makeGenericClientConstructor(BookServiceService);

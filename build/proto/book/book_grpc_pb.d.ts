// package: com.book
// file: book.proto

import * as grpc from 'grpc';
import * as book_pb from './book_pb';

interface IBookServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getBook: IGetBook
  getBooksViaAuthor: IGetBooksViaAuthor
  getGreatestBook: IGetGreatestBook
  getBooks: IGetBooks
}

interface IGetBook {
  path: string; // "/com.book.BookService/GetBook"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: book_pb.GetBookRequest;
  responseType: book_pb.Book;
  requestSerialize: (arg: book_pb.GetBookRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => book_pb.GetBookRequest;
  responseSerialize: (arg: book_pb.Book) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => book_pb.Book;
}

interface IGetBooksViaAuthor {
  path: string; // "/com.book.BookService/GetBooksViaAuthor"
  requestStream: boolean; // false
  responseStream: boolean; // true
  requestType: book_pb.GetBookViaAuthorRequest;
  responseType: book_pb.Book;
  requestSerialize: (arg: book_pb.GetBookViaAuthorRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => book_pb.GetBookViaAuthorRequest;
  responseSerialize: (arg: book_pb.Book) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => book_pb.Book;
}

interface IGetGreatestBook {
  path: string; // "/com.book.BookService/GetGreatestBook"
  requestStream: boolean; // true
  responseStream: boolean; // false
  requestType: book_pb.GetBookRequest;
  responseType: book_pb.Book;
  requestSerialize: (arg: book_pb.GetBookRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => book_pb.GetBookRequest;
  responseSerialize: (arg: book_pb.Book) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => book_pb.Book;
}

interface IGetBooks {
  path: string; // "/com.book.BookService/GetBooks"
  requestStream: boolean; // true
  responseStream: boolean; // true
  requestType: book_pb.GetBookRequest;
  responseType: book_pb.Book;
  requestSerialize: (arg: book_pb.GetBookRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => book_pb.GetBookRequest;
  responseSerialize: (arg: book_pb.Book) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => book_pb.Book;
}

export interface IBookServiceClient {
  getBook(request: book_pb.GetBookRequest, callback: (error: Error | null, response: book_pb.Book) => void): grpc.ClientUnaryCall;
  getBook(request: book_pb.GetBookRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: book_pb.Book) => void): grpc.ClientUnaryCall;
  getBooksViaAuthor(request: book_pb.GetBookViaAuthorRequest, metadata?: grpc.Metadata): grpc.ClientReadableStream<book_pb.Book>;
  getGreatestBook(callback: (error: Error | null, response: book_pb.Book) => void): grpc.ClientWritableStream<book_pb.Book>;
  getGreatestBook(callback: (error: Error | null, metadata: grpc.Metadata, response: book_pb.Book) => void): grpc.ClientWritableStream<book_pb.Book>;
  getBooks(metadata?: grpc.Metadata): grpc.ClientDuplexStream<book_pb.GetBookRequest, book_pb.Book>;
}

export const BookServiceService: IBookServiceService;
export class BookServiceClient extends grpc.Client implements IBookServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  public getBook(request: book_pb.GetBookRequest, callback: (error: Error | null, response: book_pb.Book) => void): grpc.ClientUnaryCall;
  public getBook(request: book_pb.GetBookRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: book_pb.Book) => void): grpc.ClientUnaryCall;
  public getBooksViaAuthor(request: book_pb.GetBookViaAuthorRequest, metadata?: grpc.Metadata): grpc.ClientReadableStream<book_pb.Book>;
  public getGreatestBook(callback: (error: Error | null, response: book_pb.Book) => void): grpc.ClientWritableStream<book_pb.Book>;
  public getGreatestBook(callback: (error: Error | null, metadata: grpc.Metadata, response: book_pb.Book) => void): grpc.ClientWritableStream<book_pb.Book>;
  public getBooks(metadata?: grpc.Metadata): grpc.ClientDuplexStream<book_pb.GetBookRequest, book_pb.Book>;
}


// package: com.book
// file: book/book.proto

import * as grpc from 'grpc';
import * as book_book_pb from '../book/book_pb';
import * as user_user_pb from '../user/user_pb';

interface IBookServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getBook: IGetBook
  getBooksViaAuthor: IGetBooksViaAuthor
  getGreatestBook: IGetGreatestBook
  getBooks: IGetBooks
  getBookUser: IGetBookUser
}

interface IGetBook {
  path: string; // "/com.book.BookService/GetBook"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: book_book_pb.GetBookRequest;
  responseType: book_book_pb.Book;
  requestSerialize: (arg: book_book_pb.GetBookRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => book_book_pb.GetBookRequest;
  responseSerialize: (arg: book_book_pb.Book) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => book_book_pb.Book;
}

interface IGetBooksViaAuthor {
  path: string; // "/com.book.BookService/GetBooksViaAuthor"
  requestStream: boolean; // false
  responseStream: boolean; // true
  requestType: book_book_pb.GetBookViaAuthorRequest;
  responseType: book_book_pb.Book;
  requestSerialize: (arg: book_book_pb.GetBookViaAuthorRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => book_book_pb.GetBookViaAuthorRequest;
  responseSerialize: (arg: book_book_pb.Book) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => book_book_pb.Book;
}

interface IGetGreatestBook {
  path: string; // "/com.book.BookService/GetGreatestBook"
  requestStream: boolean; // true
  responseStream: boolean; // false
  requestType: book_book_pb.GetBookRequest;
  responseType: book_book_pb.Book;
  requestSerialize: (arg: book_book_pb.GetBookRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => book_book_pb.GetBookRequest;
  responseSerialize: (arg: book_book_pb.Book) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => book_book_pb.Book;
}

interface IGetBooks {
  path: string; // "/com.book.BookService/GetBooks"
  requestStream: boolean; // true
  responseStream: boolean; // true
  requestType: book_book_pb.GetBookRequest;
  responseType: book_book_pb.Book;
  requestSerialize: (arg: book_book_pb.GetBookRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => book_book_pb.GetBookRequest;
  responseSerialize: (arg: book_book_pb.Book) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => book_book_pb.Book;
}

interface IGetBookUser {
  path: string; // "/com.book.BookService/GetBookUser"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: user_user_pb.GetUserRequest;
  responseType: user_user_pb.User;
  requestSerialize: (arg: user_user_pb.GetUserRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => user_user_pb.GetUserRequest;
  responseSerialize: (arg: user_user_pb.User) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => user_user_pb.User;
}

export interface IBookServiceClient {
  getBook(request: book_book_pb.GetBookRequest, callback: (error: Error | null, response: book_book_pb.Book) => void): grpc.ClientUnaryCall;
  getBook(request: book_book_pb.GetBookRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: book_book_pb.Book) => void): grpc.ClientUnaryCall;
  getBooksViaAuthor(request: book_book_pb.GetBookViaAuthorRequest, metadata?: grpc.Metadata): grpc.ClientReadableStream<book_book_pb.Book>;
  getGreatestBook(callback: (error: Error | null, response: book_book_pb.Book) => void): grpc.ClientWritableStream<book_book_pb.Book>;
  getGreatestBook(metadata: grpc.Metadata, callback: (error: Error | null, response: book_book_pb.Book) => void): grpc.ClientWritableStream<book_book_pb.Book>;
  getBooks(metadata?: grpc.Metadata): grpc.ClientDuplexStream<book_book_pb.GetBookRequest, book_book_pb.Book>;
  getBookUser(request: user_user_pb.GetUserRequest, callback: (error: Error | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
  getBookUser(request: user_user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
}

export const BookServiceService: IBookServiceService;
export class BookServiceClient extends grpc.Client implements IBookServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  public getBook(request: book_book_pb.GetBookRequest, callback: (error: Error | null, response: book_book_pb.Book) => void): grpc.ClientUnaryCall;
  public getBook(request: book_book_pb.GetBookRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: book_book_pb.Book) => void): grpc.ClientUnaryCall;
  public getBooksViaAuthor(request: book_book_pb.GetBookViaAuthorRequest, metadata?: grpc.Metadata): grpc.ClientReadableStream<book_book_pb.Book>;
  public getGreatestBook(callback: (error: Error | null, response: book_book_pb.Book) => void): grpc.ClientWritableStream<book_book_pb.Book>;
  public getGreatestBook(metadata: grpc.Metadata, callback: (error: Error | null, response: book_book_pb.Book) => void): grpc.ClientWritableStream<book_book_pb.Book>;
  public getBooks(metadata?: grpc.Metadata): grpc.ClientDuplexStream<book_book_pb.GetBookRequest, book_book_pb.Book>;
  public getBookUser(request: user_user_pb.GetUserRequest, callback: (error: Error | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
  public getBookUser(request: user_user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
}

interface IBookApiServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getBookApi: IGetBookApi
  getAuthorBookApi: IGetAuthorBookApi
}

interface IGetBookApi {
  path: string; // "/com.book.BookApiService/GetBookApi"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: book_book_pb.GetBookRequest;
  responseType: book_book_pb.Book;
  requestSerialize: (arg: book_book_pb.GetBookRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => book_book_pb.GetBookRequest;
  responseSerialize: (arg: book_book_pb.Book) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => book_book_pb.Book;
}

interface IGetAuthorBookApi {
  path: string; // "/com.book.BookApiService/GetAuthorBookApi"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: book_book_pb.GetAuthorBookApiRequest;
  responseType: book_book_pb.AuthorBook;
  requestSerialize: (arg: book_book_pb.GetAuthorBookApiRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => book_book_pb.GetAuthorBookApiRequest;
  responseSerialize: (arg: book_book_pb.AuthorBook) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => book_book_pb.AuthorBook;
}

export interface IBookApiServiceClient {
  getBookApi(request: book_book_pb.GetBookRequest, callback: (error: Error | null, response: book_book_pb.Book) => void): grpc.ClientUnaryCall;
  getBookApi(request: book_book_pb.GetBookRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: book_book_pb.Book) => void): grpc.ClientUnaryCall;
  getAuthorBookApi(request: book_book_pb.GetAuthorBookApiRequest, callback: (error: Error | null, response: book_book_pb.AuthorBook) => void): grpc.ClientUnaryCall;
  getAuthorBookApi(request: book_book_pb.GetAuthorBookApiRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: book_book_pb.AuthorBook) => void): grpc.ClientUnaryCall;
}

export const BookApiServiceService: IBookApiServiceService;
export class BookApiServiceClient extends grpc.Client implements IBookApiServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  public getBookApi(request: book_book_pb.GetBookRequest, callback: (error: Error | null, response: book_book_pb.Book) => void): grpc.ClientUnaryCall;
  public getBookApi(request: book_book_pb.GetBookRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: book_book_pb.Book) => void): grpc.ClientUnaryCall;
  public getAuthorBookApi(request: book_book_pb.GetAuthorBookApiRequest, callback: (error: Error | null, response: book_book_pb.AuthorBook) => void): grpc.ClientUnaryCall;
  public getAuthorBookApi(request: book_book_pb.GetAuthorBookApiRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: book_book_pb.AuthorBook) => void): grpc.ClientUnaryCall;
}


// package: com.book
// file: book/book.proto

import * as jspb from 'google-protobuf';
import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as user_user_pb from '../user/user_pb';

export class Book extends jspb.Message {
  getIsbn(): number;
  setIsbn(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getAuthor(): string;
  setAuthor(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Book.AsObject;
  static toObject(includeInstance: boolean, msg: Book): Book.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Book, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Book;
  static deserializeBinaryFromReader(message: Book, reader: jspb.BinaryReader): Book;
}

export namespace Book {
  export type AsObject = {
    isbn: number,
    title: string,
    author: string,
  }
}

export class AuthorBook extends jspb.Message {
  getIsbn(): number;
  setIsbn(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getAuthor(): string;
  setAuthor(value: string): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): user_user_pb.User | undefined;
  setUser(value?: user_user_pb.User): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  getSubTagsMap(): jspb.Map<string, string>;
  clearSubTagsMap(): void;
  clearBuyersList(): void;
  getBuyersList(): Array<user_user_pb.User>;
  setBuyersList(value: Array<user_user_pb.User>): void;
  addBuyers(value?: user_user_pb.User, index?: number): user_user_pb.User;

  getWritersMap(): jspb.Map<string, user_user_pb.User>;
  clearWritersMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorBook.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorBook): AuthorBook.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthorBook, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorBook;
  static deserializeBinaryFromReader(message: AuthorBook, reader: jspb.BinaryReader): AuthorBook;
}

export namespace AuthorBook {
  export type AsObject = {
    isbn: number,
    title: string,
    author: string,
    user?: user_user_pb.User.AsObject,
    tagsList: Array<string>,
    subTagsMap: Array<[string, string]>,
    buyersList: Array<user_user_pb.User.AsObject>,
    writersMap: Array<[string, user_user_pb.User.AsObject]>,
  }
}

export class GetBookRequest extends jspb.Message {
  getIsbn(): number;
  setIsbn(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBookRequest): GetBookRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBookRequest;
  static deserializeBinaryFromReader(message: GetBookRequest, reader: jspb.BinaryReader): GetBookRequest;
}

export namespace GetBookRequest {
  export type AsObject = {
    isbn: number,
  }
}

export class GetBookViaAuthorRequest extends jspb.Message {
  getAuthor(): string;
  setAuthor(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBookViaAuthorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBookViaAuthorRequest): GetBookViaAuthorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBookViaAuthorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBookViaAuthorRequest;
  static deserializeBinaryFromReader(message: GetBookViaAuthorRequest, reader: jspb.BinaryReader): GetBookViaAuthorRequest;
}

export namespace GetBookViaAuthorRequest {
  export type AsObject = {
    author: string,
  }
}

export class GetAuthorBookApiRequest extends jspb.Message {
  getIsbn(): number;
  setIsbn(value: number): void;

  getType(): string;
  setType(value: string): void;

  getAuthor(): string;
  setAuthor(value: string): void;

  getIsNew(): boolean;
  setIsNew(value: boolean): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): user_user_pb.User | undefined;
  setUser(value?: user_user_pb.User): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  getSubTagsMap(): jspb.Map<string, string>;
  clearSubTagsMap(): void;
  clearBuyersList(): void;
  getBuyersList(): Array<user_user_pb.User>;
  setBuyersList(value: Array<user_user_pb.User>): void;
  addBuyers(value?: user_user_pb.User, index?: number): user_user_pb.User;

  getWritersMap(): jspb.Map<string, user_user_pb.User>;
  clearWritersMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAuthorBookApiRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAuthorBookApiRequest): GetAuthorBookApiRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAuthorBookApiRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAuthorBookApiRequest;
  static deserializeBinaryFromReader(message: GetAuthorBookApiRequest, reader: jspb.BinaryReader): GetAuthorBookApiRequest;
}

export namespace GetAuthorBookApiRequest {
  export type AsObject = {
    isbn: number,
    type: string,
    author: string,
    isNew: boolean,
    user?: user_user_pb.User.AsObject,
    tagsList: Array<string>,
    subTagsMap: Array<[string, string]>,
    buyersList: Array<user_user_pb.User.AsObject>,
    writersMap: Array<[string, user_user_pb.User.AsObject]>,
  }
}

export class BookStore extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getBooksMap(): jspb.Map<number, string>;
  clearBooksMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BookStore.AsObject;
  static toObject(includeInstance: boolean, msg: BookStore): BookStore.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BookStore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BookStore;
  static deserializeBinaryFromReader(message: BookStore, reader: jspb.BinaryReader): BookStore;
}

export namespace BookStore {
  export type AsObject = {
    name: string,
    booksMap: Array<[number, string]>,
  }
}

export enum EnumSample {
  UNKNOWN = 0,
  STARTED = 1,
  RUNNING = 1,
}


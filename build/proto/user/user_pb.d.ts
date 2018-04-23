// package: com.user
// file: user/user.proto

import * as jspb from 'google-protobuf';

export class User extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasAuthor(): boolean;
  clearAuthor(): void;
  getAuthor(): UserAuthor | undefined;
  setAuthor(value?: UserAuthor): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: number,
    name: string,
    author?: UserAuthor.AsObject,
  }
}

export class UserAuthor extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getAuthor(): string;
  setAuthor(value: string): void;

  clearBookList(): void;
  getBookList(): Array<UserBook>;
  setBookList(value: Array<UserBook>): void;
  addBook(value?: UserBook, index?: number): UserBook;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserAuthor.AsObject;
  static toObject(includeInstance: boolean, msg: UserAuthor): UserAuthor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserAuthor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserAuthor;
  static deserializeBinaryFromReader(message: UserAuthor, reader: jspb.BinaryReader): UserAuthor;
}

export namespace UserAuthor {
  export type AsObject = {
    userId: number,
    author: string,
    bookList: Array<UserBook.AsObject>,
  }
}

export class UserBook extends jspb.Message {
  getIsbn(): number;
  setIsbn(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getAuthor(): string;
  setAuthor(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserBook.AsObject;
  static toObject(includeInstance: boolean, msg: UserBook): UserBook.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserBook, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserBook;
  static deserializeBinaryFromReader(message: UserBook, reader: jspb.BinaryReader): UserBook;
}

export namespace UserBook {
  export type AsObject = {
    isbn: number,
    title: string,
    author: string,
  }
}

export class GetUserRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRequest;
  static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
  export type AsObject = {
    id: number,
  }
}


import * as grpc from 'grpc';
import {Duplex, Readable, Writable} from 'stream';
import {GatewayContext, RpcContext} from 'matrixes-lib';
import {BookServiceClient} from '../../proto/book/book_grpc_pb';

import {GetBookRequest, Book, GetBookViaAuthorRequest} from '../../proto/book/book_pb';
import {GetUserRequest, User} from '../../proto/user/user_pb';

export default class MSBookServiceClient {

    public client: BookServiceClient;

    constructor(address: string, ctx?: GatewayContext | RpcContext) {
        this.client = new BookServiceClient(address, grpc.credentials.createInsecure());
    }

    // Send IRpcServerUnaryCall
    public getBook(request: GetBookRequest, metadata?: grpc.Metadata): Promise<Book> {
        return new Promise((resolve, reject) => {
            this.client.getBook(request, metadata, (err: Error, res: Book) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
        });
    }

    // Send IRpcServerWriteableStream
    public getBooksViaAuthor(request: GetBookViaAuthorRequest, metadata?: grpc.Metadata): Promise<Array<Book>> {
        return new Promise((resolve, reject) => {
            let call = this.client.getBooksViaAuthor(request, metadata) as Readable;
            let response = [] as Array<Book>;

            // receive response stream
            call.on('data', (res: Book) => {
                response.push(res);
            });

            call.on('error', (err: Error) => {
                reject(err);
            });

            call.on('end', () => {
                resolve(response);
            });
        });
    }

    // Send IRpcServerReadableStream
    public getGreatestBook(requests: Array<GetBookRequest>, metadata?: grpc.Metadata): Promise<Book> {
        return new Promise((resolve, reject) => {
            let call = this.client.getGreatestBook(metadata, (err: Error, res: Book) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            }) as Writable;

            // send request stream
            requests.forEach((request: GetBookRequest) => call.write(request));
            call.end();
        });
    }

    // Send IRpcServerDuplexStream
    public getBooks(requests: Array<GetBookRequest>, metadata?: grpc.Metadata): Promise<Array<Book>> {
        return new Promise((resolve, reject) => {
            let call = this.client.getBooks(metadata) as Duplex;
            let response = [] as Array<Book>;

            // receive response stream
            call.on('data', (res: Book) => {
                response.push(res);
            });

            call.on('error', (err: Error) => {
                reject(err);
            });

            call.on('end', () => {
                resolve(response);
            });

            // send request stream
            requests.forEach((request: GetBookRequest) => call.write(request));
            call.end();
        });
    }

    // Send IRpcServerUnaryCall
    public getBookUser(request: GetUserRequest, metadata?: grpc.Metadata): Promise<User> {
        return new Promise((resolve, reject) => {
            this.client.getBookUser(request, metadata, (err: Error, res: User) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
        });
    }

}

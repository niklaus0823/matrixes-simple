"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc = require("grpc");
const book_grpc_pb_1 = require("./proto/book/book_grpc_pb");
const book_pb_1 = require("./proto/book/book_pb");
const client = new book_grpc_pb_1.BookServiceClient('127.0.0.1:8080', grpc.credentials.createInsecure());
function getBook() {
    const request = new book_pb_1.GetBookRequest();
    request.setIsbn(1);
    // send request
    client.getBook(request, (err, response) => {
        // handle response
        console.log(`[getBook] response: ${JSON.stringify(response.toObject())}`);
        console.log(`[getBook] done`);
    });
}
function getBooks() {
    let call = client.getBooks();
    // handle stream call
    call.on('data', (response) => {
        console.log(`[getBooks] response: ${JSON.stringify(response.toObject())}`);
    });
    call.on('end', () => {
        console.log(`[getBooks] done`);
    });
    // send request
    for (let i = 1; i <= 10; i++) {
        const request = new book_pb_1.GetBookRequest();
        request.setIsbn(i);
        call.write(request);
    }
    call.end();
}
function getBooksViaAuthor() {
    const request = new book_pb_1.GetBookViaAuthorRequest();
    request.setAuthor('fengjie');
    let call = client.getBooksViaAuthor(request);
    call.on('data', (response) => {
        console.log(`[getBooksViaAuthor] response: ${JSON.stringify(response.toObject())}`);
    });
    call.on('end', () => {
        console.log(`[getBooksViaAuthor] done`);
    });
}
function getGreatesBook() {
    let call = client.getGreatestBook((error, response) => {
        console.log(`[getGreatesBook] response: ${JSON.stringify(response.toObject())}`);
        console.log(`[getGreatesBook] done`);
    });
    for (let i = 1; i <= 10; i++) {
        let request = new book_pb_1.GetBookRequest();
        request.setIsbn(i);
        call.write(request);
    }
    call.end();
}
getBook();
getBooks();
getBooksViaAuthor();
getGreatesBook();

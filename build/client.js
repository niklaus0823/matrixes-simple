"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc = require("grpc");
const book_pb_1 = require("./proto/book/book_pb");
const MSBookServiceClient_1 = require("./clients/book/MSBookServiceClient");
const md = new grpc.Metadata();
md.set('name', 'fengjie');
let bookClient = new MSBookServiceClient_1.default('127.0.0.1:8080');
function getBook() {
    const request = new book_pb_1.GetBookRequest();
    request.setIsbn(6);
    bookClient.getBook(request, md)
        .then((res) => {
        console.log(`[getBook] response: ${JSON.stringify(res.toObject())}`);
        console.log(`[getBook] done`);
    })
        .catch((err) => {
        console.log(`[getBook] err: ${err.message}`);
        console.log(`[getBook] done`);
    });
}
function getBooks() {
    const requests = [];
    for (let i = 6; i < 9; i++) {
        const request = new book_pb_1.GetBookRequest();
        request.setIsbn(i);
        requests.push(request);
    }
    bookClient.getBooks(requests, md)
        .then((res) => {
        res.forEach((book) => {
            console.log(`[getBooks] response: ${JSON.stringify(book.toObject())}`);
        });
        console.log(`[getBooks] done`);
    })
        .catch((err) => {
        console.log(`[getBooks] err: ${err.message}`);
        console.log(`[getBooks] done`);
    });
}
function getBooksViaAuthor() {
    const request = new book_pb_1.GetBookViaAuthorRequest();
    request.setAuthor('fengjie');
    bookClient.getBooksViaAuthor(request, md)
        .then((res) => {
        res.forEach((book) => {
            console.log(`[getBooksViaAuthor] response: ${JSON.stringify(book.toObject())}`);
        });
        console.log(`[getBooksViaAuthor] done`);
    })
        .catch((err) => {
        console.log(`[getBooksViaAuthor] err: ${err.message}`);
        console.log(`[getBooksViaAuthor] done`);
    });
}
function getGreatesBook() {
    const requests = [];
    for (let i = 1; i <= 10; i++) {
        const request = new book_pb_1.GetBookRequest();
        request.setIsbn(i);
        requests.push(request);
    }
    bookClient.getGreatestBook(requests, md)
        .then((res) => {
        console.log(`[getGreatestBook] response: ${JSON.stringify(res.toObject())}`);
        console.log(`[getGreatestBook] done`);
    })
        .catch((err) => {
        console.log(`[getGreatestBook] err: ${err.message}`);
        console.log(`[getGreatestBook] done`);
    });
}
getBook();
getBooks();
getBooksViaAuthor();
getGreatesBook();

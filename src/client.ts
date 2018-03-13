import * as grpc from 'grpc';
import {Duplex, Readable, Writable} from 'stream';
import {BookServiceClient} from './proto/book/book_grpc_pb';
import {Book, GetBookRequest, GetBookViaAuthorRequest} from './proto/book/book_pb';
import MSBookServiceClient from './clients/book/MSBookServiceClient';

const md = new grpc.Metadata();
md.set('name', 'fengjie');



let bookClient = new MSBookServiceClient('127.0.0.1:8080');

function getBook() {
    const request = new GetBookRequest();
    request.setIsbn(1);

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
    for (let i = 1; i <= 10; i++) {
        const request = new GetBookRequest();
        request.setIsbn(i);
        requests.push(request);

    }

    bookClient.getBooks(requests, md)
        .then((res) => {
            console.log(`[getBooks] response: ${JSON.stringify(res)}`);
            console.log(`[getBooks] done`);
        })
        .catch((err) => {
            console.log(`[getBooks] err: ${err.message}`);
            console.log(`[getBooks] done`);
        });
}

function getBooksViaAuthor() {
    const request = new GetBookViaAuthorRequest();
    request.setAuthor('fengjie');

    bookClient.getBooksViaAuthor(request, md)
        .then((res) => {
            console.log(`[getBooksViaAuthor] response: ${JSON.stringify(res)}`);
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
        const request = new GetBookRequest();
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

// getBook();
// getBooks();
// getBooksViaAuthor();
getGreatesBook();
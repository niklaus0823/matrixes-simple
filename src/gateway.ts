import * as grpc from 'grpc';
import {Duplex, Readable, Writable} from 'stream';
import {BookServiceClient} from './proto/book/book_grpc_pb';
import {Book, GetBookRequest, GetBookViaAuthorRequest} from './proto/book/book_pb';
import MSBookServiceClient from './clients/book/MSBookServiceClient';

const md = new grpc.Metadata();
md.set('name', 'fengjie');

let requests = [] as Array<GetBookRequest>;
for (let i = 1; i <= 10; i++) {
    let request = new GetBookRequest();
    request.setIsbn(i);
    requests.push(request);
}

const bookClient = new MSBookServiceClient('127.0.0.1:8080');
bookClient.getGreatestBook(requests, md)
    .then((res) => {
        console.log(`[getGreatesBook] response: ${JSON.stringify(res.toObject())}`);
        console.log(`[getGreatesBook] done`);
    })
    .catch((err) => {
        console.log(`[getGreatesBook] err: ${err.message}`);
        console.log(`[getGreatesBook] done`);
    });
// const client = new BookServiceClient('127.0.0.1:8080', grpc.credentials.createInsecure());
// function getBook() {
//     const request = new GetBookRequest();
//     request.setIsbn(1);
//
//     // send request
//     client.getBook(request, md, (err, response: Book) => {
//         // handle response
//         console.log(`[getBook] response: ${JSON.stringify(response.toObject())}`);
//         console.log(`[getBook] done`);
//     });
// }
//
// function getBooks() {
//     let call = client.getBooks(md) as Duplex;
//
//     // handle stream call
//     call.on('data', (response: Book) => {
//         console.log(`[getBooks] response: ${JSON.stringify(response.toObject())}`);
//     });
//     call.on('end', () => {
//         console.log(`[getBooks] done`);
//     });
//
//     // send request
//     for (let i = 1; i <= 10; i++) {
//         const request = new GetBookRequest();
//         request.setIsbn(i);
//         call.write(request);
//     }
//
//     call.end();
// }
//
// function getBooksViaAuthor() {
//     const request = new GetBookViaAuthorRequest();
//     request.setAuthor('fengjie');
//
//     let call = client.getBooksViaAuthor(request, md) as Readable;
//     call.on('data', (response: Book) => {
//         console.log(`[getBooksViaAuthor] response: ${JSON.stringify(response.toObject())}`);
//     });
//     call.on('end', () => {
//         console.log(`[getBooksViaAuthor] done`);
//     });
// }
//
// function getGreatesBook() {
//     let call: Writable = client.getGreatestBook(md, (error, response: Book) => {
//         console.log(`[getGreatesBook] response: ${JSON.stringify(response.toObject())}`);
//         console.log(`[getGreatesBook] done`);
//     });
//
//     for (let i = 1; i <= 10; i++) {
//         let request = new GetBookRequest();
//         request.setIsbn(i);
//         call.write(request);
//     }
//
//     call.end();
// }

// getBook();
// getBooks();
// getBooksViaAuthor();
// getGreatesBook();
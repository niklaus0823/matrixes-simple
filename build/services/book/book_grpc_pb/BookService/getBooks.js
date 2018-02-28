"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_pb_1 = require("../../../../proto/book/book_pb");
exports.getBooksHandler = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const call = ctx.call;
    console.log(`[getBooksHandler] start`);
    yield getBooks(call, ctx);
    console.log(`[getBooksHandler] done`);
    call.end();
    console.log(`[getBooksHandler] end`);
    return Promise.resolve();
});
function getBooks(call, ctx) {
    return new Promise((resolve) => {
        call.on('data', (request) => {
            console.log(`[getBooksHandler] request: ${JSON.stringify(request.toObject())}`);
            let book = new book_pb_1.Book();
            book.setIsbn(request.getIsbn());
            book.setAuthor('mars');
            book.setTitle('Book Title ' + request.getIsbn());
            call.write(book);
            console.log(`[getBooksHandler] response: ${JSON.stringify(book.toObject())}`);
        });
        call.on('end', () => {
            resolve(true);
        });
    });
}

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
exports.getBooksViaAuthorHandler = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const call = ctx.call;
    console.log(`[getBooksViaAuthorHandler] start`);
    yield getBooksViaAuthor(call, ctx);
    console.log(`[getBooksViaAuthorHandler] done`);
    call.end();
    console.log(`[getBooksViaAuthorHandler] end`);
    return Promise.resolve();
});
function getBooksViaAuthor(call, ctx) {
    let request = call.request;
    console.log(`[getBooksViaAuthorHandler] request: ${JSON.stringify(request.toObject())}`);
    for (let i = 1; i <= 10; i++) {
        let book = new book_pb_1.Book();
        book.setIsbn(i);
        book.setAuthor('mars');
        book.setTitle('Book Title');
        call.write(book);
        console.log(`[getBooksHandler] response: ${JSON.stringify(book.toObject())}`);
    }
    return Promise.resolve(true);
}

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
exports.getBookHandler = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    let call = ctx.call;
    let callback = ctx.callback;
    let request = call.request;
    console.log(`[getBookHandler] start`);
    const book = yield getBook(call, ctx);
    console.log(`[getBookHandler] done`);
    callback(null, book);
    console.log(`[getBookHandler] end`);
    return Promise.resolve();
});
function getBook(call, ctx) {
    let request = call.request;
    console.log(`[getBookHandler] request: ${JSON.stringify(request.toObject())}`);
    let book = new book_pb_1.Book();
    book.setIsbn(request.getIsbn());
    book.setAuthor('mars');
    book.setTitle('Book Title');
    console.log(`[getBookHandler] response: ${JSON.stringify(book.toObject())}`);
    return Promise.resolve(book);
}

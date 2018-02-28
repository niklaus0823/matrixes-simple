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
exports.getGreatesBookHandler = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const call = ctx.call;
    const callback = ctx.callback;
    console.log(`[getGreatesBookHandler] start`);
    const book = yield getGreatesBook(call, ctx);
    console.log(`[getGreatesBookHandler] done`);
    callback(null, book);
    console.log(`[getGreatesBookHandler] end`);
    return Promise.resolve();
});
function getGreatesBook(call, ctx) {
    return new Promise((resolve) => {
        let lastRequest;
        call.on('data', (request) => {
            console.log(`[getGreatesBookHandler] request: ${JSON.stringify(request.toObject())}`);
            lastRequest = request;
        });
        call.on('end', () => {
            let book = new book_pb_1.Book();
            // book.setIsbn(lastRequest.getIsbn());
            // book.setAuthor('mars');
            // book.setTitle('Book Title ' + lastRequest.getIsbn());
            console.log(`[getGreatesBookHandler] response: ${JSON.stringify(book.toObject())}`);
            resolve(book);
        });
    });
}

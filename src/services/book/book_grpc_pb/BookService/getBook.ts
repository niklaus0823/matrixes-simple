import {RpcContext, RpcMiddleware, MiddlewareNext, IRpcServerCallback, IRpcServerUnaryCall} from 'matrixes-lib';
import {GetBookRequest, Book} from '../../../../proto/book/book_pb';

export const getBookHandler: RpcMiddleware = async (ctx: RpcContext, next: MiddlewareNext) => {
    let call = ctx.call as IRpcServerUnaryCall<GetBookRequest>;
    let callback = ctx.callback as IRpcServerCallback<Book>;
    let request = call.request as GetBookRequest;

    console.log(`[getBookHandler] start`);
    const book = await getBook(call, ctx);
    console.log(`[getBookHandler] done`);

    callback(null, book);
    console.log(`[getBookHandler] end`);
    return Promise.resolve();
};

function getBook(call: IRpcServerUnaryCall<GetBookRequest>, ctx?: RpcContext): Promise<Book> {
    let request = call.request as GetBookRequest;
    console.log(`[getBookHandler] request: ${JSON.stringify(request.toObject())}`);

    let book = new Book();
    book.setIsbn(request.getIsbn());
    book.setAuthor('mars');
    book.setTitle('Book Title');

    console.log(`[getBookHandler] response: ${JSON.stringify(book.toObject())}`);

    return Promise.resolve(book);
}
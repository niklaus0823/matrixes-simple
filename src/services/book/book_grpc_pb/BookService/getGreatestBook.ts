import {RpcContext, RpcMiddleware, MiddlewareNext, IRpcServerCallback, IRpcServerReadableStream} from 'matrixes-lib';
import {GetBookRequest, Book} from '../../../../proto/book/book_pb';

export const getGreatestBookHandler: RpcMiddleware = async (ctx: RpcContext, next: MiddlewareNext) => {
    let call = ctx.call as IRpcServerReadableStream<GetBookRequest>;
    let callback = ctx.callback as IRpcServerCallback<Book>;

    console.log(`[getGreatesBookHandler] start`);
    const book = await getGreatesBook(call, ctx);
    console.log(`[getGreatesBookHandler] done`);

    callback(null, book);
    console.log(`[getGreatesBookHandler] end`);
    return Promise.resolve();
};

function getGreatesBook(call: IRpcServerReadableStream<GetBookRequest>, ctx?: RpcContext): Promise<Book> {
    return new Promise((resolve) => {
        let lastRequest: GetBookRequest;
        call.on('data', (request: GetBookRequest) => {
            console.log(`[getGreatesBookHandler] request: ${JSON.stringify(request.toObject())}`);
            lastRequest = request;
        });

        call.on('end', () => {
            let book = new Book();
            book.setIsbn(lastRequest.getIsbn());
            book.setAuthor('mars');
            book.setTitle('Book Title ' + lastRequest.getIsbn());

            console.log(`[getGreatesBookHandler] response: ${JSON.stringify(book.toObject())}`);
            resolve(book);
        });
    });
}
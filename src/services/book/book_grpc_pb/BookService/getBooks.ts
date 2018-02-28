import {RpcContext, RpcMiddleware, MiddlewareNext, IRpcServerDuplexStream} from 'matrixes-lib';
import {GetBookRequest, Book,} from '../../../../proto/book/book_pb';

export const getBooksHandler: RpcMiddleware = async (ctx: RpcContext, next: MiddlewareNext) => {
    const call = ctx.call as IRpcServerDuplexStream<GetBookRequest, Book>;

    console.log(`[getBooksHandler] start`);
    await getBooks(call, ctx);
    console.log(`[getBooksHandler] done`);

    call.end();
    console.log(`[getBooksHandler] end`);
    return Promise.resolve();
};

function getBooks(call: IRpcServerDuplexStream<GetBookRequest, Book>, ctx?: RpcContext): Promise<boolean> {
    return new Promise((resolve) => {
        call.on('data', (request: GetBookRequest) => {
            console.log(`[getBooksHandler] request: ${JSON.stringify(request.toObject())}`);
            let book = new Book();
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
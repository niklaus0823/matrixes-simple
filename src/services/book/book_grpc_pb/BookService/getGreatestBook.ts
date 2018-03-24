import {
    RpcContext,
    RpcMiddleware,
    MiddlewareNext,
    IRpcServerCallback,
    IRpcServerReadableStream,
    joi,
    joiType
} from 'matrixes-lib';
import {GetBookRequest, Book} from '../../../../proto/book/book_pb';

export const getGreatestBookHandler: RpcMiddleware = async (ctx: RpcContext, next: MiddlewareNext) => {
    let call = ctx.call as IRpcServerReadableStream<GetBookRequest>;
    let callback = ctx.callback as IRpcServerCallback<Book>;

    console.log(`[getGreatesBookHandler] start`);

    try {
        const book = await getGreatesBook(call, ctx);

        console.log(`[getBooksHandler] done`);

        callback(null, book);

    } catch (e) {
        console.log(`[getBooksHandler] error: ${e.message}`);

        call.emit('error', e);
    }

    console.log(`[getGreatesBookHandler] end`);
    return Promise.resolve();
};

function getGreatesBook(call: IRpcServerReadableStream<GetBookRequest>, ctx?: RpcContext): Promise<Book> {
    return new Promise((resolve, reject) => {
        let lastRequest: GetBookRequest;
        call.on('data', async (request: GetBookRequest) => {
            try {
                await ctx.validate(request, {
                    isbn: joiType.vInt64.activate().required().greater(5).less(10),
                });

                console.log(`[getGreatesBookHandler] request: ${JSON.stringify(request.toObject())}`);
                lastRequest = request;
            } catch (e) {
                reject(e);
            }
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
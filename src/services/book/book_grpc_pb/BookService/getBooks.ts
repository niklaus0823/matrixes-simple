import {RpcContext, RpcMiddleware, MiddlewareNext, IRpcServerDuplexStream, joi, joiType} from 'matrixes-lib';
import {GetBookRequest, Book} from '../../../../proto/book/book_pb';

export const getBooksHandler: RpcMiddleware = async (ctx: RpcContext, next: MiddlewareNext) => {
    let call = ctx.call as IRpcServerDuplexStream<GetBookRequest, Book>;

    console.log(`[getBooksHandler] start`);

    try {
        await getBooks(call, ctx);

        console.log(`[getBooksHandler] done`);

        call.end();
    } catch (e) {
        console.log(`[getBooksHandler] error: ${e.message}`);

        call.emit('error', e);
    }

    console.log(`[getBooksHandler] end`);

    return Promise.resolve();
};

function getBooks(call: IRpcServerDuplexStream<GetBookRequest, Book>, ctx?: RpcContext): Promise<boolean> {
    return new Promise((resolve, reject) => {
        call.on('data', async (request: GetBookRequest) => {
            try {
                await ctx.validate(request, {
                    isbn: joiType.vInt64.activate().required().greater(5).less(10),
                });

                console.log(`[getBooksHandler] request: ${JSON.stringify(request.toObject())}`);
                let book = new Book();
                book.setIsbn(request.getIsbn());
                book.setAuthor('mars');
                book.setTitle('Book Title ' + request.getIsbn());
                call.write(book);
                console.log(`[getBooksHandler] response: ${JSON.stringify(book.toObject())}`);
            } catch (e) {
                reject(e);
            }
        });

        call.on('end', () => {
            resolve(true);
        });
    });
}
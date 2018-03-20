import {RpcContext, RpcMiddleware, MiddlewareNext, IRpcServerWriteableStream, joi, joiType} from 'matrixes-lib';
import {GetBookViaAuthorRequest, Book} from '../../../../proto/book/book_pb';

export const getBooksViaAuthorHandler: RpcMiddleware = async (ctx: RpcContext, next: MiddlewareNext) => {
    let call = ctx.call as IRpcServerWriteableStream<GetBookViaAuthorRequest>;
    let request = call.request as GetBookViaAuthorRequest;

    console.log(`[getBooksViaAuthorHandler] start`);

    try {
        await ctx.validate(request, {
            author: joiType.vString.activate().required().min(5).max(10),
        });

        await getBooksViaAuthor(call, ctx);

        console.log(`[getBooksViaAuthorHandler] done`);

        call.end();
    } catch (e) {
        console.log(`[getBooksViaAuthorHandler] error: ${e.message}`);

        call.emit('error', e);
    }

    console.log(`[getBooksViaAuthorHandler] end`);
    return Promise.resolve();
};

function getBooksViaAuthor(call: IRpcServerWriteableStream<GetBookViaAuthorRequest>, ctx?: RpcContext): Promise<boolean> {
    let request = call.request as GetBookViaAuthorRequest;

    console.log(`[getBooksViaAuthorHandler] request: ${JSON.stringify(request.toObject())}`);

    for (let i = 1; i <= 10; i++) {
        let book = new Book();
        book.setIsbn(i);
        book.setAuthor('mars');
        book.setTitle('Book Title');
        call.write(book);
        console.log(`[getBooksHandler] response: ${JSON.stringify(book.toObject())}`);
    }

    return Promise.resolve(true);
}

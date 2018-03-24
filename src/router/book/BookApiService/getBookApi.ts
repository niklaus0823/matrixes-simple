import * as Mock from 'mockjs';
import {GatewayApiBase, GatewayContext, MiddlewareNext, joi, joiType} from 'matrixes-lib';
import {GetBookRequest, Book} from '../../../proto/book/book_pb';

interface RequestParams {
    body: GetBookRequest.AsObject;
}

class GetBookApi extends GatewayApiBase {

    constructor() {
        super();
        this.method = 'post';
        this.uri = '/v1/getBook';
        this.type = 'application/json; charset=utf-8';
        this.schemaDefObj = {
            body: joi.object().keys({
                isbn: joiType.vInt64.activate().required().greater(5).less(10),
            })
        };
    }

    public async handle(ctx: GatewayContext, next: MiddlewareNext, params: RequestParams): Promise<Book.AsObject> {
        return Promise.resolve((new Book()).toObject());
    }

    public async handleMock(ctx: GatewayContext, next: MiddlewareNext, params: RequestParams): Promise<Book.AsObject> {
        const response = new Book();

        response.setIsbn(Mock.Random.natural());
        response.setTitle(Mock.Random.string('symbol', 5, 10));
        response.setAuthor(Mock.Random.string('symbol', 5, 10));

        return Promise.resolve(response.toObject());
    }
}

export const api = new GetBookApi();

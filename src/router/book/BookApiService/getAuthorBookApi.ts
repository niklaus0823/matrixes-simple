import {GatewayApiBase, GatewayContext, MiddlewareNext, joi, joiType} from 'matrixes-lib';
import {GetAuthorBookApiRequest, AuthorBook} from '../../../proto/book/book_pb';

interface RequestParams {
    body: GetAuthorBookApiRequest.AsObject;
}

class GetAuthorBookApi extends GatewayApiBase {

    constructor() {
        super();
        this.method = 'post';
        this.uri = '/v1/getBookUser';
        this.type = 'application/json; charset=utf-8';
        this.schemaDefObj = {
            body: joi.object().keys({
                isbn: joiType.vInt64.activate().required().greater(5).less(10),
                type: joiType.vString.activate().required().valid(['GMAIL', 'YAHOO']),
                author: joiType.vString.activate().required().min(5).max(10),
                isNew: joiType.vBool.activate().required().truthy(['1', 1, 'true']).falsy(['0', 0, 'false']),
                user: joi.object().keys({
                    id: joiType.vInt64.activate(),
                    name: joiType.vString.activate(),
                }).required(),
                tagsList: joi.array().items(joiType.vString.activate()),
                subTagsMap: joi.object().pattern(/\w+/, joiType.vString.activate().min(5).max(10)).required(),
                buyersList: joi.array().items(joi.object().keys({
                    id: joiType.vInt64.activate(),
                    name: joiType.vString.activate(),
                })),
                writersMap: joi.object().pattern(/\w+/, joi.object().keys({
                    id: joiType.vInt64.activate(),
                    name: joiType.vString.activate(),
                })),
            })
        };
    }

    public async handle(ctx: GatewayContext, next: MiddlewareNext, params: RequestParams): Promise<AuthorBook.AsObject> {
        return Promise.resolve((new AuthorBook()).toObject());
    }

    public async handleMock(ctx: GatewayContext, next: MiddlewareNext, params: RequestParams): Promise<AuthorBook.AsObject> {
        return Promise.resolve((new AuthorBook()).toObject());
    }
}

export const api = new GetAuthorBookApi();

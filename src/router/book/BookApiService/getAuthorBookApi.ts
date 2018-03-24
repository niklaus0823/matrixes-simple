import * as Mock from 'mockjs';
import {GatewayApiBase, GatewayContext, MiddlewareNext, joi, joiType} from 'matrixes-lib';
import {GetAuthorBookApiRequest, AuthorBook} from '../../../proto/book/book_pb';
import {UserBook, UserAuthor, User} from '../../../proto/user/user_pb';

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
                    author: joi.object().keys({
                        userId: joiType.vInt64.activate(),
                        author: joiType.vString.activate(),
                        bookList: joi.array().items(joi.object().keys({
                            isbn: joiType.vInt64.activate(),
                            title: joiType.vString.activate(),
                            author: joiType.vString.activate(),
                        })),
                    }),
                }).required(),
                tagsList: joi.array().items(joiType.vString.activate()),
                subTagsMap: joi.object().pattern(/\w+/, joiType.vString.activate().min(5).max(10)).required(),
                buyersList: joi.array().items(joi.object().keys({
                    id: joiType.vInt64.activate(),
                    name: joiType.vString.activate(),
                    author: joi.object().keys({
                        userId: joiType.vInt64.activate(),
                        author: joiType.vString.activate(),
                        bookList: joi.array().items(joi.object().keys({
                            isbn: joiType.vInt64.activate(),
                            title: joiType.vString.activate(),
                            author: joiType.vString.activate(),
                        })),
                    }),
                })),
                writersMap: joi.object().pattern(/\w+/, joi.object().keys({
                    id: joiType.vInt64.activate(),
                    name: joiType.vString.activate(),
                    author: joi.object().keys({
                        userId: joiType.vInt64.activate(),
                        author: joiType.vString.activate(),
                        bookList: joi.array().items(joi.object().keys({
                            isbn: joiType.vInt64.activate(),
                            title: joiType.vString.activate(),
                            author: joiType.vString.activate(),
                        })),
                    }),
                })),
            })
        };
    }

    public async handle(ctx: GatewayContext, next: MiddlewareNext, params: RequestParams): Promise<AuthorBook.AsObject> {
        return Promise.resolve((new AuthorBook()).toObject());
    }

    public async handleMock(ctx: GatewayContext, next: MiddlewareNext, params: RequestParams): Promise<AuthorBook.AsObject> {
        const response = new AuthorBook();

        response.setIsbn(Mock.Random.natural());
        response.setTitle(Mock.Random.string('symbol', 5, 10));
        response.setAuthor(Mock.Random.string('symbol', 5, 10));

        // PB user.User
        const user = new User();
        user.setId(Mock.Random.natural());
        user.setName(Mock.Random.string('symbol', 5, 10));

        // PB user.UserAuthor
        const userAuthor = new UserAuthor();
        userAuthor.setUserId(Mock.Random.natural());
        userAuthor.setAuthor(Mock.Random.string('symbol', 5, 10));

        // List bookList
        const bookList: Array<UserBook> = [];
        (Mock.Random.range(Mock.Random.natural(1, 5), Mock.Random.natural(6, 10)) as any).forEach(() => {
            // PB user.UserBook
            const userBook = new UserBook();
            userBook.setIsbn(Mock.Random.natural());
            userBook.setTitle(Mock.Random.string('symbol', 5, 10));
            userBook.setAuthor(Mock.Random.string('symbol', 5, 10));

            bookList.push(userBook);
        });
        userAuthor.setBookList(bookList);

        user.setAuthor(userAuthor);

        response.setUser(user);

        // List tagsList
        const tagsList: Array<string> = [];
        (Mock.Random.range(Mock.Random.natural(1, 5), Mock.Random.natural(6, 10)) as any).forEach((num) => {
            tagsList.push(Mock.Random.string('symbol', 5, 10));
        });
        response.setTagsList(tagsList);

        // Map subTagsMap
        (Mock.Random.range(Mock.Random.natural(1, 5), Mock.Random.natural(6, 10)) as any).forEach((num) => {
            response.getSubTagsMap().set(num, Mock.Random.string('symbol', 5, 10));
        });

        // List buyersList
        const buyersList: Array<User> = [];
        (Mock.Random.range(Mock.Random.natural(1, 5), Mock.Random.natural(6, 10)) as any).forEach(() => {
            // PB user.User
            const user = new User();
            user.setId(Mock.Random.natural());
            user.setName(Mock.Random.string('symbol', 5, 10));

            // PB user.UserAuthor
            const userAuthor = new UserAuthor();
            userAuthor.setUserId(Mock.Random.natural());
            userAuthor.setAuthor(Mock.Random.string('symbol', 5, 10));

            // List bookList
            const bookList: Array<UserBook> = [];
            (Mock.Random.range(Mock.Random.natural(1, 5), Mock.Random.natural(6, 10)) as any).forEach(() => {
                // PB user.UserBook
                const userBook = new UserBook();
                userBook.setIsbn(Mock.Random.natural());
                userBook.setTitle(Mock.Random.string('symbol', 5, 10));
                userBook.setAuthor(Mock.Random.string('symbol', 5, 10));

                bookList.push(userBook);
            });
            userAuthor.setBookList(bookList);

            user.setAuthor(userAuthor);

            buyersList.push(user);
        });
        response.setBuyersList(buyersList);

        // Map writersMap
        (Mock.Random.range(Mock.Random.natural(1, 5), Mock.Random.natural(6, 10)) as any).forEach((num: string) => {
            // PB user.User
            const user = new User();
            user.setId(Mock.Random.natural());
            user.setName(Mock.Random.string('symbol', 5, 10));

            // PB user.UserAuthor
            const userAuthor = new UserAuthor();
            userAuthor.setUserId(Mock.Random.natural());
            userAuthor.setAuthor(Mock.Random.string('symbol', 5, 10));

            // List bookList
            const bookList: Array<UserBook> = [];
            (Mock.Random.range(Mock.Random.natural(1, 5), Mock.Random.natural(6, 10)) as any).forEach(() => {
                // PB user.UserBook
                const userBook = new UserBook();
                userBook.setIsbn(Mock.Random.natural());
                userBook.setTitle(Mock.Random.string('symbol', 5, 10));
                userBook.setAuthor(Mock.Random.string('symbol', 5, 10));

                bookList.push(userBook);
            });
            userAuthor.setBookList(bookList);

            user.setAuthor(userAuthor);

            response.getWritersMap().set(num, user);
        });

        return Promise.resolve(response.toObject());
    }
}

export const api = new GetAuthorBookApi();

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
const Mock = require("mockjs");
const matrixes_lib_1 = require("matrixes-lib");
const book_pb_1 = require("../../../proto/book/book_pb");
const user_pb_1 = require("../../../proto/user/user_pb");
class GetAuthorBookApi extends matrixes_lib_1.GatewayApiBase {
    constructor() {
        super();
        this.method = 'post';
        this.uri = '/v1/getBookUser';
        this.type = 'application/json; charset=utf-8';
        this.schemaDefObj = {
            body: matrixes_lib_1.joi.object().keys({
                isbn: matrixes_lib_1.joiType.vInt64.activate().required().greater(5).less(10),
                type: matrixes_lib_1.joiType.vString.activate().required().valid(['GMAIL', 'YAHOO']),
                author: matrixes_lib_1.joiType.vString.activate().required().min(5).max(10),
                isNew: matrixes_lib_1.joiType.vBool.activate().required().truthy(['1', 1, 'true']).falsy(['0', 0, 'false']),
                user: matrixes_lib_1.joi.object().keys({
                    id: matrixes_lib_1.joiType.vInt64.activate(),
                    name: matrixes_lib_1.joiType.vString.activate(),
                    author: matrixes_lib_1.joi.object().keys({
                        userId: matrixes_lib_1.joiType.vInt64.activate(),
                        author: matrixes_lib_1.joiType.vString.activate(),
                        bookList: matrixes_lib_1.joi.array().items(matrixes_lib_1.joi.object().keys({
                            isbn: matrixes_lib_1.joiType.vInt64.activate(),
                            title: matrixes_lib_1.joiType.vString.activate(),
                            author: matrixes_lib_1.joiType.vString.activate(),
                        })),
                    }),
                }).required(),
                tagsList: matrixes_lib_1.joi.array().items(matrixes_lib_1.joiType.vString.activate()),
                subTagsMap: matrixes_lib_1.joi.object().pattern(/\w+/, matrixes_lib_1.joiType.vString.activate().min(5).max(10)).required(),
                buyersList: matrixes_lib_1.joi.array().items(matrixes_lib_1.joi.object().keys({
                    id: matrixes_lib_1.joiType.vInt64.activate(),
                    name: matrixes_lib_1.joiType.vString.activate(),
                    author: matrixes_lib_1.joi.object().keys({
                        userId: matrixes_lib_1.joiType.vInt64.activate(),
                        author: matrixes_lib_1.joiType.vString.activate(),
                        bookList: matrixes_lib_1.joi.array().items(matrixes_lib_1.joi.object().keys({
                            isbn: matrixes_lib_1.joiType.vInt64.activate(),
                            title: matrixes_lib_1.joiType.vString.activate(),
                            author: matrixes_lib_1.joiType.vString.activate(),
                        })),
                    }),
                })),
                writersMap: matrixes_lib_1.joi.object().pattern(/\w+/, matrixes_lib_1.joi.object().keys({
                    id: matrixes_lib_1.joiType.vInt64.activate(),
                    name: matrixes_lib_1.joiType.vString.activate(),
                    author: matrixes_lib_1.joi.object().keys({
                        userId: matrixes_lib_1.joiType.vInt64.activate(),
                        author: matrixes_lib_1.joiType.vString.activate(),
                        bookList: matrixes_lib_1.joi.array().items(matrixes_lib_1.joi.object().keys({
                            isbn: matrixes_lib_1.joiType.vInt64.activate(),
                            title: matrixes_lib_1.joiType.vString.activate(),
                            author: matrixes_lib_1.joiType.vString.activate(),
                        })),
                    }),
                })),
            })
        };
    }
    handle(ctx, next, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve((new book_pb_1.AuthorBook()).toObject());
        });
    }
    handleMock(ctx, next, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new book_pb_1.AuthorBook();
            response.setIsbn(Mock.Random.natural());
            response.setTitle(Mock.Random.string('symbol', 5, 10));
            response.setAuthor(Mock.Random.string('symbol', 5, 10));
            // PB user.User
            const user = new user_pb_1.User();
            user.setId(Mock.Random.natural());
            user.setName(Mock.Random.string('symbol', 5, 10));
            // PB user.UserAuthor
            const userAuthor = new user_pb_1.UserAuthor();
            userAuthor.setUserId(Mock.Random.natural());
            userAuthor.setAuthor(Mock.Random.string('symbol', 5, 10));
            // List bookList
            const bookList = [];
            Mock.Random.range(Mock.Random.natural(1, 5), Mock.Random.natural(6, 10)).forEach(() => {
                // PB user.UserBook
                const userBook = new user_pb_1.UserBook();
                userBook.setIsbn(Mock.Random.natural());
                userBook.setTitle(Mock.Random.string('symbol', 5, 10));
                userBook.setAuthor(Mock.Random.string('symbol', 5, 10));
                bookList.push(userBook);
            });
            userAuthor.setBookList(bookList);
            user.setAuthor(userAuthor);
            response.setUser(user);
            // List tagsList
            const tagsList = [];
            Mock.Random.range(Mock.Random.natural(1, 5), Mock.Random.natural(6, 10)).forEach((num) => {
                tagsList.push(Mock.Random.string('symbol', 5, 10));
            });
            response.setTagsList(tagsList);
            // Map subTagsMap
            Mock.Random.range(Mock.Random.natural(1, 5), Mock.Random.natural(6, 10)).forEach((num) => {
                response.getSubTagsMap().set(num, Mock.Random.string('symbol', 5, 10));
            });
            // List buyersList
            const buyersList = [];
            Mock.Random.range(Mock.Random.natural(1, 5), Mock.Random.natural(6, 10)).forEach(() => {
                // PB user.User
                const user = new user_pb_1.User();
                user.setId(Mock.Random.natural());
                user.setName(Mock.Random.string('symbol', 5, 10));
                // PB user.UserAuthor
                const userAuthor = new user_pb_1.UserAuthor();
                userAuthor.setUserId(Mock.Random.natural());
                userAuthor.setAuthor(Mock.Random.string('symbol', 5, 10));
                // List bookList
                const bookList = [];
                Mock.Random.range(Mock.Random.natural(1, 5), Mock.Random.natural(6, 10)).forEach(() => {
                    // PB user.UserBook
                    const userBook = new user_pb_1.UserBook();
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
            Mock.Random.range(Mock.Random.natural(1, 5), Mock.Random.natural(6, 10)).forEach((num) => {
                // PB user.User
                const user = new user_pb_1.User();
                user.setId(Mock.Random.natural());
                user.setName(Mock.Random.string('symbol', 5, 10));
                // PB user.UserAuthor
                const userAuthor = new user_pb_1.UserAuthor();
                userAuthor.setUserId(Mock.Random.natural());
                userAuthor.setAuthor(Mock.Random.string('symbol', 5, 10));
                // List bookList
                const bookList = [];
                Mock.Random.range(Mock.Random.natural(1, 5), Mock.Random.natural(6, 10)).forEach(() => {
                    // PB user.UserBook
                    const userBook = new user_pb_1.UserBook();
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
        });
    }
}
exports.api = new GetAuthorBookApi();

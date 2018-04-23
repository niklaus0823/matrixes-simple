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
class GetBookApi extends matrixes_lib_1.GatewayApiBase {
    constructor() {
        super();
        this.method = 'post';
        this.uri = '/v1/getBook';
        this.type = 'application/json; charset=utf-8';
        this.schemaDefObj = {
            body: matrixes_lib_1.joi.object().keys({
                isbn: matrixes_lib_1.joiType.vInt64.activate().required().greater(5).less(10),
            })
        };
    }
    handle(ctx, next, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve((new book_pb_1.Book()).toObject());
        });
    }
    handleMock(ctx, next, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new book_pb_1.Book();
            response.setIsbn(Mock.Random.natural());
            response.setTitle(Mock.Random.string('symbol', 5, 10));
            response.setAuthor(Mock.Random.string('symbol', 5, 10));
            return Promise.resolve(response.toObject());
        });
    }
}
exports.api = new GetBookApi();

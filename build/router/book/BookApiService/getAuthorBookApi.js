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
const matrixes_lib_1 = require("matrixes-lib");
const book_pb_1 = require("../../../proto/book/book_pb");
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
                }).required(),
                tagsList: matrixes_lib_1.joi.array().items(matrixes_lib_1.joiType.vString.activate()),
                subTagsMap: matrixes_lib_1.joi.object().pattern(/\w+/, matrixes_lib_1.joiType.vString.activate().min(5).max(10)).required(),
                buyersList: matrixes_lib_1.joi.array().items(matrixes_lib_1.joi.object().keys({
                    id: matrixes_lib_1.joiType.vInt64.activate(),
                    name: matrixes_lib_1.joiType.vString.activate(),
                })),
                writersMap: matrixes_lib_1.joi.object().pattern(/\w+/, matrixes_lib_1.joi.object().keys({
                    id: matrixes_lib_1.joiType.vInt64.activate(),
                    name: matrixes_lib_1.joiType.vString.activate(),
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
            return Promise.resolve((new book_pb_1.AuthorBook()).toObject());
        });
    }
}
exports.api = new GetAuthorBookApi();

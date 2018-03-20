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
const memcached_pb_1 = require("../../../../proto/memcached/memcached_pb");
exports.memSetMultiHandler = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    let call = ctx.call;
    let callback = ctx.callback;
    let request = call.request;
    try {
        yield ctx.validate(request, {
            multiSetsList: matrixes_lib_1.joi.array().items(matrixes_lib_1.joi.any()),
        });
        callback(null, new memcached_pb_1.BoolsResponse());
    }
    catch (e) {
        callback(e, null);
    }
    yield next();
    return Promise.resolve();
});

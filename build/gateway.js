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
const Router_1 = require("./router/Router");
class Server {
    constructor() {
        this._initialized = false;
    }
    init(isDev = false) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Router_1.default.instance().init();
            this.app = new matrixes_lib_1.Koa();
            this.app.use(matrixes_lib_1.KoaBodyParser({ formLimit: '2048kb' }));
            this.app.use(Router_1.default.instance().getRouter().routes());
            this._initialized = true;
            return Promise.resolve();
        });
    }
    start() {
        if (!this._initialized) {
            return;
        }
        const host = '0.0.0.0';
        const port = '8081';
        this.app.listen(port, host, () => {
            console.log(`server start, Address: ${host}:${port}!`);
        });
    }
}
const server = new Server();
server.init(process.env.NODE_ENV === 'development')
    .then(() => {
    server.start();
})
    .catch((error) => {
    console.log(`Gateway init failed error = ${error.stack}`);
});
process.on('uncaughtException', (error) => {
    console.log(`process on uncaughtException error = ${error.stack}`);
});
process.on('unhandledRejection', (error) => {
    console.log(`process on unhandledRejection error = ${error.stack}`);
});

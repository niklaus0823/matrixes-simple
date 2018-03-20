import {Koa, KoaBodyParser} from 'matrixes-lib';
import RouterLoader from './router/Router';

class Server {
    private _initialized: boolean;
    public app: Koa;

    constructor() {
        this._initialized = false;
    }

    public async init(isDev: boolean = false): Promise<any> {

        await RouterLoader.instance().init();

        this.app = new Koa();
        this.app.use(KoaBodyParser({ formLimit: '2048kb' }));
        this.app.use(RouterLoader.instance().getRouter().routes());
        this._initialized = true;

        return Promise.resolve();
    }

    public start(): void {
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
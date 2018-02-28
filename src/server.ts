import { RpcApplication } from 'matrixes-lib';
import { registerServices } from './services/Register';

class Server {
    private _initialized: boolean;
    public app: RpcApplication;

    constructor() {
        this._initialized = false;
    }

    public async init(isDev: boolean = false): Promise<any> {
        this.app = new RpcApplication();
        this._initialized = true;

        return Promise.resolve();
    }

    public start(): void {
        if (!this._initialized) {
            return;
        }

        registerServices(this.app);

        const host = '0.0.0.0';
        const port = '8080';
        this.app.bind(`${host}:${port}`).start();
        console.log(`server start, Address: ${host}:${port}!`);
    }
}


const server = new Server();
server.init(process.env.NODE_ENV === 'development')
    .then(() => {
        server.start();
    })
    .catch((error) => {
        console.log(`MicroService init failed error = ${error.stack}`);
    });

process.on('uncaughtException', (error) => {
    console.log(`process on uncaughtException error = ${error.stack}`);
});

process.on('unhandledRejection', (error) => {
    console.log(`process on unhandledRejection error = ${error.stack}`);
});
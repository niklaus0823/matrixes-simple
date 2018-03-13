import * as grpc from 'grpc';
import {Duplex, Readable, Writable} from 'stream';
import {GatewayContext, RpcContext} from 'matrixes-lib';
import {UserServiceClient} from '../../proto/user/user_grpc_pb';

import {GetUserRequest, User} from '../../proto/user/user_pb';

export default class MSUserServiceClient {

    public client: UserServiceClient;

    constructor(address: string, ctx?: GatewayContext | RpcContext) {
        this.client = new UserServiceClient(address, grpc.credentials.createInsecure());
    }

    // Send IRpcServerUnaryCall
    public getUser(request: GetUserRequest, metadata?: grpc.Metadata): Promise<User> {
        return new Promise((resolve, reject) => {
            this.client.getUser(request, metadata, (err: Error, res: User) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
        });
    }

}

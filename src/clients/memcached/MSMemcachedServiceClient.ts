import * as grpc from 'grpc';
import {Duplex, Readable, Writable} from 'stream';
import {GatewayContext, RpcContext} from 'matrixes-lib';
import {MemcachedServiceClient} from '../../proto/memcached/memcached_grpc_pb';

import {SetRequest, BoolResponse, SetMultiRequest, BoolsResponse, AddRequest, DelRequest, GetRequest, DataResponse, GetMultiRequest, DatasResponse} from '../../proto/memcached/memcached_pb';

export default class MSMemcachedServiceClient {

    public client: MemcachedServiceClient;

    constructor(address: string, ctx?: GatewayContext | RpcContext) {
        this.client = new MemcachedServiceClient(address, grpc.credentials.createInsecure());
    }

    // Send IRpcServerUnaryCall
    public memSet(request: SetRequest, metadata?: grpc.Metadata): Promise<BoolResponse> {
        return new Promise((resolve, reject) => {
            this.client.memSet(request, metadata, (err: Error, res: BoolResponse) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
        });
    }

    // Send IRpcServerUnaryCall
    public memSetMulti(request: SetMultiRequest, metadata?: grpc.Metadata): Promise<BoolsResponse> {
        return new Promise((resolve, reject) => {
            this.client.memSetMulti(request, metadata, (err: Error, res: BoolsResponse) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
        });
    }

    // Send IRpcServerUnaryCall
    public memAdd(request: AddRequest, metadata?: grpc.Metadata): Promise<BoolResponse> {
        return new Promise((resolve, reject) => {
            this.client.memAdd(request, metadata, (err: Error, res: BoolResponse) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
        });
    }

    // Send IRpcServerUnaryCall
    public memDel(request: DelRequest, metadata?: grpc.Metadata): Promise<BoolResponse> {
        return new Promise((resolve, reject) => {
            this.client.memDel(request, metadata, (err: Error, res: BoolResponse) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
        });
    }

    // Send IRpcServerUnaryCall
    public memGet(request: GetRequest, metadata?: grpc.Metadata): Promise<DataResponse> {
        return new Promise((resolve, reject) => {
            this.client.memGet(request, metadata, (err: Error, res: DataResponse) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
        });
    }

    // Send IRpcServerUnaryCall
    public memGetMulti(request: GetMultiRequest, metadata?: grpc.Metadata): Promise<DatasResponse> {
        return new Promise((resolve, reject) => {
            this.client.memGetMulti(request, metadata, (err: Error, res: DatasResponse) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
        });
    }

}

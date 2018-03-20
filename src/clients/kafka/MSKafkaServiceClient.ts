import * as grpc from 'grpc';
import {Duplex, Readable, Writable} from 'stream';
import {GatewayContext, RpcContext} from 'matrixes-lib';
import {KafkaServiceClient} from '../../proto/kafka/kafka_grpc_pb';

import {SendRequest, SendResponse} from '../../proto/kafka/kafka_pb';

export default class MSKafkaServiceClient {

    public client: KafkaServiceClient;

    constructor(address: string, ctx?: GatewayContext | RpcContext) {
        this.client = new KafkaServiceClient(address, grpc.credentials.createInsecure());
    }

    // Send IRpcServerUnaryCall
    public send(request: SendRequest, metadata?: grpc.Metadata): Promise<SendResponse> {
        return new Promise((resolve, reject) => {
            this.client.send(request, metadata, (err: Error, res: SendResponse) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
        });
    }

}

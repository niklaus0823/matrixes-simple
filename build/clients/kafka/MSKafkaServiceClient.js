"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc = require("grpc");
const kafka_grpc_pb_1 = require("../../proto/kafka/kafka_grpc_pb");
class MSKafkaServiceClient {
    constructor(address, ctx) {
        this.client = new kafka_grpc_pb_1.KafkaServiceClient(address, grpc.credentials.createInsecure());
    }
    // Send IRpcServerUnaryCall
    send(request, metadata) {
        return new Promise((resolve, reject) => {
            this.client.send(request, metadata, (err, res) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
        });
    }
}
exports.default = MSKafkaServiceClient;

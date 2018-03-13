"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc = require("grpc");
const user_grpc_pb_1 = require("../../proto/user/user_grpc_pb");
class MSUserServiceClient {
    constructor(address, ctx) {
        this.client = new user_grpc_pb_1.UserServiceClient(address, grpc.credentials.createInsecure());
    }
    // Send IRpcServerUnaryCall
    getUser(request, metadata) {
        return new Promise((resolve, reject) => {
            this.client.getUser(request, metadata, (err, res) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
        });
    }
}
exports.default = MSUserServiceClient;

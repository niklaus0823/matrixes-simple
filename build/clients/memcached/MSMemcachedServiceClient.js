"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc = require("grpc");
const memcached_grpc_pb_1 = require("../../proto/memcached/memcached_grpc_pb");
class MSMemcachedServiceClient {
    constructor(address, ctx) {
        this.client = new memcached_grpc_pb_1.MemcachedServiceClient(address, grpc.credentials.createInsecure());
    }
    // Send IRpcServerUnaryCall
    memSet(request, metadata) {
        return new Promise((resolve, reject) => {
            this.client.memSet(request, metadata, (err, res) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
        });
    }
    // Send IRpcServerUnaryCall
    memSetMulti(request, metadata) {
        return new Promise((resolve, reject) => {
            this.client.memSetMulti(request, metadata, (err, res) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
        });
    }
    // Send IRpcServerUnaryCall
    memAdd(request, metadata) {
        return new Promise((resolve, reject) => {
            this.client.memAdd(request, metadata, (err, res) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
        });
    }
    // Send IRpcServerUnaryCall
    memDel(request, metadata) {
        return new Promise((resolve, reject) => {
            this.client.memDel(request, metadata, (err, res) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
        });
    }
    // Send IRpcServerUnaryCall
    memGet(request, metadata) {
        return new Promise((resolve, reject) => {
            this.client.memGet(request, metadata, (err, res) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
        });
    }
    // Send IRpcServerUnaryCall
    memGetMulti(request, metadata) {
        return new Promise((resolve, reject) => {
            this.client.memGetMulti(request, metadata, (err, res) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
        });
    }
}
exports.default = MSMemcachedServiceClient;

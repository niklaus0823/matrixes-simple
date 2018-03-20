// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var kafka_kafka_pb = require('../kafka/kafka_pb.js');

function serialize_com_kafka_SendRequest(arg) {
  if (!(arg instanceof kafka_kafka_pb.SendRequest)) {
    throw new Error('Expected argument of type com.kafka.SendRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_kafka_SendRequest(buffer_arg) {
  return kafka_kafka_pb.SendRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_kafka_SendResponse(arg) {
  if (!(arg instanceof kafka_kafka_pb.SendResponse)) {
    throw new Error('Expected argument of type com.kafka.SendResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_kafka_SendResponse(buffer_arg) {
  return kafka_kafka_pb.SendResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var KafkaServiceService = exports.KafkaServiceService = {
  send: {
    path: '/com.kafka.KafkaService/Send',
    requestStream: false,
    responseStream: false,
    requestType: kafka_kafka_pb.SendRequest,
    responseType: kafka_kafka_pb.SendResponse,
    requestSerialize: serialize_com_kafka_SendRequest,
    requestDeserialize: deserialize_com_kafka_SendRequest,
    responseSerialize: serialize_com_kafka_SendResponse,
    responseDeserialize: deserialize_com_kafka_SendResponse,
  },
};

exports.KafkaServiceClient = grpc.makeGenericClientConstructor(KafkaServiceService);

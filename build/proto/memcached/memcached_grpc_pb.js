// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var memcached_memcached_pb = require('../memcached/memcached_pb.js');

function serialize_com_memcached_AddRequest(arg) {
  if (!(arg instanceof memcached_memcached_pb.AddRequest)) {
    throw new Error('Expected argument of type com.memcached.AddRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_memcached_AddRequest(buffer_arg) {
  return memcached_memcached_pb.AddRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_memcached_BoolResponse(arg) {
  if (!(arg instanceof memcached_memcached_pb.BoolResponse)) {
    throw new Error('Expected argument of type com.memcached.BoolResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_memcached_BoolResponse(buffer_arg) {
  return memcached_memcached_pb.BoolResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_memcached_BoolsResponse(arg) {
  if (!(arg instanceof memcached_memcached_pb.BoolsResponse)) {
    throw new Error('Expected argument of type com.memcached.BoolsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_memcached_BoolsResponse(buffer_arg) {
  return memcached_memcached_pb.BoolsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_memcached_DataResponse(arg) {
  if (!(arg instanceof memcached_memcached_pb.DataResponse)) {
    throw new Error('Expected argument of type com.memcached.DataResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_memcached_DataResponse(buffer_arg) {
  return memcached_memcached_pb.DataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_memcached_DatasResponse(arg) {
  if (!(arg instanceof memcached_memcached_pb.DatasResponse)) {
    throw new Error('Expected argument of type com.memcached.DatasResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_memcached_DatasResponse(buffer_arg) {
  return memcached_memcached_pb.DatasResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_memcached_DelRequest(arg) {
  if (!(arg instanceof memcached_memcached_pb.DelRequest)) {
    throw new Error('Expected argument of type com.memcached.DelRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_memcached_DelRequest(buffer_arg) {
  return memcached_memcached_pb.DelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_memcached_GetMultiRequest(arg) {
  if (!(arg instanceof memcached_memcached_pb.GetMultiRequest)) {
    throw new Error('Expected argument of type com.memcached.GetMultiRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_memcached_GetMultiRequest(buffer_arg) {
  return memcached_memcached_pb.GetMultiRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_memcached_GetRequest(arg) {
  if (!(arg instanceof memcached_memcached_pb.GetRequest)) {
    throw new Error('Expected argument of type com.memcached.GetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_memcached_GetRequest(buffer_arg) {
  return memcached_memcached_pb.GetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_memcached_SetMultiRequest(arg) {
  if (!(arg instanceof memcached_memcached_pb.SetMultiRequest)) {
    throw new Error('Expected argument of type com.memcached.SetMultiRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_memcached_SetMultiRequest(buffer_arg) {
  return memcached_memcached_pb.SetMultiRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_memcached_SetRequest(arg) {
  if (!(arg instanceof memcached_memcached_pb.SetRequest)) {
    throw new Error('Expected argument of type com.memcached.SetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_memcached_SetRequest(buffer_arg) {
  return memcached_memcached_pb.SetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var MemcachedServiceService = exports.MemcachedServiceService = {
  memSet: {
    path: '/com.memcached.MemcachedService/MemSet',
    requestStream: false,
    responseStream: false,
    requestType: memcached_memcached_pb.SetRequest,
    responseType: memcached_memcached_pb.BoolResponse,
    requestSerialize: serialize_com_memcached_SetRequest,
    requestDeserialize: deserialize_com_memcached_SetRequest,
    responseSerialize: serialize_com_memcached_BoolResponse,
    responseDeserialize: deserialize_com_memcached_BoolResponse,
  },
  memSetMulti: {
    path: '/com.memcached.MemcachedService/MemSetMulti',
    requestStream: false,
    responseStream: false,
    requestType: memcached_memcached_pb.SetMultiRequest,
    responseType: memcached_memcached_pb.BoolsResponse,
    requestSerialize: serialize_com_memcached_SetMultiRequest,
    requestDeserialize: deserialize_com_memcached_SetMultiRequest,
    responseSerialize: serialize_com_memcached_BoolsResponse,
    responseDeserialize: deserialize_com_memcached_BoolsResponse,
  },
  memAdd: {
    path: '/com.memcached.MemcachedService/MemAdd',
    requestStream: false,
    responseStream: false,
    requestType: memcached_memcached_pb.AddRequest,
    responseType: memcached_memcached_pb.BoolResponse,
    requestSerialize: serialize_com_memcached_AddRequest,
    requestDeserialize: deserialize_com_memcached_AddRequest,
    responseSerialize: serialize_com_memcached_BoolResponse,
    responseDeserialize: deserialize_com_memcached_BoolResponse,
  },
  memDel: {
    path: '/com.memcached.MemcachedService/MemDel',
    requestStream: false,
    responseStream: false,
    requestType: memcached_memcached_pb.DelRequest,
    responseType: memcached_memcached_pb.BoolResponse,
    requestSerialize: serialize_com_memcached_DelRequest,
    requestDeserialize: deserialize_com_memcached_DelRequest,
    responseSerialize: serialize_com_memcached_BoolResponse,
    responseDeserialize: deserialize_com_memcached_BoolResponse,
  },
  memGet: {
    path: '/com.memcached.MemcachedService/MemGet',
    requestStream: false,
    responseStream: false,
    requestType: memcached_memcached_pb.GetRequest,
    responseType: memcached_memcached_pb.DataResponse,
    requestSerialize: serialize_com_memcached_GetRequest,
    requestDeserialize: deserialize_com_memcached_GetRequest,
    responseSerialize: serialize_com_memcached_DataResponse,
    responseDeserialize: deserialize_com_memcached_DataResponse,
  },
  memGetMulti: {
    path: '/com.memcached.MemcachedService/MemGetMulti',
    requestStream: false,
    responseStream: false,
    requestType: memcached_memcached_pb.GetMultiRequest,
    responseType: memcached_memcached_pb.DatasResponse,
    requestSerialize: serialize_com_memcached_GetMultiRequest,
    requestDeserialize: deserialize_com_memcached_GetMultiRequest,
    responseSerialize: serialize_com_memcached_DatasResponse,
    responseDeserialize: deserialize_com_memcached_DatasResponse,
  },
};

exports.MemcachedServiceClient = grpc.makeGenericClientConstructor(MemcachedServiceService);

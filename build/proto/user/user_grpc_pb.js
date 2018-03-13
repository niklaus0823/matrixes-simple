// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_user_pb = require('../user/user_pb.js');

function serialize_com_user_GetUserRequest(arg) {
  if (!(arg instanceof user_user_pb.GetUserRequest)) {
    throw new Error('Expected argument of type com.user.GetUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_user_GetUserRequest(buffer_arg) {
  return user_user_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_user_User(arg) {
  if (!(arg instanceof user_user_pb.User)) {
    throw new Error('Expected argument of type com.user.User');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_user_User(buffer_arg) {
  return user_user_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  getUser: {
    path: '/com.user.UserService/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: user_user_pb.GetUserRequest,
    responseType: user_user_pb.User,
    requestSerialize: serialize_com_user_GetUserRequest,
    requestDeserialize: deserialize_com_user_GetUserRequest,
    responseSerialize: serialize_com_user_User,
    responseDeserialize: deserialize_com_user_User,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);

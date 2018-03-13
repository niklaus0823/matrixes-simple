// package: com.user
// file: user/user.proto

import * as grpc from 'grpc';
import * as user_user_pb from '../user/user_pb';

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getUser: IGetUser
}

interface IGetUser {
  path: string; // "/com.user.UserService/GetUser"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: user_user_pb.GetUserRequest;
  responseType: user_user_pb.User;
  requestSerialize: (arg: user_user_pb.GetUserRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => user_user_pb.GetUserRequest;
  responseSerialize: (arg: user_user_pb.User) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => user_user_pb.User;
}

export interface IUserServiceClient {
  getUser(request: user_user_pb.GetUserRequest, callback: (error: Error | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
  getUser(request: user_user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
}

export const UserServiceService: IUserServiceService;
export class UserServiceClient extends grpc.Client implements IUserServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  public getUser(request: user_user_pb.GetUserRequest, callback: (error: Error | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
  public getUser(request: user_user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: user_user_pb.User) => void): grpc.ClientUnaryCall;
}


// package: com.kafka
// file: kafka/kafka.proto

import * as grpc from 'grpc';
import * as kafka_kafka_pb from '../kafka/kafka_pb';

interface IKafkaServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  send: ISend
}

interface ISend {
  path: string; // "/com.kafka.KafkaService/Send"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: kafka_kafka_pb.SendRequest;
  responseType: kafka_kafka_pb.SendResponse;
  requestSerialize: (arg: kafka_kafka_pb.SendRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => kafka_kafka_pb.SendRequest;
  responseSerialize: (arg: kafka_kafka_pb.SendResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => kafka_kafka_pb.SendResponse;
}

export interface IKafkaServiceClient {
  send(request: kafka_kafka_pb.SendRequest, callback: (error: Error | null, response: kafka_kafka_pb.SendResponse) => void): grpc.ClientUnaryCall;
  send(request: kafka_kafka_pb.SendRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: kafka_kafka_pb.SendResponse) => void): grpc.ClientUnaryCall;
}

export const KafkaServiceService: IKafkaServiceService;
export class KafkaServiceClient extends grpc.Client implements IKafkaServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  public send(request: kafka_kafka_pb.SendRequest, callback: (error: Error | null, response: kafka_kafka_pb.SendResponse) => void): grpc.ClientUnaryCall;
  public send(request: kafka_kafka_pb.SendRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: kafka_kafka_pb.SendResponse) => void): grpc.ClientUnaryCall;
}


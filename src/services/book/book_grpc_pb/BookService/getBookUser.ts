import {RpcContext, RpcMiddleware, MiddlewareNext, IRpcServerCallback, IRpcServerUnaryCall} from 'matrixes-lib';
import {GetUserRequest, User} from '../../../../proto/user/user_pb';

export const getBookUserHandler: RpcMiddleware = async (ctx: RpcContext, next: MiddlewareNext) => {
    let call = ctx.call as IRpcServerUnaryCall<GetUserRequest>;
    let callback = ctx.callback as IRpcServerCallback<User>;
    let request = call.request as GetUserRequest;

    await next();

    return Promise.resolve();
};

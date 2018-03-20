import {RpcContext, RpcMiddleware, MiddlewareNext, IRpcServerCallback, IRpcServerUnaryCall, joi, joiType} from 'matrixes-lib';
import {GetUserRequest, User} from '../../../../proto/user/user_pb';

export const getUserHandler: RpcMiddleware = async (ctx: RpcContext, next: MiddlewareNext) => {
    let call = ctx.call as IRpcServerUnaryCall<GetUserRequest>;
    let callback = ctx.callback as IRpcServerCallback<User>;
    let request = call.request as GetUserRequest;

    try {
        await ctx.validate(request, {
            id: joiType.vInt64.activate(),
        });
        callback(null, new User());
    } catch (e) {
        callback(e, null);
    }

    await next();

    return Promise.resolve();
};

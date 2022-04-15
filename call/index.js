Function.prototype.myCall = function(ctx){
    ctx = ctx ? Object(ctx) : window;
    ctx.originFn = this;
    var args = [];

    for (let i = 1;i<arguments.length;i++){
        args.push('arguments['+i+']')
    }
    let ret = eval('ctx.originFn('+args+')')
    delete ctx.originFn;
    return ret;
}
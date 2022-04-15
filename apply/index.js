Function.prototype.myApply = function(ctx,args){
    ctx = ctx ? Object(ctx) : window;
    ctx.originFn = this;

    if(typeof args !== 'object' && typeof args !== 'function'){
        throw new TypeError('CreateListFromArrayLike called on non-object')
    }

    if(!args || typeOf(args) !=='Array'){
        return ctx.originFn();
    }

    let ret = eval('ctx.originFn('+args+')')
    delete ctx.originFn;
    return ret;
}
function typeOf(value){
    if(value === null) return 'null'
    return typeof(value) === 'object' ?{
        '[object Object]':'Object',
        '[object Array]':'Array',
        '[object Number]':'Number',
        '[object String]':'String',
        '[object Boolean]':'Boolean',
    }[({}).toString.call(value)] : typeof(value)
}
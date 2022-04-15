let compose = function(...args) {
    const init = args.pop()
    return function(...arg) {
        return args.reverse().reduce(function(sequence, func) {
        return sequence.then(function(result) {
            return func.call(null, result)
        })
        }, Promise.resolve(init.apply(null, arg)))
    }
}

// ES6 箭头函数形式写法
var compose =(...fns) =>result => {
    var list = fns.slice();
    while (list.length > 0) {
        // 将最后一个函数从列表尾部拿出
        // 并执行它
        result = list.pop()( result );
    }
    return result;
};
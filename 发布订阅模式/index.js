// 订阅好一件事，当这件事发生的时候，触发对应的函数
// 订阅： on
// 发布：emit
// promise 内部也是基于发布订阅的

// 好处
// 多个类之间可以解耦合

// 特点
// 订阅方和发布方没有任何的关系

let e = {
    _obj: {},
    _callback: [],
    on(callBack) { // 订阅就是将函数放到数组中
        this._callback.push(callBack)
    },
    emit(key, val) {
        this._obj[key] = val // 让订阅的数组中的方法依次执行
        this._callback.forEach(method => {
            method(this._obj)
        })
    }
}
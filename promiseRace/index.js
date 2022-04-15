function isPromise(x) { // 校验是否是 promise 
    if((typeof x == 'object' && x !== null) || typeof x == 'function') {
        if(typeof x.then == 'function') {
            return true
        }
    }
    return false
}
Promise.race = function(promises) {
    return new Promise ((resolve, reject) => {
        if(!promises.length) return
        promises.forEach(item => {
            if(isPromise(item)) {
                item.then((data) => {
                    resolve(data)
                }, reject)
            }else {
                resolve(item)
            }
        });
    })
}

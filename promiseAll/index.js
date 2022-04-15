//简单版
Promise.prototype.all = function(promiseList){
    return new Promise((resolve,rejected)=>{
        let result = [],
            count = 0;
        for(let i=0;i<promiseList.length;i++){
            promiseList[i].then(data=>{
                result[i] = data;
                count++;
                if(count === promiseList.length){
                    resolve(result);
                }
            })
        }
    }).catch(err=>{
        rejected(err);
    })
}

//稍微完善版
function isPromise(x) { // 校验是否是 promise 
    if((typeof x == 'object' && x !== null) || typeof x == 'function') {
        if(typeof x.then == 'function') {
            return true
        }
    }
    return false
}
Promise.all = function(promises) {
    return new Promise((resolve, reject) => {
        let arr = []
        let idx = 0 // 执行个数
        let dealProcess = (val, index) => {
            arr[index] = val
            if(++idx == promises.length) {
                resolve(arr)
            }
        }
        promises.forEach((item, i) => {
            if(isPromise(item)) {
                item.then(y => {
                    dealProcess(y, i)
                }, reject)
            }else {
                dealProcess(item, i)
            }
        });
    })
}
// 节流
const throttle = (fn, delay) => {
    // 定义上次触发时间
    let last = 0;
    return (...args) => {
        const now = +Date.now();
        if (now > last + delay) {
            last = now;
            fn.apply(this, args);
        }
    };
};

const throttle = (fn, delay)=>{
    let flag = true;
    return (...args) => {
        if (!flag) return;
        flag = false;
        timer = setTimeout(() => {
            fn.apply(this, args);
            flag = true;
        }, delay);
    };
}

// 防抖
const debounce = (fn, delay) => {
    let timer;
    return (...args) => {
        // 判断定时器是否存在，清除定时器
        if (timer) {
            clearTimeout(timer);
        }
        // 重新调用setTimeout
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
};
// 编写一个数组去重函数，输入 [1,2,3,4,1,4,2],返回[1,2,3,4] const uniqArray = (list) => { }
const uniqArray = (list) => {
    if (!Array.isArray(list)) {
        console.error('type error!')
        return
    }
    if (list.length === 0) {
        return list;
    }
    return [...new Set(list)]
}

const uniqArray = (list) => {
    if (!Array.isArray(list)) {
        console.error('type error!')
        return
    }
    if (list.length === 0) {
        return list;
    }
    const obj = {};
    return list.filter((item )=> {
        return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
    })
}

const uniqArray = (list) => {
    if (!Array.isArray(list)) {
        console.error('type error!')
        return
    }
    if (list.length === 0) {
        return list;
    }
    let newList = [];
    for(let i = 0; i < list.length; i++){
        let cur = list[i];
        if(!newList.includes(cur)){
            newList.push(cur);
        }
    }
    return newList;
}

const uniqArray = (list) => {
    if (!Array.isArray(list)) {
        console.error('type error!')
        return
    }
    if (list.length === 0) {
        return list;
    }
    let newList = [], seen;
    const sortedArray = list.concat().sort();
    for (let i = 0, len = sortedArray.length; i < len; i++) {
        if (!i || seen !== sortedArray[i]) {
            newList.push(sortedArray[i])
        }
        seen = sortedArray[i];
    }
    return newList;
}

const uniqArray = (list) => {
    if (!Array.isArray(list)) {
        console.error('type error!')
        return
    }
    if (list.length === 0) {
        return list;
    }
    return list.filter((item, index)=> {
        return list.indexOf(item) === index
    })
}

const uniqArray = (list) => {
    if (!Array.isArray(list)) {
        console.error('type error!')
        return
    }
    if (list.length === 0) {
        return list;
    }
    for(let i = 0; i< list.length; i++) {
        for(let j = i + 1; j< list.length; j++) {
            if(list[i] == list[j]) {
                list.splice(j, 1);
                j--;
            }
        } 
    }
    return list;
}
function add() {
    let res = [...arguments];

    function resultFn() {
        res = res.concat([...arguments]);
        return resultFn;
    }
    resultFn.valueOf = function () {
        return res.reduce((a, b) => a + b);
    }
    return resultFn;
}
console.log(5 + add(1, 2)(3)(4))
// 输出15 

function add() {
    let res = [...arguments];
    if(!add.map) {
      add.map = new Map();
    }
    function resultFn() {
      res = res.concat([...arguments]);
      return resultFn;
    }
    resultFn.valueOf = function() {
      const curStr = res.join("");
      if(add.map.has(curStr)) {
        return add.map.get(curStr);
      }else {
        const result = res.reduce((a,b) =>a+b)
        add.map.set(curStr,result);
        return result;
      }
    }
    return resultFn;
  }
  console.log(add(1,2)(3)(4).valueOf())
  console.log(add(1,2,3)(4).valueOf())
  
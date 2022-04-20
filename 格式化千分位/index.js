// 1.正则匹配方法一
let num = 1234567890;
let reg = /\d{1,3}(?=(\d{3})+$)/g;
String(num).replace(reg, '$&,'); //"1,234,567,890"

// 2.正则匹配方法二
let num = 1234567890;
let reg = /\B(?=(\d{3})+$)/g;
String(num).replace(reg, ','); //"1,234,567,890"

// 说明：如果想知道具体怎样的分组方式，可在 [https://regexper.com/](https://regexper.com/) 上测试
// 1. ?= 表示正向引用
// 2. $& 表示与正则表达式相匹配的内容，可查看replace()
// 3. \B 非单词边界

// 3.数组分割法
function format_with_array(number) {
    // 转为字符串，并按照.拆分
    const arr = (number + '').split('.');
    // 整数部分再拆分
    const int = arr[0].split('');
    // 小数部分
    const fraction = arr[1] || '';
    // 返回的变量
    let r = '';
    int.reverse().forEach(function (v, i) {
        // 非第一位并且是位值是3的倍数，添加“,”
        if (i !== 0 && i % 3 === 0) {
            r = v + ',' + r;
        } else {
            // 正常添加字符(这是好写法)
            r = v + r;
        }
    });
    // 整数部分和小数部分拼接
    return r + (!!fraction ? '.' + fraction : '');
}
// 测试用例
console.log(format_with_array(1234567893.99));
//4. 字符截取法
function format_with_substring(number) {
    // 数字转为字符串，并按照 .分割
    let arr = (number + '').split('.');
    let int = arr[0] + '';
    let fraction = arr[1] || '';
    // 多余的位数
    let f = int.length % 3;
    // 获取多余的位数，f可能是0， 即r可能是空字符串
    let r = int.substring(0, f);
    // 每三位添加','金额对应的字符
    for (let i = 0; i < Math.floor(int.length / 3); i++) {
        r += ',' + int.substring(f + i * 3, f + (i + 1) * 3);
    }
    // 多余的位数，上面
    if (f === 0) {
        r = r.substring(1);
    }
    // 调整部分和小数部分拼接
    return r + (!!fraction ? '.' + fraction : '');
}
console.log(format_with_substring(12112123313.78));
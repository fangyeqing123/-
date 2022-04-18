/* 
“<div>谁说的</div>二<div>” false
"<div><span>玩儿</span>问 </div> “true
<di67*ww></div>
判断是不是正确的html闭合标签 
*/
function htmlMatch(str){
    let arr = str.match(/<[^>]+>/gi);
    if(arr.length%2!==0){
        return false
    }
    const obj = {};
    let isTrue = true
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i].indexOf('/')<0){
            obj[arr[i]]?obj[arr[i]]++:(obj[arr[i]] = 1);
        }else{
            let key= arr[i].replace('/','')
            if(obj[key]){
                obj[key]--
                if(obj[key]===0){
                    if(Object.keys(obj)[Object.keys(obj).length - 1]!==key){
                        isTrue=false
                        break;
                    }
                    delete obj[key]
                }
            }else{
                isTrue=false
                break;
            }
        }
    }
    return isTrue&&(Object.keys(obj).length === 0);
}
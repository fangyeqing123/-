var reverseList = function(head) {
    let [pre, node] = [null, head];
    while(node){
        const temp = node.next;
        node.next = pre;
        pre = node;
        node = temp;
    }
    return pre;
  };
  
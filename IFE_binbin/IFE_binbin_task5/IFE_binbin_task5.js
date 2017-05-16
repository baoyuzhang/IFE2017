var queue = document.getElementById('queue');
var left_in = document.getElementById('left-in');
var right_in = document.getElementById('right-in');
var left_out = document.getElementById('left-out');
var right_out = document.getElementById('right-out');

var sort_init = document.getElementById('sort-init');
var bubble_sort = document.getElementById('bubble-sort');
var modified_bubble_sort = document.getElementById('modified-bubble-sort');

left_in.onclick = function(event){enqueue("left");};
right_in.onclick = function(event){enqueue("right");};
left_out.onclick = function(event){dequeue(0,"left");};
right_out.onclick = function(event){dequeue(0,"right");};
queue.onclick = function(event){dequeue(event.target);};  // 事件冒泡，事件委托


var queuelist = queueDeleteTextNode(queue.childNodes);
// console.log(queuelist);
var sortArray = createNonSortedArray(queuelist);
printArray(sortArray);
// console.log(sortArray instanceof ArrayList);  // true

sort_init.onclick = function(event){
    var initState = stateBubble.shift();
    console.log(initState);
    for (var i = 0; i < initState.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = initState[i];
        li_height = initState[i]/100*200;
        li.style.height = li_height+"px";
        // // 若i是当前比较的数，且发生了交换，则改变颜色
        // if ( (i == initState[initState.length-2]) && initState[initState.length-1] ) {
        //     li.style.backgroundColor = "#3DA3EF";  
        //     // li.style.color = "red";  
        // }
        queue.appendChild(li);
    }
};
bubble_sort.onclick = function(event){
    var stateBubble = new Array();
    // stateBubble.push(JSON.parse(JSON.stringify(sortArray)));
    // console.log(stateBubble);
    sortArray.bubbleSort(stateBubble);
    // console.log(stateBubble);
    visualization(stateBubble);
};
modified_bubble_sort.onclick = function(event){
    var stateBubble = new Array();
    // stateBubble.push(JSON.parse(JSON.stringify(sortArray)));
    // console.log(stateBubble);
    sortArray.modifiedBubbleSort(stateBubble);
    // console.log(stateBubble);
    visualization(stateBubble);
};

// 排序
function printArray(array){
    console.log(array.toString());
}

function queueDeleteTextNode(nodelist){
    for (var i = 0; i < nodelist.length; i++) { 
    // chrome浏览器会将空格视为text节点，所以处理子节点之前应删除空格文本节点
        //如果是文本节点，并且值为空，则删除该节点  
        if (nodelist[i].nodeType == 3 && /\s/.test(nodelist[i].nodeValue)) {
            nodelist[i].parentNode.removeChild(nodelist[i]);
        }
    }
    return nodelist;
}

function createNonSortedArray(nodelist){
    var array = new ArrayList();
    for (var i = 0; i < nodelist.length; i++) { 
        array.insert(nodelist[i].innerHTML);
    }
    return array;
}

function visualization(stateSort){
    var timer = setInterval(function(){//每500ms取一次stateSort中的第一个数组
        if(stateSort.length>1){
            queue.innerHTML = "";
            // console.log(queue);
            var state = stateSort.shift();
            console.log(state);
            for (var i = 0; i < state.length-2; i++) {
                var li = document.createElement('li');
                li.innerHTML = state[i];
                li_height = state[i]/100*200;
                li.style.height = li_height+"px";
                // 若i是当前比较的数，且发生了交换，则改变颜色
                if ( (i == state[state.length-2]) && state[state.length-1] ) {
                    li.style.backgroundColor = "#3DA3EF";  
                    // li.style.color = "red";  
                }
                queue.appendChild(li);
            }
        }else{
            clearInterval(timer);
        }
    },500);
}

function ArrayList(){

    var array = [];

    this.array= function(){
        return array;
    };

    this.toString= function(){
        return array.join();
    };

    this.insert = function(item){
        array.push(item);
    };

    var swap = function(array, index1, index2){
        var aux = array[index1];
        array[index1] = array[index2];
        array[index2] = aux;
    };

// 冒泡排序
    this.bubbleSort = function(stateSort){
        var length = array.length;
        var initState = JSON.parse(JSON.stringify(array));  // array为引用类型，这样才能保留住当前值

        for (var i=0; i<length; i++){
            console.log('--- ');
            for (var j=0; j<length-1; j++ ){
                var isswap = 0; // 默认没有交换
                console.log('compare ' + array[j] + ' with ' + array[j+1]);
                if (array[j] > array[j+1]){
                    console.log('swap ' + array[j] + ' with ' + array[j+1]);
                    swap(array, j, j+1);
                    isswap = 1;  // 交换置1
                    console.log(array);
                }
                var state = JSON.parse(JSON.stringify(array));  // array为引用类型，这样才能保留住当前值
                // console.log(state instanceof Array);  //true
                state.push(j+1);  // 保存当前比较的数的索引
                state.push(isswap);  // 保存是否交换
                stateSort.push(state);
                // console.log(stateSort); 
            }
        }
        stateSort.push(initState);
    };
// 改进的冒泡排序
    this.modifiedBubbleSort = function(stateSort){
        var length = array.length;
        var initState = JSON.parse(JSON.stringify(array));  // array为引用类型，这样才能保留住当前值

        for (var i=0; i<length; i++){
            console.log('--- ');
            for (var j=0; j<length-1-i; j++ ){
                var isswap = 0; // 默认没有交换
                console.log('compare ' + array[j] + ' with ' + array[j+1]);
                if (array[j] > array[j+1]){
                    console.log('swap ' + array[j] + ' with ' + array[j+1]);
                    swap(array, j, j+1);
                    isswap = 1;  // 交换置1
                    console.log(array);
                }
                var state = JSON.parse(JSON.stringify(array));  // array为引用类型，这样才能保留住当前值
                // console.log(state instanceof Array);  //true
                state.push(j+1);  // 保存当前比较的数的索引
                state.push(isswap);  // 保存是否交换
                stateSort.push(state);
                // console.log(stateSort); 
            }
        }
        stateSort.push(initState);
    };
}

// 入队
function enqueue(side){
    var input = document.getElementsByTagName('input')[0];
    var input_value = input.value;
    if (!input_value) {
        alert('请输入一个10-100之间的数字');
        input.value="";
        input.focus();
    }else if (isNaN(input_value)) {
        alert('只能输入数字，且在10-100之间！');
        input.value="";
        input.focus();
    }else if (input_value<10 || input_value>100)  {
        alert('数字要在10-100之间！');
        input.value="";
        input.focus();
    }else{
        var li = document.createElement('li');
        li.innerHTML = input_value;
        li_height = input_value/100*200;
        li.style.height = li_height+"px";
        if(side==="left"){
            queue.insertBefore(li,queue.firstChild);
        }else if(side==="right"){
            queue.appendChild(li);
        }
        input.value="";
        input.focus();
    }
}

// 出队
function dequeue(node,side){
    if(side=="left"){
        alert("您将删除数字"+queue.firstChild.innerHTML+"!");
        queue.removeChild(queue.firstChild);
    }else if(side=="right"){
        alert("您将删除数字"+queue.lastChild.innerHTML+"!");
        queue.removeChild(queue.lastChild);
    }else{
        // queue.removeChild(node);             
        // alert("您将删除数字"+node.innerHTML+"!");
        alert("您将删除数字" +queue.removeChild(node).innerHTML +"!"); // 更好的写法！
    }
}


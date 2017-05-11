## 任务四：基础JavaScript练习（一）
【平均用时 1.4 天】
[【百度地址】](http://ife.baidu.com/course/detail/id/103)
[【我的代码】](https://github.com/baoyuzhang/IFE2017/tree/master/IFE_binbin/IFE_binbin_task4)
[【效果预览】](https://baoyuzhang.github.io/IFE2017/IFE_binbin/IFE_binbin_task4/IFE_binbin_task4.html)

### 任务目的

- 学习与实践JavaScript的基本语法、语言特性
- 初步了解JavaScript的事件是什么
- 初步了解JavaScript中的DOM是什么

### 任务描述

![](task_2_18_1.jpg)
- 如图，模拟一个队列，队列的每个元素是一个数字，初始队列为空
- 有一个input输入框，以及4个操作按钮
  - 点击"左侧入"，将input中输入的数字从左侧插入队列中；
  - 点击"右侧入"，将input中输入的数字从右侧插入队列中；
  - 点击"左侧出"，读取并删除队列左侧第一个元素，并弹窗显示元素中数值；
  - 点击"右侧出"，读取并删除队列又侧第一个元素，并弹窗显示元素中数值；
- 点击队列中任何一个元素，则该元素会被从队列中删除

### 任务注意事项

- 实现简单功能的同时，请仔细学习JavaScript基本语法、事件、DOM相关的知识
- 请注意代码风格的整齐、优雅
- 代码中含有必要的注释
- 示例图仅为参考，不需要完全一致
- 需要考虑数字输入的合法性
- 建议不使用任何第三方库、框架

### 待解决
- [ ] 左侧入和右侧入的两个方块之间有间隔，不知哪里来的

### 任务总结

1. 事件委托：利用事件冒泡，不用再每个队列元素上绑定事件，直接在父元素上绑定事件即可
2. isNaN()方法：判断是否为数字
3. event.innerHTML：读写HTML内容
  - 读：直接读取文本节点的值，不需使用childNodes
  - 写：直接设置文本节点的值，不需创建文本节点
4. focus()方法：设置焦点

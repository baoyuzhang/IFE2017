## 任务三：零基础JavaScript编码（三）
【平均用时 1.0 天】
[【百度地址】](http://ife.baidu.com/course/detail/id/98)
[【我的代码】](https://github.com/baoyuzhang/IFE2017/tree/master/IFE_binbin/IFE_binbin_task3)
[【效果预览】](https://baoyuzhang.github.io/IFE2017/IFE_binbin/IFE_binbin_task3/IFE_binbin_task3.html)


### 任务目的
- 在上一任务基础上继续JavaScript的体验
- 接触一下JavaScript中的高级选择器
- 学习JavaScript中的数组对象遍历、读写、排序等操作
- 学习简单的字符串处理操作

### 任务描述
- 参考以下[示例代码](example.html)，读取页面上已有的source列表，从中提取出城市以及对应的空气质量
- 将数据按照某种顺序排序后，在resort列表中按照顺序显示出来

### 任务注意事项
- 实现简单功能的同时，请仔细学习JavaScript基本语法、事件、DOM相关的知识
- 请注意代码风格的整齐、优雅
- 代码中含有必要的注释
- 建议不使用任何第三方库、框架
- 示例代码仅为示例，可以直接使用，也可以完全自己重写

### 任务总结
1. chrome浏览器会将空格视为text节点，所以处理ul.childNodes子节点之前应删除空格文本节点
```
for (var i = 0; i < node.length; i++) {
       if (node[i].nodeType == 3 && /\s/.test(node[i].nodeValue)) {
              node[i].parentNode.removeChild(node[i]);
       }
}
```

2. DOM属性element.childNodes，返回包含该节点的所有子节点对象（可看为数组，但不是数组），不能使用数组的迭代方法，只能使用方括号语法+for循环遍历所有子节点

3. 文本节点是字符串，但字符串不是文本节点，需document.createTextNode('字符串')

4. 类型转换方法

  - String类型 ————> Number类型：parseInt()方法
  - Number类型 ————> String类型：toString()

5. 用到的数组操作:
  - 创建：new Array()
  - 读写：栈方法push()
  - 操作方法：slice()
  - 重排序方法：sort()
  - 迭代方法：forEach()

6. 尽量将功能封装成函数实现

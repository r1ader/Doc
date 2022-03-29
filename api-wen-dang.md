---
description: (in progress) updated by @r1ader in 2022/3/29
---

# API 文档

## Do Method

`Do Method` 为所有`Actor`对象可以调用的方法，如 element.r\_animate(act.FADE\_OUT) 中的 `r_animate` 就是一个最常用的 `Do Method`。

### .r\_animate()

`r_animate`方法会使一个`Actor`对象开始动画。

示例：

```java
element.r_animate(act.FADE_OUT)
```

说明：

.r\_animate() 接受一个Act对象作为参数，亦或是接受一个Act对象的简写字符串作为参数。

### .r\_then()

r\_then方法会在动画播放完后执行对应代码

示例：

```javascript
element.r_animate(act.FADE_OUT)
        .r_then(()=>{
                console.log('Can you see me ?')
        })
```



## Act 对象

每个act对象都代表了一个动作，

act对象的属性分为两种：**动画属性**，**配置属性**。

## 动画属性

act对象的动画属性接受所有的<mark style="color:red;">css属性</mark>，如width，top，transform等等。

css属性所对应的值接受两种形式。

* 普通的css属性值 ：

```json
{
    width: "200px" // 从当前宽度变化至200px
}
```

* r\_animate 语法：

```json
{
    width: "[100~200]px" // 宽度从100px变化至200px
}
```

一言以蔽之，r\_animate 语法只是将css属性值中的<mark style="color:red;">数字</mark>，替换为 `[` **`start` ** `~` **`end` ** `]` 的形式。

> <mark style="color:red;">Notice</mark>: start 和 end 只能是数字，所以 px，em，deg等单位需要接在中括号 `]` 的后面

## 配置属性

Act有许多自带的属性以供开发者们自定义动画的属性。

### duration

Type：<mark style="color:blue;">Number</mark>

Default：1000

动画的时长，单位为ms。

### delay

Type：<mark style="color:blue;">Number</mark>

Default：0

动画开始前的延迟，单位为ms。

### loop

Type：<mark style="color:blue;">Boolean / Number / String</mark>

Default：False

动画是否循环。

False表示不循环，True表示循环。

若loop被设置为Number，则表示循环的次数。

> <mark style="color:red;">Notice：</mark>当loop被设置为2时，除了初始的那次，动画将重复2次，所以总共会执行3次。

loop 还可以被设置为 <mark style="color:red;">"alternate"</mark> 表示动画的循环顺序会正反交替进行。

次数和alternate可以同时使用：

```json
{
    width: "100px",
    loop: "10 alternate"
}
```

### reverse

Type：<mark style="color:blue;">Boolean</mark>

Default：False

动画是否反向。设置为True，等于将 <mark style="color:red;">"\[100\~200]px"</mark> 变为 <mark style="color:red;">"\[200\~100]px"</mark>



### ease

Type：<mark style="color:blue;">String</mark>

Default：<mark style="color:red;">"easeOutExpo"</mark>

补间动画的插值形式，默认 <mark style="color:red;">"easeOutExpo"</mark> 表示先快后慢。

将 ease 设置为 <mark style="color:red;">"Linear"</mark> 则表示动画匀速进行。

> 关于更多 ease function ，您可以查看 [https://easings.net](https://easings.net)

除此以外 **ease** 也支持贝塞尔模式

```javascript
{ 
    width: "[100~200]px" ,
    duration: 3000,
    ease: "cubic-bezier(.09,.77,.89,.3)"
} // 3秒 内，宽度从 100px 增长至 200px，先快后慢再快
```

> 关于 贝塞尔曲线，您可以查看 [https://cubic-bezier.com/](https://cubic-bezier.com)

### callback

Type：<mark style="color:blue;">Function</mark>

Default：null

动画结束时调用的函数。

## 全局方法


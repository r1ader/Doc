---
description: write by @r1ader in 2022/3/31
---

# Quick Start

## Introduction

<mark style="color:purple;">**`r_animate.js`**</mark> helps us producing animation with functional programming

Most of methods in <mark style="color:purple;">****</mark><mark style="color:purple;">** **</mark><mark style="color:purple;">**`r_animate.js`**</mark> ，has the form like <mark style="color:orange;">**`Things`**</mark>.<mark style="color:purple;">**`do`**</mark>(<mark style="color:yellow;">**`something`**</mark>)

![](.gitbook/assets/functionalprogramming.gif)

Take the fade-out animation as an example：

![](.gitbook/assets/example\_1\_cn.gif)

if <mark style="color:orange;">**`element`**</mark> is the subject of the animation , then ths code should be

```javascript
    import { r, act } from 'r_animate'
    const element = document.getElementById('element_id')
    
    r(element).r_animate(act.OUT.BLUR) // key code
```

Let's focus on the last line of code，

There are three subjects <mark style="color:orange;">**`element`**</mark>, <mark style="color:purple;">**`r_animate`**</mark> , <mark style="color:yellow;">**`act.OUT.BLU`**</mark>

They correspond to <mark style="color:orange;">**`Things`**</mark>，<mark style="color:purple;">**`do`**</mark> 和 <mark style="color:yellow;">**`something`**</mark>

In the following, these three subjects will be explained separately

* [r(element) -> Thing](GET\_START.md#r-element-greater-than-thing)
* [r\_animate -> do](GET\_START.md#r\_animate-greater-than-do)
* act.OUT.BLUR -> something

## r(element) -> Thing

For <mark style="color:purple;">**`r_animate.js`**</mark> ， only the <mark style="color:red;">registered</mark> DOM <mark style="color:orange;">**`Element`**</mark> Object, can make animation。

DOM <mark style="color:orange;">**`Element`**</mark> <mark style="color:orange;"></mark><mark style="color:orange;"></mark> is the Objects we get from

* &#x20;`doument.getElementById` in browser
* &#x20;`this.$refs` in vue
* ...

But what is <mark style="color:red;">registered</mark> ?

> Please imagine that on a movie set, there are many people: <mark style="color:orange;">actors</mark>, <mark style="color:orange;">directors</mark>, <mark style="color:orange;">assistants</mark>, etc., but only the <mark style="color:orange;">actors</mark> can perform.

So correspondingly, an ordinary <mark style="color:orange;">**`Element`**</mark> object also needs to be registered as an <mark style="color:orange;">**`Actor`**</mark>  object to start the animation.

To register an <mark style="color:orange;">**`Element`**</mark> , we us <mark style="color:purple;">**`r`**</mark> to wrap it:

```javascript
import { r } from 'r_animate'

const element = document.getElementById('element_id')

r(element)
    // then doing something
    .r_animate(...)
```

After register, you can call the <mark style="color:purple;">**`.r_animate(...)`**</mark> to start the animation.

About <mark style="color:purple;">**`r_animate`**</mark> ，continue to view 👇

## r\_animate -> do

<mark style="color:purple;">**`r_animate`**</mark> is our most common method。

```javascript
    element.r_animate(something)
```

The above code will make <mark style="color:orange;">**`element`**</mark> perform <mark style="color:yellow;">**`something`**</mark> animation

> Notice：The details of <mark style="color:yellow;">**`something`**</mark> will be explained in detail in the third part. Currently, it can be directly understood as an animation such as zooming in and zooming out.

With functional programming, we can call <mark style="color:purple;">**`r_animate`**</mark> for several times like this:

```javascript
    element.r_animate(something_1).r_animate(something_2)
```

The above code will make <mark style="color:orange;">**`element`**</mark> perform <mark style="color:yellow;">**`something_2`**</mark> animation after <mark style="color:yellow;">**`something_1`**</mark> is finished.

So it can go on and go on.

```javascript
    element.r_animate(something_1)
        .r_animate(something_2)
        .r_animate(something_3)
        .r_animate(something_4)
        .r_animate(something_5)
        .r_animate(something_6)
        // ...
```

Take the fade-in and fade-out animation as an example, if we need such an animation：

The opacity of the ball first changes to 0 and then back to 1

![](.gitbook/assets/example\_1\_cn.gif)

Then the code is like this

```javascript
r(ball).r_animate(act.OUT.OPACITY)
        .r_animate(act.IN.OPACITY);
```

> check and run the code in <mark style="color:blue;">stackblitz</mark>

About the parameter accepted by the <mark style="color:purple;">**`r_animate`**</mark> ,  continue to view. 👇

## act.OUT.BLUR -> something

**`act.FADE_OUT`** 是一个 <mark style="color:purple;">**`r_animate`**</mark><mark style="color:purple;">\*\* \*\*\*\*\*\*</mark> 方法可以接受的参数。

\*\*`act` \*\* 库中，预定义了许多动画，供开发者们直接调用。

如

* act.FADE\_IN
* act.FADE\_OUT
* act.BLUR\_IN
* act.BLUR\_OUT
* act.SHAKE
* ...

等等

当然，大部分情况需要自定义动画。所以接下来我们以 **`act.FADE_OUT`** 的真实结构为例，来看看如何自定义动画。

```
    console.log(act.FADE_IN)
    // { opacity: '[1~0]' }
```

是的，定义一个动画实际上就这么简单。

```
{ 
    act_key: act_value 
}
```

这就是一个 **`act`** 的基本结构

**`act_key`** 是需要变化的 css 属性值，如 **`opacity`**, **`width`**, \*\*`top`\*\*等等

**`act_value`** 则是 初始值 \*\*`start` \*\* 和 结束值 \*\*`end` \*\* 以 `[` \*\*`start` \*\* `~` \*\*`end` \*\* `]` 的形式组合成的字符串。

> Notice: start 和 end 只能是数字，px，em，deg等单位需要接在中括号 `]` 的后面

下面是一些 \*\*`act` \*\* 示例：

```javascript
{ width: '[100~200]px' } // 宽度从 100px 增长至 200px
```

```javascript
{ transform: 'translate([0~100]px, [0~100]px)' }
// 从 0，0 位移至 100px，100px 
```

```javascript
{ 
    width: '[100~200]px',
    transform: 'translate([0~100]px, [0~100]px)'
}
// 从 0，0 位移至 100px，100px 的同时，宽度从 100px 增长至 200px
```

```javascript
{ 
    transform: 'translate([0~100]px, [0~100]px) scale([1~2])' 
}
// 从 0，0 位移至 100px，100px 的同时，尺寸增大一倍
```

```javascript
{ 
    transform: 'translate([0~100]px, [0~100]px) scale([1~2]) rotateZ([0~90]deg)' 
}
// 从 0，0 位移至 100px，100px 的同时，尺寸增大一倍, 旋转90度
```

当然，如果您无需考虑初始值，\*\*`act_value` \*\* 也支持更为简洁的写法:

```javascript
{ width: '200px' } // 宽度从 element当前width值 变化至 200px
```

```javascript
{ 
    transform: 'translate(100px, 100px)'
} // element 从 当前位置 位移至 100px，100px
```

除了 \*\*`act_key` \*\* 和 \*\*`act_value` \*\* 外，

您可能还需配置动画的时长 **`duration`**

```javascript
{ 
    width: '[100~200]px' ,
    duration: 3000
} // 3秒 内，宽度从 100px 增长至 200px
```

以及 补间动画 的插值形式 **`ease`**

```javascript
{ 
    width: '[100~200]px' ,
    duration: 3000,
    ease: 'easeOutExpo'
} // 3秒 内，宽度从 100px 增长至 200px，先快后慢
```

> 关于 ease function ，您可以查看 [https://easings.net](https://easings.net)

除此以外 **ease** 也支持贝塞尔模式

```javascript
{ 
    width: '[100~200]px' ,
    duration: 3000,
    ease: 'cubic-bezier(.09,.77,.89,.3)'
} // 3秒 内，宽度从 100px 增长至 200px，先快后慢再快
```

> 关于 贝塞尔曲线，您可以查看 [https://cubic-bezier.com/](https://cubic-bezier.com)

更多配置项，您可以在 [api 文档](api\_doc.md#pei-zhi-shu-xing) 中查看。

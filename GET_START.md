---
description: update by @r1ader in 2022/04/01
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

* <mark style="color:blue;"></mark>[<mark style="color:blue;">r(element) -> Thing</mark>](GET\_START.md#r-element-greater-than-thing)<mark style="color:blue;"></mark>
* <mark style="color:blue;"></mark>[<mark style="color:blue;">r\_animate -> do</mark>](GET\_START.md#r\_animate-greater-than-do)<mark style="color:blue;"></mark>
* <mark style="color:blue;"></mark>[<mark style="color:blue;">act.OUT.BLUR -> something</mark>](GET\_START.md#r\_animate-greater-than-do)<mark style="color:blue;"></mark>

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

## act.OUT.OPACITY -> something <a href="#something" id="something"></a>

<mark style="color:yellow;">**`act.OUT.OPACITY`**</mark> is a parameter accepted by <mark style="color:purple;">**`r_animate`**</mark>&#x20;

In the <mark style="color:yellow;">**`act`**</mark> library, many animations are predefined for developers to call directly.

like

* act.OUT.OPACITY
* act.OUT.BLUR
* act.IN.SCROLL\_DOWN
* act.EMPHASIZE.SHAKE\_X
* ...

Click to see more [<mark style="color:blue;">predefined animations</mark>](https://r1ader.github.io/Doc/)<mark style="color:blue;"></mark>

Of course, most cases require custom animations.&#x20;

So let's take the real structure of <mark style="color:yellow;">**`act.OUT.OPACITY`**</mark> as an example to see how to customize the animation.

```
    console.log(act.OUT.OPACITY)
    // { opacity: '[1~0]' }
```

Yes, it's actually that simple.

```
{ 
    act_key: act_value 
}
```

This is the basic structure of an act.

<mark style="color:red;">act\_key</mark> is the css property value that needs to be changed, such as **opacity**, **width**, **top**, etc.

<mark style="color:red;">act\_value</mark> is a string composed of the initial value <mark style="color:red;">start</mark> and the end value <mark style="color:red;">end</mark> in the form of&#x20;

> **`[`  **<mark style="color:red;">**`start`**</mark>**  `~`  **<mark style="color:red;">**`end`**</mark>**  `]`**

> Notice: <mark style="color:red;">start</mark> and <mark style="color:red;">end</mark> can only be <mark style="color:blue;">numbers</mark>.
>
> &#x20;px, em, deg and other units need to be placed after brackets **`]`**

Here are some examples of <mark style="color:yellow;">**`act`**</mark> :

```javascript
{ width: '[100~200]px' } // width grows from 100px to 200px
```

```javascript
{ transform: 'translate([0~100]px, [0~100]px)' }
// from 0，0 move to 100px，100px 
```

```javascript
{ 
    width: '[100~200]px',
    transform: 'translate([0~100]px, [0~100]px)'
}
// from 0，0 move to 100px，100px; meanwhile, width grow from 100px to 200px
```

```javascript
{ 
    transform: 'translate([0~100]px, [0~100]px) scale([1~2])' 
}
//from 0，0 move to 100px，100px; meanwhile, double the size
```

```javascript
{ 
    transform: 'translate([0~100]px, [0~100]px) scale([1~2]) rotateZ([0~90]deg)' 
}
// from 0，0 move to 100px，100px; 
// meanwhile, double the size and rotate 90 degrees
```

Of course, if you don't need to consider the initial value, <mark style="color:red;">act\_value</mark> also supports a more concise syntas:

```javascript
{ width: '200px' } 
// The width changes from the element's current width value to 200px
```

```javascript
{ 
    transform: 'translate(100px, 100px)'
} // element moves from the current position to 100px, 100px
```

It helps a lot when you are not certain about the start value of the animation.

Beside,

You may also need to configure the <mark style="color:red;">**`duration`**</mark> of the animation

```javascript
{ 
    width: '[100~200]px' ,
    duration: 3000
} 
// Width grows from 100px to 200px in 3 seconds
```

and the interpolated form of motion tweening <mark style="color:red;">**`ease`**</mark>

```javascript
{ 
    width: '[100~200]px' ,
    duration: 3000,
    ease: 'easeOutExpo'
} 
// Width grows from 100px to 200px in 3 seconds
// first fast then slow
```

> About ease function ，check [<mark style="color:blue;">https://easings.net</mark>](https://easings.net)<mark style="color:blue;"></mark>

<mark style="color:red;">**`ease`**</mark> also supports bezier mode

```javascript
{ 
    width: '[100~200]px' ,
    duration: 3000,
    ease: 'cubic-bezier(.09,.77,.89,.3)'
} 
// Width grows from 100px to 200px in 3 seconds
// Faster, slower, faster
```

> about cubic-bezier，check [<mark style="color:blue;">https://cubic-bezier.com/</mark>](https://cubic-bezier.com)<mark style="color:blue;"></mark>

For more configuration items, you can check in the [<mark style="color:blue;">Api Doc</mark>](api\_doc.md#pei-zhi-shu-xing)<mark style="color:blue;"></mark>

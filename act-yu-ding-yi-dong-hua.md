---
description: (in progress) updated by @r1aader in 2022/3/31
---

# act 预定义动画

## 使用 act

r\_animate.js 提供一个 act 库，以供开发者们直接调用其中的预定义动画，而无需手动编写其对应的 CSS 代码以及配置项。

使用示例：

```javascript
import { r, act } from 'r_animate'
const element = document.getElementById('element_id')
    
r(element).r_animate(act.OUT.OPACTIY)
```

act 中的预定义动画被分为若干个库，

* [OUT](act-yu-ding-yi-dong-hua.md#out) -> 使对象<mark style="color:red;">消失</mark>的动画
* [IN](act-yu-ding-yi-dong-hua.md#in) -> 使对象<mark style="color:red;">出现</mark>的动画
* [EMPHASIZE](act-yu-ding-yi-dong-hua.md#emphasize) -> <mark style="color:red;">强调</mark>对象的动画

## act 库

直观地查看 act 库内的预定义动画效果， 请访问 [<mark style="color:blue;">Act Pre-define Animations</mark>](https://r1ader.github.io/Doc/)<mark style="color:blue;"></mark>

## act列表

### OUT

* act.OUT.OPACITY
* act.OUT.BLUR
* act.OUT.SCROLL\_DOWN
* act.OUT.SCROLL\_UP

### IN

* act.IN.OPACITY
* act.IN.BLUR
* act.IN.SCROLL\_DOWN
* act.IN.SCROLL\_UP

### EMPHASIZE

* act.EMPHASIZE.SHAKE\_X
* act.EMPHASIZE.SHAKE\_Y
* act.EMPHASIZE.SHAKE\_ROTATE

---
title: "This Post is Full of Lorem Ipsum"
date: 2019-03-20T18:42:38+02:00
description: "This is a short description of the page"
draft: false
categories:
  - Web development
  - Blogging
  - Jambon
ReadingTime: 12
---

Lorem ipsum dolor sit amet, consectetur...

## What is Lorem Ipsum?
In mollis cursus ligula, et venenatis neque maximus ut...

Vivamus ut tincidunt urna. Nam eu mollis dolor...

## In mollis cursus ligula
Etiam et ligula sit amet urna aliquam suscipit...

- Cras dui nulla,
- ornare eget fermentum quis, 
- accumsan vitae purus.

Nam eget pharetra arcu. Cras dui nulla, ornare eget...

### Nullam a risus maximus
Fusce facilisis non ante quis blandit...

### Donec vel accumsan justo
Maecenas eu libero ac justo tempor pellentesque...

```javascript
const addHexListeners = () => {
    let hexs = document.querySelectorAll(".hexdump .addr");
    for (let elem of hexs) {
        elem.addEventListener("mouseover",(event)=>{
            colorizeRow(event.target.parentElement);
        });
        elem.addEventListener("mouseleave",(event)=>{
            colorizeRow(event.target.parentElement);
        });
    }
}
window.addEventListener("load", addHexListeners, false);
```
 
```python
s = "Python syntax highlighting with a very long long long string long long foo bar foo long ;) Python syntax highlighting with a very long long long string long long foo bar foo long ;)"
print s
```
 
```
No language indicated, so no syntax highlighting. 
But let's throw in a <b>tag</b>.
```
{{< highlight python "linenos=table,linenostart=199" >}}
s = "Python syntax highlighti ;)"
print s 
{{< / highlight >}}

This a link :) [I'm an inline-style link](https://www.google.com)
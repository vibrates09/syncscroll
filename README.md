
syncscroll2
==========
Based on [this](https://github.com/asvd/syncscroll).

### Usage

```
npm install syncscroll2
```
or
```
yarn add syncscroll2
```

```
import syncscroll from 'syncscroll2'
```

When the window is loaded, call
```
syncscroll()
```

Create the scrollable elements which you need to be synchroniously
scrolled, add the `syncscroll` class for them, and set the `name`
attribute to the same value:


```html
<div class=syncscroll name=myElements>
    First big text goes here...
</div>

<div class=syncscroll name=myElements>
    Second big text goes there...
</div>
```

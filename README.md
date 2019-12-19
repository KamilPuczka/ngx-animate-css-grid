# NgxAnimateCssGrid

Angular wrapper for [animate-css-grid](https://github.com/aholachek/animate-css-grid)

## Installing and usage

```
npm install --save animate-css-grid
npm install --save ngx-animate-css-grid
```

**Usage**

Load the module for your app
```javascript
import { NgxAnimateCssGridModule } from 'ngx-animate-css-grid';

@NgModule({
  ...
  imports: [
    ...
    NgxAnimateCssGridModule
  ]
})
```

Use directive in you component template

```html
<!-- grid class -->
<ul class="some-grid-class-that-changes" ngxAnimateCssGrid>
  <li class="grid-item">
    <!-- each grid item must have a single direct child -->
    <div>
      <h3>Item title</h3>
      <div>Item body</div>
    </div>
  </li>
<div>

```
You can provide optional config and listen to events:

```html
<!-- grid class -->
<ul class="some-grid-class-that-changes" [ngxAnimateCssGrid]="config" (onStart)="onStart($event)" (onEnd)="onEnd($event)">
  <li class="grid-item">
    <!-- each grid item must have a single direct child -->
    <div>
      <h3>Item title</h3>
      <div>Item body</div>
    </div>
  </li>
<div>

```

Available configuration options:

```
{
  // int: default is 0 ms
  stagger: 100,
  // int: default is 250 ms
  duration: 500
  // string: default is 'easeInOut'
  easing: 'backInOut',
}
```

Events

```javascript
(onStart)           // called with list of HTMLElements about to animate
(onEnd)             // called with list of HTMLElements that just finished animating
```

 Helper functions available through the directive reference 
 ```javascript
 forceGridAnimation()          // use it to force update after inline style changes
 unwrapGrid()                  // remove animations but not the grid itself
 ```

For more detailed documentation with all the supported options see: [animate-css-grid](https://github.com/aholachek/animate-css-grid)

# Offscr

Implementing the animations and custom grid in this [dribbble shot by Hrvoje Grubisic](https://dribbble.com/shots/15193671-Offscr).

## Custom grid

<img src="https://i.imgur.com/r5O4lSx.png" width="800" title="source: imgur.com" /><br>

I dragged a screenshot into Figma to determine the grid layout dimensions to use:

```scss
.home__grid {
  display: grid;
  grid-template-columns: 30rem 41rem 49rem 1fr;
}
```

This works well thanks to a snippet I picked up from [@lhbizarro](https://twitter.com/lhbizarro) that resets the base rem unit:

```scss
html {
  font-size: calc(100vw / 1920 * 10); //1920 to match the width of the design
  line-height: 1;
}

body {
  font-size: 1.6rem;
  font-size: 16px;
}
```

## Header animation

The white-to-black transition relies on two main CSS features: [stacking contexts](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context#the_stacking_context) and [mix-blend-modes](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode).

### Stacking contexts

[@JoshWComeau](https://twitter.com/JoshWComeau)'s excellent [blog post on stacking contexts](https://www.joshwcomeau.com/css/stacking-contexts/) neatly explained how to properly use z-indexes and filled in some gaps in my understanding of them.

### Mix-blend-modes

[@SaraSoueidan](https://twitter.com/SaraSoueidan) has a great post on [using blend modes in CSS](https://www.sarasoueidan.com/blog/compositing-and-blending-in-css/).

Setting `mix-blend-mode: difference` creates the changing text color effect when the background is animated:

```scss
.home__blend-difference {
  mix-blend-mode: difference;
  z-index: 3;
}
```

### Text animation

TBD

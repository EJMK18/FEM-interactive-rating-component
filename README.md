# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](interactive_rating_component_screenshot.png)

### Links

- Solution URL: [Github respository files](https://your-solution-url.com)
- Live Site URL: [Interactive rating component solution](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JS

### What I learned

I had a challenging time with the JavaScript programming of this project. I struggled to maintain the CSS hover state after changing the button element styles with JS. I realized that setting style properties within JS sets it as inline styles. Inline styling supersedes CSS styling. The solution, after quite a bit of research (research longer that I would like to admit...) I came across the !important CSS rule which sets this property value pair to the highest precedence.

### Continued development

I utilised some ARIA rules, which reduced my accessibility rating after running the Lighthouse analysis on the webpage. I will be reading more into the correct way of using ARIA rules, properties and states. Secondly, I need to improve my JS skillset as well.

## Author

- Frontend Mentor - [@EJMK18](https://www.frontendmentor.io/profile/EJMK18)
- Twitter - [@EJMK18](https://twitter.com/EJMK18)
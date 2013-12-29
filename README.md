# Equal Heights Responsive 

A simple jQuery plugin that allows you to set a group of elements height to that of the height of the tallest element amongst them.

*	Author: John Faldo johnfaldo@gmail.com

## Requirements 

*	jQuery http://jquery.com/download/
*	underscore.js http://underscorejs.org/ 

##Options 

*	responsive: true/false  - default is *false*, true enables responsive behavior
*	animation:  true/false  - default is *false*, true enables animations on resize 
*	animationSpeed: integer - default is *400*ms 

## Usage 

Default:

```

$('.elements').equalHeights();

```

With responsive behavior:

``` 

$('.elements').equalHeights({
	responsive:true
})

```

With animation, speed is default to 400ms:

```

$('.elements').equalHeights({
	animation:true
})

```

With responsive, animation and custom animation speed:

```

$('.elements').equalHeights({
	responsive:true,
	animation:true,
	animationSpeed:500
})

```

## File 

The plugin is located: js/equal-heights-responsive.js

Minified version:      js/equal-heights-responsive.min.js 





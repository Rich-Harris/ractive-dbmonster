# ractive-dbmonster

After the awesome demonstration of Ember's new rendering engine [Glimmer](https://github.com/emberjs/ember.js/pull/10501) at EmberConf, and Jeremy Ashkenas [laying down the gauntlet](http://jashkenas.github.io/dbmonster/) with his version, I couldn't resist trying the same thing with Ractive.

* [Glimmer version](https://dbmonster.firebaseapp.com/)
* [Underscore version](http://jashkenas.github.io/dbmonster/) - note that it's broken, try hovering over some data
* [Ractive version](http://www.rich-harris.co.uk/ractive-dbmonster/)

## No snark intended!

I'm really excited for the Ember community - Glimmer has been long in the planning, and looks like a tremendous piece of work. Ember itself is a great framework.

But Ractive users have been doing this sort of thing in production for well over a year, and ours is clearly faster, at least in this demo :)

## Why is Ractive so fast?

Ractive uses similar techniques to Glimmer - it parses the template into a structure such that it's very easy to identify which DOM nodes need to be updated when data changes. This is different to how React (for example) handles DOM updates, which involves re-rendering everything and then running a diff.

The two approaches both have the same goal - minimising DOM updates - but go about it in very different ways. Each has advantages and disadvantages, and I believe we're going to develop a much clearer understanding of what they are in 2015.

## Where can I learn more about Ractive?

* [ractivejs.org](http://ractivejs.org)
* [learn.ractivejs.org](http://learn.ractivejs.org) (interactive tutorials)
* [@RactiveJS](http://twitter.com/RactiveJS) on Twitter

This demo is using the 'edge' version, which will be released soon as version 0.7.0.

[![NPM](https://img.shields.io/npm/v/@nudgeit/easing-ts.svg)](https://www.npmjs.com/package/@nudgeit/easing-ts) ![License](https://img.shields.io/npm/l/@nudgeit/easing-ts.svg)
[![Build Status](https://travis-ci.org/beradrian/easing-ts.png)](https://travis-ci.org/beradrian/easing-ts)

[![NPM](https://nodei.co/npm/easing-ts.png)](https://nodei.co/npm/@nudgeit/easing-ts/)

# Easing functions for JavaScript


## Installation

`npm install easing-ts`.

This can be used either from a browser or on the server side.

## API

### EasingFunction

A function to transition from an initial value to a final one. It must be one of Easing.linear, Easing.linearTween, Easing.easeInQuad, Easing.easeOutQuad, Easing.easeInOutQuad, Easing.easeInCubic, Easing.easeOutCubic, Easing.easeInOutCubic, Easing.easeInQuart, Easing.easeOutQuart, Easing.easeInOutQuart, Easing.easeInQuint, Easing.easeOutQuint, Easing.easeInOutQuint, Easing.easeInSine, Easing.easeOutSine, Easing.easeInOutSine, Easing.easeInExpo, Easing.easeOutExpo, Easing.easeInOutExpo, Easing.easeInCirc, Easing.easeOutCirc, Easing.easeInOutCirc

### Easing

- constructor `new Easing(startValue, endValue, startTime, endTime, easingFunction)`
 - `startValue` the value associated with `startTime`
 - `endValue` the value associated with `endTime`
 - `startTime` the value of the first moment in change. It could be seconds, milliseconds, whatever, but you must keep it consistent.
 - `endTime` the value of the first moment in change.
 - `easingFunction` the easing function
- `.getValue(time)`
 - returns the corresponding value for the given time. Time must be between `startTime` and `endTime`. 

### easing
It creates an observable that will emit at specified interval of times the values from the easing function
Parameters
 - `startValue` the initial value
 - `endValue` the final value
 - `delay` the delay in milliseconds after which the Observable starts to emit values.
 - `duration` the total time duration in milliseconds for the Observable to emit all the values to reach to the endValue.
 - `easingFunction` the easing function
 - `timeStep` the duration of each step when an intermediate value is emitted

## Example

	import { Easing } from "@nudgeit/easing-ts";
	// First create the easing function
	const easing = new Easing(0, 100, 0, 1000, Easing.linear);
	// get the value for the mid-time
	let midValue = easing.getValue(500);

## Testing
The testing is done using Jasmine. To run the tests just run `npm test` or `jasmine`.

## How to make a new release
1. Change the version number in `package.json` (if not already changed - check the version number against the latest release in Github)
2. Create a new [release](https://github.com/nibo-ai/easing-ts/releases) in github with the same name for tag and title as the version number (e.g. `1.0.0`). Do not forget to include the changelog in the release description.
3. Run `npm publish` to publish the new version to npm

## License
MIT 

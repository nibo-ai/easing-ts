export type EasingFunction = (currentTime: number, startValue: number, changedAmount: number, duration: number) => number;

export class Easing {
	constructor(public startValue: number = 0, public endValue: number = 100,
			public startTime: number = 0, public endTime: number,
			public easingFunction: EasingFunction = Easing.linearTween) {
	}

	public getValue(currentTime: number) {
		return this.easingFunction(currentTime, this.startValue, this.endValue - this.startValue, this.endTime - this.startTime);
	}

	// From http://gizma.com/easing/
	// t - currentTime, b - startValue, c - change in value, d - duration
	// simple linear tweening - no easing, no acceleration
	public static readonly linearTween: EasingFunction = (t, b, c, d) => {
		return c * t / d + b;
	}

	public static readonly linear = Easing.linearTween;

	// quadratic easing in - accelerating from zero velocity
	public static readonly easeInQuad: EasingFunction = (t, b, c, d) => {
		t /= d;
		return c * t * t + b;
	}
	// quadratic easing out - decelerating to zero velocity
	public static readonly easeOutQuad: EasingFunction = (t, b, c, d) => {
		t /= d;
		return -c * t * (t - 2) + b;
	}

	// quadratic easing in/out - acceleration until halfway, then deceleration
	public static readonly easeInOutQuad: EasingFunction = (t, b, c, d) => {
		t /= d / 2;
		if (t < 1) {
			return c / 2 * t * t + b;
		}
		t--;
		return -c / 2 * (t * (t - 2) - 1) + b;
	}

	// cubic easing in - accelerating from zero velocity
	public static readonly easeInCubic: EasingFunction = (t, b, c, d) => {
		t /= d;
		return c * t * t * t + b;
	}

	// cubic easing out - decelerating to zero velocity
	public static readonly easeOutCubic: EasingFunction = (t, b, c, d) => {
		t /= d;
		t--;
		return c * (t * t * t + 1) + b;
	}

	// cubic easing in/out - acceleration until halfway, then deceleration
	public static readonly easeInOutCubic: EasingFunction = (t, b, c, d) => {
		t /= d / 2;
		if (t < 1) {
			return c / 2 * t * t * t + b;
		}
		t -= 2;
		return c / 2 * (t * t * t + 2) + b;
	}

	// quartic easing in - accelerating from zero velocity
	public static readonly easeInQuart: EasingFunction = (t, b, c, d) => {
		t /= d;
		return c * t * t * t * t + b;
	}

	// quartic easing out - decelerating to zero velocity
	public static readonly easeOutQuart: EasingFunction = (t, b, c, d) => {
		t /= d;
		t--;
		return -c * (t * t * t * t - 1) + b;
	}

	// quartic easing in/out - acceleration until halfway, then deceleration
	public static readonly easeInOutQuart: EasingFunction = (t, b, c, d) => {
		t /= d / 2;
		if (t < 1) {
			return c / 2 * t * t * t * t + b;
		}
		t -= 2;
		return -c / 2 * (t * t * t * t - 2) + b;
	}

	// quintic easing in - accelerating from zero velocity
	public static readonly easeInQuint: EasingFunction = (t, b, c, d) => {
		t /= d;
		return c * t * t * t * t * t + b;
	}

	// quintic easing out - decelerating to zero velocity
	public static readonly easeOutQuint: EasingFunction = (t, b, c, d) => {
		t /= d;
		t--;
		return c * (t * t * t * t * t + 1) + b;
	}

	// quintic easing in/out - acceleration until halfway, then deceleration
	public static readonly easeInOutQuint: EasingFunction = (t, b, c, d) => {
		t /= d / 2;
		if (t < 1) {
			return c / 2 * t * t * t * t * t + b;
		}
		t -= 2;
		return c / 2 * (t * t * t * t * t + 2) + b;
	}
	// sinusoidal easing in - accelerating from zero velocity
	public static readonly easeInSine: EasingFunction = (t, b, c, d) => {
		return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
	}

	// sinusoidal easing out - decelerating to zero velocity
	public static readonly easeOutSine: EasingFunction = (t, b, c, d) => {
		return c * Math.sin(t / d * (Math.PI / 2)) + b;
	}

	// sinusoidal easing in/out - accelerating until halfway, then decelerating
	public static readonly easeInOutSine: EasingFunction = (t, b, c, d) => {
		return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
	}

	// exponential easing in - accelerating from zero velocity
	public static readonly easeInExpo: EasingFunction = (t, b, c, d) => {
		return c * Math.pow( 2, 10 * (t / d - 1) ) + b;
	}

	// exponential easing out - decelerating to zero velocity
	public static readonly easeOutExpo: EasingFunction = (t, b, c, d) => {
		return c * ( -Math.pow( 2, -10 * t / d ) + 1 ) + b;
	}

	// exponential easing in/out - accelerating until halfway, then decelerating
	public static readonly easeInOutExpo: EasingFunction = (t, b, c, d) => {
		t /= d / 2;
		if (t < 1) {
			return c / 2 * Math.pow( 2, 10 * (t - 1) ) + b;
		}
		t--;
		return c / 2 * ( -Math.pow( 2, -10 * t) + 2 ) + b;
	}
	// circular easing in - accelerating from zero velocity
	public static readonly easeInCirc: EasingFunction = (t, b, c, d) => {
		t /= d;
		return -c * (Math.sqrt(1 - t * t) - 1) + b;
	}

	// circular easing out - decelerating to zero velocity
	public static readonly easeOutCirc: EasingFunction = (t, b, c, d) => {
		t /= d;
		t--;
		return c * Math.sqrt(1 - t * t) + b;
	}

	// circular easing in/out - acceleration until halfway, then deceleration
	public static readonly easeInOutCirc: EasingFunction = (t, b, c, d) => {
		t /= d / 2;
		if (t < 1) {
			return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
		}
		t -= 2;
		return c / 2 * (Math.sqrt(1 - t * t) + 1) + b;
	}

}

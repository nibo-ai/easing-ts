import { timer, Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { Easing, EasingFunction } from "./easing";

export function easing(startValue: number = 0, endValue: number = 100,
		delay: number = 0, duration: number = 1000,
		easingFunction: EasingFunction = Easing.linearTween,
		timeStep: number = 100
		): Observable<number> {
	const steps = Math.floor(duration / timeStep) + (duration % timeStep ? 1 : 0);
	const e = new Easing(startValue, endValue, 0, timeStep * steps, easingFunction);
	let currentTime = 0;
	return timer(delay, timeStep).pipe(take(steps), map((value) => {
		currentTime += timeStep;
		return e.getValue(currentTime);
	}));
}

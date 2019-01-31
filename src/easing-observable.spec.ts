import { easing } from "./easing-observable";
import { Easing } from "./easing";

describe("easing observable", function() {
	it("emit values", function(done) {
		const steps = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
		let step = 0;
		const e = easing(0, 100, 0, 1000, Easing.linear, 100);
		e.subscribe((v) => {
			expect(steps[step]).toEqual(v);
			step++;
		}, () => {}, () => { done(); });
	});

	it("emit values with delay", function(done) {
		const steps = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
		let step = 0;
		const e = easing(0, 100, 100, 1000, Easing.linear, 100);
		e.subscribe((v) => {
			expect(steps[step]).toEqual(v);
			step++;
		}, () => {}, () => { done(); });
	});

	it("emit values non-linear", function(done) {
		const steps = [0.08000000000000002, 1.2800000000000002, 6.4799999999999995, 20.480000000000004, 50, 79.52, 93.52, 98.72, 99.92, 100];
		let step = 0;
		const e = easing(0, 100, 0, 1000, Easing.easeInOutQuart, 100);
		e.subscribe((v) => {
			expect(Math.floor(steps[step])).toEqual(Math.floor(v));
			step++;
		}, (exc) => {}, () => { done(); });
	});
});

import { Easing } from "./easing";

describe("Easing", function() {
	it("ease start and end", function() {
		const easing = new Easing(0, 100, 0, 1000, Easing.linear);
		expect(easing.getValue(0)).toBe(0);
		expect(easing.getValue(500)).toBe(50);
		expect(easing.getValue(1000)).toBe(100);
	});
});

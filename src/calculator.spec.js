describe('calculator', function() {
	var test={1:"one",2:"two"};
	it('should add two numbers', function() {
		
		expect(add(1,5)).toBe(6);
		//expect(add(1,2)).toBe(3);
	});
	it('should subtract two numbers', function() {
		dump(test);
		expect(sub(1,5)).toBe(-4);
		//expect(add(1,2)).toBe(3);
	});
});
describe('firstNonRepeatChar', function() {
	it('finds the first non repeating character in a string', function() {
		expect(firstNonRepeatChar('abacabad')).to.equal('c');
	});
	it('returns null if a string has characters which all repeat', function() {
		expect(firstNonRepeatChar('aabb')).to.equal(null);
	});
	it('returns an empty string if an empty string is passed in', function() {
		expect(firstNonRepeatChar('')).to.equal('');
	});
});
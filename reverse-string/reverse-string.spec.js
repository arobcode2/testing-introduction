describe('reverseString', function() {
  it('reverses a string', function() {
    expect(reverseString('never')).to.equal('reven');
  });
  it('returns same character if 1 char is passed in for a string', function() {
  	expect(reverseString('a')).to.equal('a');
  });
  it('returns an empty string if an empty string is passed in', function() {
  	expect(reverseString('')).to.equal('');
  });
  it('length of reversed string is equal to passed in string', function() {
  	expect(reverseString('yes').length).to.equal(3);
  });
});
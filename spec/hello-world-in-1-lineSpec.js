describe("Hello World", function() {
  it('should output "Hello World!"', function() {
    expect(document.body.innerHTML).toMatch(new RegExp('^Hello World!'));
  });
});
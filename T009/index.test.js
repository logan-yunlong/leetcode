const fn = require('./index');

test('T009', () => {
    expect(fn(121)).toBeTruthy();
    expect(fn(2112)).toBeTruthy();
    expect(fn(123)).not.toBeTruthy();
});

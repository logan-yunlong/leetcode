const sum = require('./index');

test('T009', () => {
    expect(sum(121)).toBeTruthy();
    expect(sum(2112)).toBeTruthy();
    expect(sum(123)).not.toBeTruthy();
});

const fn = require('./index');
const ListGenerator = require("../utils/ListGenerator");


test('T021', () => {
    expect(fn(ListGenerator([2, 4]), ListGenerator([3, 4])))
        .toEqual(ListGenerator([1, 1, 2, 3, 4, 4]));
});


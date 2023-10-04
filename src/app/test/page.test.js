const sum = require('./page')

test('adds 1 + 2 equals 3',()=>{
    expect(sum(1,2)).toBe(3);
});

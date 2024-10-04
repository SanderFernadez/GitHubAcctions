
const sayHello = require('./index.Js');

test('returns "Hola Mundo"', () => {
    expect(sayHello()).toBe("Hola Mundo");
});



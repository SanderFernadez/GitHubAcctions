// index.test.js
const sayHello = require('./index'); // Cambiado a './index'

test('returns "Hola Mundo"', () => {
    expect(sayHello()).toBe("Hola Mundo");
});

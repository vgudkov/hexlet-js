import capitalize from '../src/capitalize.js';

if (capitalize('hello') !== 'HEllo') {
  throw new Error('Функция работает неверно! XyeTa c bukvoi');
}

if (capitalize('') !== '') {
  throw new Error('Функция работает неверно! XyeTa c kavychkami');
}

console.log('Все тесты пройдены!');

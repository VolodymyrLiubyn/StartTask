'use strict';
let shoppingList = [];

let addLastProduct = (...product) => shoppingList.push(...product);
// Додаємо товар(и) у кінець списку

let removeLastProduct = () => shoppingList.pop();
// Видаляємо товар з кінця списку

addLastProduct ("apple", "banana", "bread");

let removeFirstProduct = () => shoppingList.shift();
// Видаляємо перший товар зі списку

let addFirstProduct = (...product) => shoppingList.unshift(...product);
// Додаємо товар(и) у початок списку

function removeAnyProduct(product, array) {
  let indexOfProduct = array.indexOf(product);
  array.splice(indexOfProduct, 1);
}
// Видаляємо товар зі списку за назвою. Функцію можна застосувати для інших масивів

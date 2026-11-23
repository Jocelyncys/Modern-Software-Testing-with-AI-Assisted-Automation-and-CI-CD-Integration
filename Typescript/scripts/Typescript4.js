"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
    console.log(`Fruit is ${fruit}`);
}
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit at index ${i} is ${fruits[i]}`);
}

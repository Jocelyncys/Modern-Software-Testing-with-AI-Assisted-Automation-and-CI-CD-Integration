"use strict";
//************
// String & Number Class Example
//************
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-ignore
let toolName = new String("Playwright");
console.log(toolName.toUpperCase()); // PLAYWRIGHT
console.log(toolName.length); // 11 
console.log(toolName.toLowerCase()); // playwright
let toolVersion = new Number(1.123456789);
console.log(toolVersion.toFixed(2)); // 1.12
console.log(toolVersion.toPrecision(4)); // 1.123

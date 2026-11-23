"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-ignore 
let OS = ['Windows', 'Linux', 'MacOS'];
for (let o of OS) {
    console.log(`Loop 1 Operating System is ${o}`);
}
OS.push('Android');
OS.push('iOS');
for (let os of OS) {
    console.log(`Loop 2 Operating System is ${os}`);
}
//--remove last element from the array - ios
OS.pop();
for (let os of OS) {
    console.log(`Loop 3 Operating System is ${os}`);
}

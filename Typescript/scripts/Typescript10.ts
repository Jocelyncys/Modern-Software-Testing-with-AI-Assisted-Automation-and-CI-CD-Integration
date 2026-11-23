//************
// String & Number Class Example
//************

//@ts-ignore
let toolName:any = new String("Playwright");
console.log(toolName.toUpperCase()); // PLAYWRIGHT
console.log(toolName.length); // 11 
console.log(toolName.toLowerCase()); // playwright

let toolVersion:any = new Number(1.123456789);
console.log(toolVersion.toFixed(2)); // 1.12
console.log(toolVersion.toPrecision(4)); // 1.123


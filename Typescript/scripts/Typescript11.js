"use strict";
//----- Creating Classes in TypeScript -----//
Object.defineProperty(exports, "__esModule", { value: true });
// Defining a class 
class Tool {
    name;
    version;
    constructor(name, version) {
        this.name = name;
        this.version = version;
    }
    displayInfo() {
        console.log(`Tool Name: ${this.name}, Version: ${this.version}`);
    }
}
exports.default = Tool;

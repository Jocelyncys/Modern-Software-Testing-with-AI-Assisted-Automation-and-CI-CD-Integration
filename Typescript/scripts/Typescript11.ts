//----- Creating Classes in TypeScript -----//

// Defining a class 

export default class Tool{
    name: string;
    version: number;

    constructor(name: string, version: number){
        this.name = name;
        this.version = version;
    }

    displayInfo(): void{
        console.log(`Tool Name: ${this.name}, Version: ${this.version}`);
    }
}
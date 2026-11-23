interface Employee {
    empname: string;
    empcode: number;
}

let emp1: Employee = {
    empname: "John Doe",
    empcode: 12345
};

console.log(`Employee name: ${emp1.empname}`);
console.log(`Employee code: ${emp1.empcode}`);


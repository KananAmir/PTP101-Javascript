

// # maaşı 65000-dən çox olan departamentləri çapa verən program tərtib edin.

// # maaşı 65000-dən çox olan və departamenti "IT" olanları çapa verən program tərtib edin.

// # sadecə department "HR" olanları yeni array'a yığıb, həmin arrayı console edin


const employees = [
    {
        name: "Jamil",
        salary: 50000,
        department: "IT"
    },
    { name: "Jale", salary: 60000, department: "HR" },
    { name: "Bayram", salary: 55000, department: "IT" },
    { name: "Sahil", salary: 75000, department: "HR" },
    { name: "Maryam", salary: 65000, department: "IT" },
    { name: "Elnara", salary: 80000, department: "HR" },
    { name: "Duvud", salary: 70000, department: "IT" },
];


console.log(employees);

let sum = employees[0].salary

for (let i = 1; i < employees.length; i++) {
//    console.log(employees[i]['name']);
//    console.log(employees[i].name, employees[i].salary);
    sum += employees[i].salary
}

console.log('total salary: ', sum);

const averageSalary = sum / employees.length

console.log('average salary: ', averageSalary);


for (let i = 1; i < employees.length; i++) {
    if(employees[i].salary > 65000 && employees[i].department === 'IT'){
        console.log(employees[i]);
        
    }
}
const allHRs = []
for (let index = 0; index < employees.length; index++) {
     
    if(employees[index].department === "HR"){
        allHRs.push(employees[index])
        
        
    }
}
console.log(allHRs);

for (let i = 0; i < employees.length; i++) {
    if (employees[i].name.indexOf("a") !== employees[i].name.lastIndexOf("a")) {
        console.log(employees[i]);
        
    }
    
}
// Write your solution in this file!
var employee = {
    name: 'Sam',
    streetAddress: '12 Broadway'
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]: value};
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey (employee, key){
    var newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
var updatedEmployee = updateEmployeeWithKeyAndValue(employee, "position", "Manager");
console.log(updatedEmployee);
destructivelyUpdateEmployeeWithKeyAndValue(employee, "salary", 50000)
console.log(employee);
var employeeWithoutAddress = deleteFromEmployeeBykey(employee, "streetAddress");
console.log(employeeWithoutAddress);
destructivelyDeleteFromEmployeeByKey(employee, "position");
console.log(employee);
// THE CAKE IS A LIE


const employee = {
    name: "Chell",
    streetAddass: "10400 NE 4th St,Bellecue, WA"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newOdj = { ...employee }

    newOdj[key] = value

    return newOdj
}
console.log(employee)


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {

    employee[key] = value

    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }

    delete newEmployee[key];

    return newEmployee

}

function destructivelyDeleteFromEmployeeByKey(employee, key) {

    delete employee[key]

    return employee
    
}
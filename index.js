let employee = {
    name: 'Kyle',
    streetAddress: '123 Main Street'
}

function updateEmployeeWithKeyAndValue(Jack, key, value) {
    const updateEmployee = { ...Jack };
    updateEmployee[key] = value;
    return updateEmployee;
}

function deleteFromEmployeeByKey(Jack, key) {
    const updateEmployee = { ...Jack }
    delete updateEmployee[key];
    return updateEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
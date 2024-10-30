const { Employee } = require("./Employee");

class Manager extends Employee {
  #employeesManaged;
  constructor(name, position, salary, department) {
    super(name, position, salary);
    this.department = department;
    this.#employeesManaged = [];
  }

  getEmployeesManaged() {
    return this.#employeesManaged;
  }

  setEmployeesManaged(employee) {
    this.#employeesManaged.push(employee);
  }

  promote(newPosition) {
    this.position = newPosition;
    this.setSalary(this.getSalary() * 1.2);
  }
}

module.exports = {
  Manager,
};

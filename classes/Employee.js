class Employee {
  #salary;
  #isHired;
  static #allEmployees = [];
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.#salary = salary;
    this.#isHired = true;
    Employee.#allEmployees.push(this);
  }

  getSalary() {
    return this.#salary;
  }

  setSalary(amount) {
    this.#salary = amount;
  }

  getStatus() {
    return this.#isHired;
  }

  setStatus(command) {
    this.#isHired = command === "fire" ? false : true;
  }

  static getEmployees() {
    return Employee.#allEmployees;
  }

  static getTotalPayroll() {
    let sum = 0;
    for (let employee of Employee.#allEmployees) {
      sum += employee.getSalary();
    }
    return sum;
  }
}

module.exports = {
  Employee,
};

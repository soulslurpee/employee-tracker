const db = require("../db/connection");

class DB {
  constructor(db) {
    this.db = db;
  }

  getAllDep() {
    return this.db.promise()
    .query("SELECT * FROM department");
  }

  getAllEmp() {
    return this.db.promise()
      .query(
        `SELECT employee.id, 
        employee.first_name, 
        employee.last_name, 
        role.title AS role FROM employee LEFT JOIN role ON employee.role_id = role.id`
      );
  }

  getAllRoles() {
    return this.db.promise()
      .query(
        `SELECT role.id,
        role.title, 
        role.salary,
        department.name AS department_name FROM role LEFT JOIN department ON role.department_id = department.id`
      );
  }

  addDept() {

  }

  addRole() {

  }

  addEmp() {

  }

  updateEmp() {
  
  }
}

module.exports = new DB(db);
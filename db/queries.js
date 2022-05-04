const db = require("./connection.js");

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
        `SELECT 
          employee.id,
          employee.first_name,
          employee.last_name,
          role.title,
          department.name AS department,
          role.salary,
          CONCAT(manager.first_name, " ",manager.last_name) AS manager
          FROM employee
          LEFT JOIN role ON employee.role_id = role.id
          LEFT JOIN department ON role.department_id = department.id 
          LEFT JOIN employee manager ON employee.manager_id = manager.id`
      );
  }

  getAllRoles() {
    return this.db.promise()
      .query(
        `SELECT 
        role.id,
        role.title,
        role.salary,
        department.name 
        FROM role LEFT JOIN department ON role.department_id = department.id`
      );
  }

  insertDep(department) {
    return this.db.promise()
      .query(
        `INSERT INTO department SET ?
        `, department
      )
  } 

  insertRole() {

  }

  insertEmp() {

  }

  updateEmp() {
  
  }
}

module.exports = new DB(db);
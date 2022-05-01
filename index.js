const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const PORT = process.env.PORT || 5000;
const app = express();

const db = require('./db/connection.js');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.connect((err) => {
  if(err) {
    console.log(err);
    throw err;
  }
  console.log('<=Connection to Employee Database=>');
  mainMenu();
});

function mainMenu() {
  inquirer.prompt([
  {
  type: "list",
  message: "Please select from the following options:",
  name: "choice",
  choices: [
            "[View All Employees]", 
            "[Update Employee]",
            "[Add Employee]",
            "[View All Employees By Roles]",
            "[Add Role]",
            "[View all Employees By Deparments]", 
            "[Add Department]"
          ]
  }
]).then((result) => {
      switch (result.choice) {
        case "[View All Employees]":
          viewAllEmployees();
        break;

        case "[Update Employee]":
          updateEmployee();
        break;

        case "[Add Employee]":
          addEmployee();
        break;
  
        case "[View All Employee's By Roles]":
          viewAllRoles();
        break;

        case "[Add Role]":
          addRole();
        break;

        case "[View all Emplyees By Deparments]":
          viewAllDepartments();
        break;

        case "[Add Department]":
          addDepartment();
        break;
      }
  })
}

function viewAllEmployees() {
  connection.query("SELECT employee.id, employee.first_name, employee.last_name, role.title AS role FROM employee LEFT JOIN role ON employee.role_id = role.id", 
  (err, res) => {
    if (err) 
    throw err
    console.table(res)
    startPrompt()
})
}


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
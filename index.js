const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const PORT = process.env.PORT || 5000;
const app = express();

const db = require('./db/connection.js');
const queries = require('./db/queries.js')

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
  queries
    .getAllEmp()
    .then(( [rows] ) => {
      console.table(rows);
    })
    .then(() => {
      mainMenu();
    });
}

function viewAllRoles() {
  queries
    .getAllRoles()
    .then(( [rows] ) => {
      console.table(rows);
    })
    .then(() => {
      mainMenu();
    });
}

function viewAllDepartments() {
  queries
    .getAllDep()
    .then(( [rows] ) => {
      console.table(rows);
    })
    .then(() => {
      mainMenu();
    });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
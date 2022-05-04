const express = require('express');
const inquirer = require('inquirer');
const { prompt } = require("inquirer");
const consoleTable = require('console.table');
require("console.table");

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
  console.log('<=Connected to Employee Database=>');
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
            "[View All Employees By Role]",
            "[Add Role]",
            "[View all Employees By Deparment]", 
            "[Add Department]"
          ]
  }
]).then((result) => {
      switch (result.choice) {
        case "[View All Employees]":
          viewAllEmp();
        break;

        case "[Update Employee]":
          updateEmployee();
        break;

        case "[Add Employee]":
          addEmp();
        break;
  
        case "[View All Employees By Role]":
          viewAllRoles();
        break;

        case "[Add Role]":
          addRole();
        break;

        case "[View all Employees By Deparment]":
          viewAllDep();
        break;

        case "[Add Department]":
          addDep();
        break;
      }
  })
}

function viewAllEmp() {
  queries.getAllEmp()
    .then(( [rows] ) => {
      console.table(rows);
    })
    .then(() => {
      mainMenu();
    });
}

function viewAllRoles() {
  queries.getAllRoles()
    .then(( [rows] ) => {
      console.table(rows);
    })
    .then(() => {
      mainMenu();
    });
}

function viewAllDep() {
  queries.getAllDep()
    .then(( [rows] ) => {
      console.table(rows);
    })
    .then(() => {
      mainMenu();
    });
}

function addDep() {
  inquirer.prompt([
    {
      type:"string",
      name:"addDep",
      message:"Enter new department"
    }
  ])
  .then((result) => {
    departmentName = result.addDep;
    console.log(departmentName);
    queries.insertDep(departmentName)
    .then(() => {
    console.log(departmentName);
    })
  })
  .catch((err) => {
    if (err) throw err;
  })
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
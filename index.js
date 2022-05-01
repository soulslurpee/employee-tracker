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
  console.log('MySQL connection established')
});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
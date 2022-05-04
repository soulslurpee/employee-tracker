USE employee_tracker;

INSERT INTO department
  (name)
VALUES
  ('Finance'),
  ('Development'),
  ('Legal'),
  ('Sales');

INSERT INTO role
  (title, salary, department_id)
VALUES
  ('Comptroller', 80000, 1),
  ('Accountant', 50000, 1),
  ('Project Manager',250000, 2),
  ('Engineer', 125000, 2),
  ('General Council', 350000, 3),
  ('Paralegal', 50000, 3),
  ('Sales Lead', 90000, 4),
  ('Sales Rep', 60000, 4);

INSERT INTO employee 
  (first_name, last_name, role_id, manager_id)
VALUES
  ('Johnson', 'Scott', 1, NULL),
  ('Richards', 'Dave', 2, 1),
  ('Gonzales', 'Rose', 3, NULL),
  ('Thompson', 'Charles', 4, 3),
  ('Leon', 'Mary', 5, NULL),
  ('Gerbert', 'Linda', 6, 5),
  ('Holmes', 'Sherlock', 7, NULL),
  ('White', 'Betty', 8, 7);

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const UserRouter = require('../users/user-router');
const AuthRouter = require('../auth/auth-router');
const restricted = require('../auth/restricted');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api', AuthRouter);
server.use('/api/users', restricted, UserRouter);

server.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

module.exports = server;

// function checkDepartment(department) {
//   return (req, res, next) => {
//     if (
//       req.decodedToken &&
//       req.decodedToken.department &&
//       req.decodedToken.department.toLowerCase() === department
//     ) {
//       next();
//     } else {
//       res.status(403).json({ message: 'Department errorrrrrrr' });
//     }
//   };
// };


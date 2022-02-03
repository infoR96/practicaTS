"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//definicion de la conexion
const db = new sequelize_1.Sequelize('node', 'gian', 'Informatica196@', {
    host: 'localhost',
    dialect: 'mysql'
});
// const db2 =new Sequelize('node','gian','Informatica196@',{
//     host: 'localhost',
//     dialect: 'mysql' });
exports.default = db;
//# sourceMappingURL=connection.js.map
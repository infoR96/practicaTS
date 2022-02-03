import { Sequelize } from "sequelize";
//definicion de la conexion
const db = new Sequelize('node','gian','Informatica196@',{
    host: 'localhost',
    dialect: 'mysql' });

// const db2 =new Sequelize('node','gian','Informatica196@',{
//     host: 'localhost',
//     dialect: 'mysql' });

export default db;

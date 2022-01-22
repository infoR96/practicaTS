import { Sequelize } from "sequelize";

const db = new Sequelize('node','gian','Informatica196@',{
    host: 'localhost',
    dialect: 'mysql' });

export default db;

import { DataTypes } from "sequelize";
import db from "../db/connection";

const Usuario = db.define('Usuario',{
    user:{
        type:DataTypes.STRING
    },
    pass:{
        type:DataTypes.STRING
    },
    estado:{
        type:DataTypes.BOOLEAN
    }
});

export default Usuario;
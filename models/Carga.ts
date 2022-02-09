import { DataTypes } from "sequelize";
import db from "../db/connection";

const Usuario = db.define('Carga',{
    ruc:{
        type:DataTypes.STRING
    },
    nombre:{
        type:DataTypes.STRING
    },
    contacto:{
        type:DataTypes.BOOLEAN
    }
});

export default Usuario;
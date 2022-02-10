import { DataTypes } from "sequelize";
import db from "../db/connection";

const Carga = db.define('Carga',{
    ruc:{
        type:DataTypes.STRING
    },
    nombre:{
        type:DataTypes.STRING
    },
    contacto:{
        type:DataTypes.STRING
    },
    tonelaje:{
        type:DataTypes.STRING
    },
    ticket:{
        type:DataTypes.STRING
    },
    acopiador:{
        type:DataTypes.STRING
     }

});

export default Carga;
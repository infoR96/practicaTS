"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Usuario = connection_1.default.define('Carga', {
    ruc: {
        type: sequelize_1.DataTypes.STRING
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    contacto: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
});
exports.default = Usuario;
//# sourceMappingURL=Carga.js.map
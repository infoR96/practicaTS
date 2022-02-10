"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postCarga = void 0;
const Carga_1 = __importDefault(require("../models/Carga"));
const postCarga = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    res.json('test succesfuly');
    try {
        const existeTicket = yield Carga_1.default.findOne({
            where: {
                ticket: body.ticket
            }
        });
        if (existeTicket) {
            return res.status(400).json({
                mdg: 'ya existe ese usuario'
            });
        }
        console.log('antes de carga.body', body);
        const carga = Carga_1.default.build(body);
        yield carga.save();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postCarga = postCarga;
//# sourceMappingURL=cargas.js.map
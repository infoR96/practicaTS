"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = void 0;
const getUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'getUsuario',
        id
    });
};
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: 'postUsuarios',
        body
    });
};
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putUsuarios',
        body
    });
};
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deleteUsuarios'
    });
};
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.js.map
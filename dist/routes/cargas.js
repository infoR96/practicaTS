"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cargas_1 = require("../controllers/cargas");
const router = (0, express_1.Router)();
router.post('/', cargas_1.postCarga);
exports.default = router;
//# sourceMappingURL=cargas.js.map
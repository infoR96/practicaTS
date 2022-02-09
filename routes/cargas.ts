import { Router } from "express";
import {  postCarga } from "../controllers/cargas";

const router = Router();

router.post('/', postCarga );

 
export default router;
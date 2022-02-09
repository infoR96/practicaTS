import { Request, Response } from "express";
import Carga from "../models/Carga";

export const postCarga = async(req: Request, res:Response)=>{

    const {body} = req;

    res.json('test succesfuly')

    try {
        // const existeTicket = await Carga.findOne({
        //     where:{
        //         ticket:body.ticket
        //     }}
        // )

        // if(existeTicket){
        //     return res.status(400).json({
        //         mdg:'ya existe ese usuario'
        //     })
        // }
        const carga =  Carga.build(body);
        await carga.save();
        res.json(carga);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg:'Hable con el administrador'
        })
    }
 }
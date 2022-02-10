import { Request, Response } from "express";
import Carga from "../models/Carga";

export const postCarga = async (req: Request, res: Response) => {

    const { body } = req;

    res.json('test succesfuly')

    try {
        const existeTicket = await Carga.findOne({
            where:{
                ticket:body.ticket
            }}
        )

        if(existeTicket){
            return res.status(400).json({
                mdg:'ya existe ese usuario'
            })
        }
        
        console.log('antes de carga.body',body);

         const carga = Carga.build(body);
            await carga.save();
           

    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }

}
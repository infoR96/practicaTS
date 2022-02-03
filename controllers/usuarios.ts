import { Request, Response } from "express";
import Usuario from "../models/usuario";

export const getUsuarios = async(req: Request, res:Response)=>{
    
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
}

export const getUsuario =async  (req: Request, res:Response)=>{

    const {id} = req.params;
    const usuario = await Usuario.findByPk(id);
    if(usuario){
    res.json(usuario);
    }else{
    res.status(400).send(`Usuario no con  id:${id} no existe`)
    }
}

export const postUsuario = async(req: Request, res:Response)=>{

    const {body} = req;

    try {
        const existeUser = await Usuario.findOne({
            where:{
                user:body.user
            }}
        )

        if(existeUser){
            return res.status(400).json({
                mdg:'ya existe ese usuario'
            })
        }
        const usuario = Usuario.build(body);
        await usuario.save();
        res.json(usuario);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg:'Hable con el administrador'
        })
    }
 }

export const putUsuario = async(req: Request, res:Response)=>{
    
    const {id} = req.params;
    const {body} = req;

    try {
        const usuario = await Usuario.findByPk(id);

        if(!usuario){
            return res.status(400).json({
                msg:'No existe usuario con el id: ', id
            });
        }

        await usuario.update(body);
        res.json(usuario);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg:'Hable con el administrador'
        })
    }
}
export const deleteUsuario = async (req: Request, res:Response)=>{
    
    const {id} = req.params;

    const usuario = await Usuario.findByPk(id);

        if(!usuario){
            return res.status(400).json({
                msg:'No existe usuario con el id: ', id
            });
        }
    await usuario.destroy();

    res.json({
        msg:`usuasrio con: ${id} eliminado`
    })
}
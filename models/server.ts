
import express, {Application} from 'express';
import userRoutes from '../routes/usuario'
import cargasRoutes from '../routes/cargas'
import cors from 'cors'
import db from '../db/connection';
class Server {

    private app: Application;
    private port : String;
    private apiPaths = {
        usuarios: '/api/usuarios',
        cargas:'/api/cargas'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.middlewares();
        this.routes();
        this.dbConnection
    }

    async dbConnection(){
        try {
            await db.authenticate();
            console.log('DB Online');
        }catch(n){
            console.error(n);
        }
    } 

    middlewares(){
        //CORS
        this.app.use(cors());

        //lectura de body
        this.app.use(express.json());

        //carpeta publica
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.apiPaths.usuarios, userRoutes );
        this.app.use(this.apiPaths.cargas, cargasRoutes );
    }
    
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en puerto ' + this.port);
        })
    }
}

export default Server;
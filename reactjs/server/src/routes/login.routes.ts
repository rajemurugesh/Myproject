import express from "express"
import LoginService from "../controller/login";


class LoginClass{
    public router = express.Router();
    protected service : LoginService

    

    constructor() {
        this.router.get('/saveUser', this.saveUser);
        this.router.post('/addLoginInfos', this.addLoginInfo)
        this.router.get('/getLoginInfos', this.getLoginInfos)
        this.router.get('/getLoginInfo/:id', this.getLoginInfo)
        this.router.put('/getLoginInfo/:id', this.updateLoginInfo)
        this.router.delete('/getLoginInfo/:id', this.deleteLoginInfo)
        this.service = new LoginService()

    }
    private saveUser = async (_req: express.Request, res: express.Response) => {

        res.json({"status":"success"})
    }

    private getLoginInfos = async (_req: express.Request, res: express.Response) => {

        const result = await this.service.getLoginInfos()
        
        res.json(result)
    }

    private getLoginInfo = async (req: express.Request, res: express.Response) => {

        const result = await this.service.getLoginInfo(req.params.id)
        
        res.json(result)
    }

    private updateLoginInfo = async (req: express.Request, res: express.Response) => {

        const result = await this.service.updateLoginInfo(req.params.id,req.body.emailId, req.body.password)
        
        res.json(result)
    }

    private deleteLoginInfo = async (req: express.Request, res: express.Response) => {

        const result = await this.service.deleteLoginInfo(req.params.id)
        
        res.json(result)  
    }
    
    private addLoginInfo = async (req: express.Request, res: express.Response) => {

        
        const emailId = req.body.emailId
        const password = req.body.password

        
        console.log('emailId ==', emailId)
        console.log('password ==', password)

        const result = await this.service.saveUser(emailId, password)
        
        res.json(result)
    }
    
}
    export default LoginClass


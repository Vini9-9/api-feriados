import express  from "express";

class StartUp {
    public app: express.Express;

    constructor() {
        this.app = express();
        this.routes();
    }

    routes(){
        this.app.route('/').get((req, res) => {
            res.send({ version: "0.0.1"})
        })
    }
}

export default new StartUp();
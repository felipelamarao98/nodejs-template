import express from 'express';

export interface routerAttr{
    method: methods,
    path: string,
    fn: Function
}
export enum methods{
    GET="get",
    POST="post",
    PUT="put",
    PATCH="patch",
    DELETE="delete"
}

const routerConfig: express.Router  = express.Router();

export function routerBuilder (routes: routerAttr[]) {

    for(const route of routes){
        routerConfig[route.method](route.path,(req: express.Request, res: express.Response)=>{
            route.fn(req,res)
            .then((response:Object) =>{
                res.send(response);
            })
            .catch((err: any)=>{
                res.status(500).send(err);
            });
        });
    }

    return routerConfig;
}

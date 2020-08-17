import express from "express";
import { methods, routerAttr, routerBuilder } from './routerBuilder';

const routes: routerAttr [] = [
    {
        method: methods.GET,
        path:"/",
        fn: async (req: express.Request, res: express.Response) =>{
            return {
                headers: req.headers,
                cookies: req.cookies,
                query: req.query,
                body: req.body
            };
        }
    }
]

export default routerBuilder(routes);
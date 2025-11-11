import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import { verifyTokenIsValid } from "../utils/verifyTokenIsValid";

const getToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;
        
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).send({ message: "Acesso negado. Token não fornecido." });
        }

        const token = authHeader.split(' ')[1];

        if(!token){
            return res.status(401).send({
                message: "Acesso negado. Token não fornecido."
            })
        }

        const verifyToken = verifyTokenIsValid(token);

        if(verifyToken === false){
            return res.status(401).send({
                message: "Token expirado"
            })
        }

        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({
      message: "Server Error",
      erro: error,
    });
    }
}
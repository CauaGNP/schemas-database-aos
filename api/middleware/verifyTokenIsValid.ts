import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"

const verifyTokenIsValid = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: "Acesso negado. Token não fornecido." });
        }

        const token = authHeader.split(' ')[1];
    } catch (error) {
        
    }
}
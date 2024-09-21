import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

if (!token) {
    return res.status(401).send({ error: 'Access denied!' });
}

try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    (req as any).user = decoded;
    next();
} catch (err) {
    res.status(400).send({ error: 'Invalid token' });
    }
};

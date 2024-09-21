import { Request, Response } from 'express';
import { userSchema } from '../schemas/userSchema';
import { createUser } from '../models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { z } from 'zod';

export const registerUser = async (req: Request, res: Response) => {
  try {
    // Valider les données avec Zod
    const validatedData = userSchema.parse(req.body);
    const hashedPassword = await bcrypt.hash(validatedData.password, 10);

    const user = await createUser({ email: validatedData.email, password: hashedPassword });
    res.status(201).json(user);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json(error.errors);  // Erreurs de validation
    }
    res.status(500).json({ error: 'Failed to create user' });
  }
};

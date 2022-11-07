import { body } from "express-validator";

export const registerValidator = [
    body('email', 'Invalid email format').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
    body('fullname', 'Enter your name').isLength({ min: 3 }),
]
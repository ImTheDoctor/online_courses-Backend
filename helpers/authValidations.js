import { body } from "express-validator";

export const registerValidator = [
    body('email', 'Invalid email format').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }).matches(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,20}$/),
    body('fullname', 'Enter your name').isLength({ min: 3 }).notEmpty(),
]

export const loginValidator = [
    body('email', 'Invalid email format').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }).matches(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,20}$/),
]
import jwt  from "jsonwebtoken";

export default function generateAccessToken(id) {
    return jwt.sign({_id: id}, process.env.JWT_SECRET, { expiresIn: '36000s' });
}
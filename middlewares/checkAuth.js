import jwt from "jsonwebtoken";

export default function checkAuth(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req._id = decoded._id
            next()
        } catch (error) {
            return res.status(403).json({
                message: "No Access"
            })
        }
    } else {
        return res.status(403).json({
            message: "No Access"
        })
    }
}
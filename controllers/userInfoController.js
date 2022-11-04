import mongoose from "mongoose";
import UsersReg from "./models/users";

const db = `mongodb+srv://HenoAdmin:${process.env.DBPASS}@cluster0.iocguoh.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`

mongoose.connect(db)
    .then((res) => console.log('Connected to DB'))
    .catch((error) => console.log(error))


export const getUsers = (req, res) => {

}
export const getUser = (req, res) => {

}
export const createUser = (req, res) => {
    const userBody = req.body;
    const user = new UsersReg({ fullname, email, password });
    user
        .save()
        .then(result=> res.send(result))
        .catch(error=>{
            console.log(error);
            res.render(createPath('error'), userBody)
        })
}
export const deleteUser = (req, res) => {

}
export const updateUser = (req, res) => {

}
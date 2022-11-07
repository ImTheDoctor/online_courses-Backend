
import UsersReg from "../models/users.js";


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
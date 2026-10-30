import {userList} from "../model/userModel.js";

export function userControll(req,resp){
    const userData = userList();

    resp.render('user',{user:userData})
    
}
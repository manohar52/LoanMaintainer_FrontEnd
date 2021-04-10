import axios from 'axios';

class LoginService{

    authenticateUser(uName,pwd){
        const user = {
            userId:0,
            userName:uName,
            firstName:"",
            lastName:"",
            password:pwd,
            userRole:{
                roleId:1,
                roleName:""
            }  
        }
        return axios.post('http://localhost:8080/api/users/login/',user);
    }

    registerUser(uName, pwd, fname,lname){
        const user = {
            userId:0,
            userName:uName,
            firstName:fname,
            lastName:lname,
            password:pwd,
            userRole:{
                roleId:1,
                roleName:""
            }  
        }
        return axios.post('http://localhost:8080/api/users/',user);
    }
}

export default new LoginService();
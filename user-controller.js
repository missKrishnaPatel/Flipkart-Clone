

import { ContactSupportOutlined } from "@mui/icons-material";
import User from "../model/user-schema.js";


//backend api


export const userSignup =async(request,response)=>{

    try {
         
          console.log(request.body);

       const exist = await User.findOne({userName: request.body.userName});
       if(exist){
        return response.status(401).json({message:'Username already exist'})
       }



       const user = request.body;
       const newUser = new User(user);
       await newUser.save();

       response.status(200).json({message:user});
    } catch (error) {
        response.status(500).json({message:error.message});
    }


}


export const userLogin = async (request,response)=>{
         try {
            const userName=request.body.userName;
            const password=request.body.password;

           let user= await User.findOne({userName:userName, password:password})

           if(user){
            return response.status(200).json({data:user})
           }else{
            return response.status(401).json(` Invalid Login`)
           }
         } catch (error) {
            response.status(500).json('Error',error.message);
         }
}
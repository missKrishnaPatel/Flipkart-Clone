
import mongoose from "mongoose";



export const Connection = async(username,password) => {
     const URI = `mongodb+srv://${username}:${password}@ecommerce-web.alhdy.mongodb.net/?retryWrites=true&w=majority&ssl=true&appName=ecommerce-web`;
    try{
       await mongoose.connect(URI, {
        serverSelectionTimeoutMS: 30000,
        maxPoolSize: 10, // 30 seconds timeout
    })
       console.log("Database connected successfully");
    }catch(error){
           console.log("error while connecting with the database", error.message);
    }
    
    
}

export default Connection;
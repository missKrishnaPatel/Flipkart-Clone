import axios from 'axios';

const url = "http://localhost:8000";

export const authenticateSignup = async(data) => {
    try {
      return await axios.post(`${url}/signup`,data)
    } catch (error) {
        console.log("Error while calling signup api", error)
    }
}




export const authenticateLogin = async(data) => {
  try {
    return await axios.post(`${url}/login`,data)
  } catch (error) {
      console.log("Error while calling login api", error)
      return error.response;
  }
}
r


export const  payUsingPaytm = async(data) => {
  try {
    let response= await axios.post(`${URL}/payment`, data);
    return response.data;
  } catch (error) {
    console.log('Error while calling payment api')
  }
}
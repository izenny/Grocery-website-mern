
import { publicRequest } from '../Request/RequestMethod';
 export const signupApi= async (data)=>{
    try{
        const signupData = await publicRequest.post('users/register',data)
        console.log("sigupdata",signupData.data);
        return signupData.data
    }
    catch(error){
        console.log("error in signup api");
    }
 }
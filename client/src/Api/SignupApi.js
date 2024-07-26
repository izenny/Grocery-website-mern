import axios from 'axios'
 export const signupDataFunction = async (data)=>{
    try{
        const signupData = await axios.post('')
        console.log("sigupdata",signupData);
        return signupData
    }
    catch(error){
        console.log("error in signup api");
    }
 }
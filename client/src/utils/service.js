import axios from "axios";
const baseurl = "https://sample-deploy-api.vercel.app/api/v1";
const Postreq = async (url , data)=>{
    try {
        const response = await axios({
            
            method:"post",
            url,
            data,
            
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true
        })
        console.log("response of the get request: ", response);
        return response;
    } catch (error) {
        console.error("error on sending post request: ", error.message);
    }
}

const getReq = async(url)=>{
    try {
        const response = await axios({
            
            method:"get",
            url,
            
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true,
        })
        
        return response;
    } catch (error) {
        console.error("error on sending get request: " , error.message);
    }
}
export {Postreq , getReq , baseurl};

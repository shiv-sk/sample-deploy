/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import {  baseurl, getReq } from "../utils/service";
import { Card } from "react-bootstrap";

export default function Home(){
    const [allusers , setAllUsers] = useState([]);
    const [isLoading , setIsLoading] = useState(false);
    const [isError , setIsError] = useState(null);
    // console.log(allusers);
    const fetchUsers = async()=>{
        try {
            setIsLoading(true);
            const response = await getReq(`${baseurl}/user`);
            // console.log("the reponse of the fetch users: " , response.data.data.Alluser);
            setAllUsers(response.data.data.Alluser);
        } catch (error) {
            console.log("the fetch users error: ", error);
            setIsError(error);
        }finally{
            setIsLoading(false);
        }
    }
    useEffect(()=>{
        fetchUsers();
    } , [])
    return isLoading ? (<p>the page is loading</p>) :(
        <>
        {
            allusers.map((user)=>(
                <div key={user._id} style={{display: 'flex', flexWrap: 'wrap', gap: '10px', paddingTop:"7%" , paddingLeft:"15%"}}>
                    <Card style={{ width: '18rem' }} bg="dark">
                        <Card.Body style={{color:"whitesmoke"}}>
                            <Card.Title>username: {user.username}</Card.Title>
                            <Card.Subtitle className="mb-2">email:{user.email}</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the cards content.
                            
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </div>
            ))
        }
        </>
    )
}
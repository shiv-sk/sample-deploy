/* eslint-disable no-unused-vars */
import { useState } from "react"
import {Form ,Row , Col , Stack, Button} from "react-bootstrap"
import { baseurl, Postreq } from "../utils/service";
export default function Login(){
    const [loginData , setLoginData] = useState({
        email:"",
        password:""
    });
    console.log(loginData);
    const [isLoading , setIsLoading] = useState(false);
    const [isError , setIsError] = useState(null);
    const login = async ()=>{
        try {
            setIsLoading(true);
            const response = await Postreq(`${baseurl}/user/login` , loginData);
            console.log(response);
            const {user} = response;
            console.log("user of the logedin user: ", user);
            localStorage.setItem("User" , user);
        } catch (error) {
            console.log("the error is login route: ", error);
            setIsError(error);
        }finally{
            setIsLoading(false);
        }
        
    }
    const onsubmithandle = (e)=>{
        e.preventDefault();
        login();
    }
    
    return isLoading ? (<p>the page is loading</p>) : (
        
        <Form style={{paddingLeft:"25%" , paddingTop:"8%"}} onSubmit={onsubmithandle}>
            <Row>
                <Col xs={6}>
                    <Form.Group className="mb-3">
                        <Stack gap={4}>
                            
                            <Form.Control type="email" placeholder="name@example.com" value={loginData.email} onChange={(e)=>setLoginData({...loginData , email:e.target.value})}/>
                            <Form.Control type="password" placeholder="name@1234"  value={loginData.password} onChange={(e)=>setLoginData({...loginData , password:e.target.value})}/>
                            <Button type="submit">Login</Button>
                        </Stack>
                            
                    </Form.Group>
                </Col>
            </Row>
        </Form>
        
    )
}
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { baseurl, Postreq } from "../utils/service";

export default function Register(){
    const [isLoading , setIsLoading] = useState(false);
    const [isError , setIsError] = useState(null);
    const [registerData , setRegisterData] = useState({
        username:"",
        email:"",
        password:""
    })
    const register = async ()=>{
        try {
            setIsLoading(true);
            const response = await Postreq(`${baseurl}/user/register` , registerData);
            console.log("response of the regitser function: ", response.data);
            const {user} = response.data;
            localStorage.setItem("User" , JSON.stringify(user));
        } catch (error) {
            console.log("error from register function: ", error);
            setIsError(error);
        }finally{
            setIsLoading(false);
        }
    }
    const onsubmithandle = (e)=>{
        e.preventDefault();
        register();
    }
    return isLoading ? (<p>the page is loading</p>) : (
        <Form style={{paddingLeft:"25%" , paddingTop:"8%"}} onSubmit={onsubmithandle}>
            <Row>
                <Col xs={6}>
                    <Form.Group className="mb-3">
                        <Stack gap={4}>
                            <Form.Control type="text" placeholder="username@user" value={registerData.username} onChange={(e)=>setRegisterData({...registerData , username:e.target.value})}/>
                            <Form.Control type="email" placeholder="name@example.com" value={registerData.email} onChange={(e)=>setRegisterData({...registerData, email:e.target.value})}/>
                            <Form.Control type="password" placeholder="name@1234" value={registerData.password} onChange={(e)=>setRegisterData({...registerData, password:e.target.value})}/>
                            <Button type="submit">Register</Button>
                        </Stack>
                            
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    )
}
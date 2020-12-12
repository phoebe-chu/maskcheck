import React, { useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import axios from 'axios';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login,setLogin]=useState({
    email:"",
    password:""
  });
  const history = useHistory();


  useEffect(() => {
    // get the login based on entered email
    axios
    .get('http://localhost:8082/api/login/'+email)
    .then(res => {
      setLogin(res.data)
      })
    .catch(err =>{
      console.log('Error from Login');
    })
  });
  

  function validateForm() {
    return email.length > 0 && password.length > 0; 
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    if(login.length>0){
      //<Link to={"/log"}></Link>
      if(email===login[0].email && password===login[0].password)
      {
        history.push('/log');
      }
    }
    else{
      alert("Invalid username or password");
    }
  }

  return (
    <div className="loginbg">
    <Container>
        <Row>
            <Col></Col>
            <Col>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="Login">
                <br></br>
                <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    autoFocus
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </Form.Group>
            
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                Login
                </Button>
                
                </Form>
                <br></br>
                </div>
            </Col>
      
      </Row>
      </Container>
      </div>
  );
}
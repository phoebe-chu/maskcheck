import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from './maskchecklogo.svg';
import ShowLogTable from './components/ShowLogTable';
import Login from './Login';
import Home from './Home';


//import './App.css';

class App extends Component {
 
  render() {
   
    return (
     <Router>
       <div>
        <header>
        <Navbar bg="light">
      <Container>
        <Navbar.Brand href="#home">
        {/* <Link to={"/"}>   */}
          <img
            src={logo}
            width="150"
            height="30"
            className="d-inline-block align-top"
            alt="MaskCheck logo"
          />
        {/* </Link> */}
        </Navbar.Brand>
        
        <Nav className="justify-content-end">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
        </Nav>
      </Container>
    
      </Navbar>
      </header>
      <main>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/log' component={ShowLogTable} />
          <Route path='/login' component={Login} />
        </div>
        </main>
        </div>
      </Router>
    );
  }
}

export default App;
import React, { Component } from 'react';
import axios from 'axios';
import Container from "react-bootstrap/Container";
import Table from 'react-bootstrap/Table';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//import '../App.css';
import LogRow from './LogRow';


class ShowLogTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
        logrows: []
    };
  }


  // componentDidMount() {
  //   axios
  //     .get('http://localhost:8082/api/logrows')
  //     .then(res => {
  //       this.interval=setInterval(()=>this.setState({
  //           logrows: res.data
  //       }),1000);
  //     })
  //     .catch(err =>{
  //       console.log('Error from ShowLogTable');
  //     })
  // };
  // componentWillUnmount(){
  //   clearInterval(this.interval);
  // }

  componentDidMount() {
    this.interval=setInterval(()=>
    axios
      .get('http://localhost:8082/api/logrows')
      .then(res => {
        this.setState({
              logrows: res.data
            })
        })
      .catch(err =>{
        console.log('Error from ShowLogTable');
      }),1000);
  };
  componentWillUnmount(){
    clearInterval(this.interval);
  }


  render() {
    const logrows = this.state.logrows;
    console.log("PrintLogRow: " + logrows);
    let logTable;

    if(!logrows) {
      logTable = "there is no logrow record!";
    } else {
      logTable = logrows.map((logrow, k) =>
        <LogRow logrow={logrow} key={k} />
      );
    }

    return (
      <Container>
        <br></br>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Time</th>
                <th>Result</th>
                <th>Photo</th>
                </tr>
            </thead>
            <tbody>
            {logTable}
            </tbody>
        </Table>
       </Container>
      
                
       
    );
  }
}

export default ShowLogTable;
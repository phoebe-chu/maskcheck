import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./LogRow.css";
import '../App.css';

const LogRow = (props) => {
    const  logrow  = props.logrow;
    console.log(props.logrow);
    return(
        <tr className="tr">
            <td>{logrow.time}</td>
            <td>{logrow.result}</td>
            {/* <td><Image src={logrow.photoLoc} fluid/></td> */}
            <td ><Container><img src={'./Photos/'+(logrow.photoname)} alt="snapshot"/></Container></td>
        </tr>
    )
};

export default LogRow;
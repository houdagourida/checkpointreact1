import React from 'react';
import {  Form, Row } from 'react-bootstrap';
import './Fulename.css';
const Fulrname = () => {
    return (
        <div className="adress">
              <Form>
                 <Row>
                       <Form.Control placeholder="Name:  Gourida Houda" className="Name" />
                       <Form.Control placeholder="Adress:houdagourida@gmail.com " className="Name" />
                 </Row>
              </Form>
        </div>
    )
}

export default Fulrname
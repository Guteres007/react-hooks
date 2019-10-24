import React from 'react';

import './App.css';
import List from "./List";
import { Container,Row,Col } from 'react-bootstrap';

function Todo() {
    return (

        <Container>
            <Row>
                <Col xs={12} md={12}>
                    <h1>Todo</h1>
                </Col>
                <Col xs={12} md={12}>
                    <List/>
                </Col>
            </Row>
        </Container>
    );
}

export default Todo;
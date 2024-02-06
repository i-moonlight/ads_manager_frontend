import React, { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import BasicToDo from '../../../components/To-Do/BasicToDo';
import CardToDo from '../../../components/To-Do/CardToDo';
import ModalToDo from '../../../components/To-Do/ModalToDo';

import axios from '../../../utils/axios';

const ToDo = () => {
    const [cardTodo, setCardTodo] = useState([]);
    const [basicTodo, setBasicTodo] = useState([]);
    const [modalTodo, setModalTodo] = useState([]);

    const getCardTodo = async () => {
        const response = await axios.get('/api/todo/card');
        setCardTodo(response.data.cardTodo);
    };

    const getBasicTodo = async () => {
        const response = await axios.get('/api/todo/basic');
        setBasicTodo(response.data.basicTodo);
    };

    const getModalTodo = async () => {
        const response = await axios.get('/api/todo/modal');
        setModalTodo(response.data.modalTodo);
    };

    useEffect(() => {
        getCardTodo();
        getBasicTodo();
        getModalTodo();
    }, []);

    return (
        <React.Fragment>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">To Do Card List</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <CardToDo todoList={cardTodo} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">To Do List</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <BasicToDo todoList={basicTodo} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">To Do List in Modal</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ModalToDo todoList={modalTodo} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};
export default ToDo;

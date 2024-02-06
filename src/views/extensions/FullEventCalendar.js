import React, { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interaction from '@fullcalendar/interaction';
import timeGrid from '@fullcalendar/timegrid';

import ModuleNotification from '../../components/Widgets/Statistic/Notification';
import axios from '../../utils/axios';

const randomDate = () => {
    const date = new Date();
    const start = new Date(date.getFullYear(), date.getMonth(), 1);
    const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const FullEventCalendar = () => {
    const [event, setEvent] = useState([]);

    const getEvent = async () => {
        const response = await axios.get('/api/calendar/events');
        setEvent(response.data.events);
    };

    useEffect(() => {
        getEvent();
    }, []);

    const head = {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
    };

    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://fullcalendar.io/docs/react"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Full Calendar</Card.Title>
                        </Card.Header>
                        <Card.Body className="calendar">
                            <FullCalendar
                                defaultView="dayGridMonth"
                                header={head}
                                editable={true}
                                defaultDate={randomDate()}
                                droppable={true}
                                events={event}
                                plugins={[dayGridPlugin, interaction, timeGrid]}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default FullEventCalendar;

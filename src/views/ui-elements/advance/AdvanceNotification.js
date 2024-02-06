import React, { useState } from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import chroma from 'chroma-js';
import Select from 'react-select';

import Notifications from '../../../components/Notifications/BasicNotifications';
import ModuleNotification from '../../../components/Widgets/Statistic/Notification';

const colourOptions = [
    { value: 'inverse', label: 'Inverse', color: '#333' },
    { value: 'primary', label: 'Primary', color: '#04a9f5' },
    { value: 'info', label: 'Info', color: '#3ebfea' },
    { value: 'success', label: 'Success', color: '#1de9b6' },
    { value: 'warning', label: 'Warning', color: '#f4c22b' },
    { value: 'danger', label: 'Danger', color: '#f44236' },
    { value: 'dark', label: 'Dark', color: '#c7cbce' },
    { value: 'light', label: 'Light', color: '#f2f2f2' }
];

const potionOption = [
    { value: 'top-left', label: 'Top Left' },
    { value: 'top-right', label: 'Top Right' },
    { value: 'top-center', label: 'Top Center' },
    { value: 'bottom-left', label: 'Bottom Left' },
    { value: 'bottom-right', label: 'Bottom Right' },
    { value: 'bottom-center', label: 'Bottom Center' }
];

const dot = (color = '#ccc') => ({
    alignItems: 'center',
    display: 'flex',

    ':before': {
        backgroundColor: color,
        borderRadius: 10,
        content: '" "',
        display: 'block',
        marginRight: 8,
        height: 10,
        width: 10
    }
});

const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: isDisabled ? null : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : null,
            color: isDisabled ? '#ccc' : isSelected ? (chroma.contrast(color, 'white') > 2 ? 'white' : 'black') : data.color,
            cursor: isDisabled ? 'not-allowed' : 'default'
        };
    },
    input: (styles) => ({ ...styles, ...dot() }),
    placeholder: (styles) => ({ ...styles, ...dot() }),
    singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) })
};

const AdvanceNotification = () => {
    const [variant, setVariant] = useState('inverse');
    const [placement, setPlacement] = useState('top-right');
    const [autoDismiss, setAutoDismiss] = useState(true);
    const [message, setMessage] = useState('Bootstrap Growl Turning standard Bootstrap alerts into awesome notification');

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://www.npmjs.com/package/react-toast-notifications"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Growl Notification</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row className="justify-content-md-center">
                                <Col sm={12} md={7}>
                                    <Form.Group controlId="formPosition">
                                        <Form.Label>Position Variant</Form.Label>
                                        <Select
                                            defaultValue={potionOption[1]}
                                            label="Select Position"
                                            options={potionOption}
                                            onChange={({ value }) => setPlacement(value)}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formColor">
                                        <Form.Label>Color Variant</Form.Label>
                                        <Select
                                            defaultValue={colourOptions[0]}
                                            label="Select Variant"
                                            options={colourOptions}
                                            styles={colourStyles}
                                            onChange={({ value }) => setVariant(value)}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <div className="switch switch-primary d-inline m-r-10">
                                            <input
                                                type="checkbox"
                                                id="icon-colored"
                                                checked={autoDismiss}
                                                onChange={() => setAutoDismiss((prevState) => !prevState)}
                                            />
                                            <label htmlFor="icon-colored" className="cr" />
                                        </div>
                                        <Form.Label>Auto Dismiss</Form.Label>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows="3" value={message} onChange={handleChange} />
                                    </Form.Group>
                                    <Notifications
                                        notification={{
                                            variant: variant,
                                            placement: placement,
                                            autoDismiss: autoDismiss,
                                            message: message
                                        }}
                                    >
                                        <Button>Add Notification</Button>
                                    </Notifications>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default AdvanceNotification;

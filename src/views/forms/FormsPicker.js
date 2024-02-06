import React from 'react';
import { Row, Col, Card, FormControl, InputGroup } from 'react-bootstrap';
import Datetime from 'react-datetime';
import {
    AlphaPicker,
    BlockPicker,
    ChromePicker,
    CirclePicker,
    CompactPicker,
    GithubPicker,
    HuePicker,
    PhotoshopPicker,
    SketchPicker,
    SwatchesPicker,
    TwitterPicker
} from 'react-color';

import ModuleNotification from '../../components/Widgets/Statistic/Notification';

const FormsPicker = () => {
    const renderInput = (props, openCalendar, closeCalendar) => {
        const clear = () => {
            props.onChange({ target: { value: '' } });
        };

        return (
            <div>
                <InputGroup>
                    <FormControl type="text" {...props} />
                    <InputGroup.Append>
                        <InputGroup.Text onClick={openCalendar} style={{ cursor: 'pointer' }}>
                            <i className="fa fa-calendar text-primary" />
                        </InputGroup.Text>
                        <InputGroup.Text onClick={closeCalendar} style={{ cursor: 'pointer' }}>
                            <i className="fa fa-times text-warning" />
                        </InputGroup.Text>
                        <InputGroup.Text onClick={clear} style={{ cursor: 'pointer' }}>
                            <i className="fa fa-trash-alt text-danger" />
                        </InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        );
    };

    const minDay = Datetime.moment().subtract(5, 'day');
    const valid = (current) => {
        return current.isAfter(minDay);
    };

    const validWeekend = (current) => {
        return current.day() !== 0 && current.day() !== 6;
    };

    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://www.npmjs.com/package/react-datetime"
                    />
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Date Picker</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Datetime timeFormat={false} inputProps={{ placeholder: 'Select Date' }} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Time Picker</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Datetime dateFormat={false} inputProps={{ placeholder: 'Select Time' }} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Datetime Picker</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Datetime dateFormat="dddd D MMMM Y -" inputProps={{ placeholder: 'Select Date & Time' }} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Min Date Set</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Datetime isValidDate={valid} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Disable Weekend</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Datetime isValidDate={validWeekend} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Input Appearance</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Datetime renderInput={renderInput} />
                        </Card.Body>
                    </Card>
                </Col>

                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://www.npmjs.com/package/react-color"
                    />
                </Col>

                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Alpha Picker</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AlphaPicker />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Hue Picker</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <HuePicker />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Twitter Picker</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <TwitterPicker />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Circle Picker</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <CirclePicker />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Compact Picker</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <CompactPicker />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Github Picker</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <GithubPicker />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Block Picker</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <BlockPicker />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Block Picker</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ChromePicker />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Sketch Picker</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SketchPicker />
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Photoshop Picker</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <PhotoshopPicker />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Swatches Picker</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SwatchesPicker />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default FormsPicker;

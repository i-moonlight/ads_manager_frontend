import React from 'react';
import { Row, Col, Card, Form } from 'react-bootstrap';
import InputMask from 'react-input-mask';
import NumberFormat from 'react-number-format';

import ModuleNotification from '../../components/Widgets/Statistic/Notification';

const FormsMasking = () => {
    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://www.npmjs.com/package/react-input-mask"
                    />
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Date</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group as={Row} controlId="formDate1">
                                <Form.Label column sm={3}>
                                    Insert Date 1
                                </Form.Label>
                                <Col sm={9}>
                                    <InputMask className="form-control" mask="99/99/9999" placeholder="dd/mm/yyyy" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formDate2">
                                <Form.Label column sm={3}>
                                    Insert Date 2
                                </Form.Label>
                                <Col sm={9}>
                                    <InputMask className="form-control" mask="99-99-9999" placeholder="dd-mm-yyyy" />
                                </Col>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Time</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group as={Row} controlId="formHour">
                                <Form.Label column sm={3}>
                                    Hour
                                </Form.Label>
                                <Col sm={9}>
                                    <InputMask className="form-control" mask="99:99:99" placeholder="hh:mm:ss" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formDateHour">
                                <Form.Label column sm={3}>
                                    Date & Hour
                                </Form.Label>
                                <Col sm={9}>
                                    <InputMask className="form-control" mask="99/99/9999 99:99:99" placeholder="dd/mm/yyyy hh:mm:ss" />
                                </Col>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Phone No.</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group as={Row} controlId="formMobileNo">
                                <Form.Label column sm={3}>
                                    Mobile No.
                                </Form.Label>
                                <Col sm={9}>
                                    <InputMask className="form-control" mask="9999-999-999" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formTelephone">
                                <Form.Label column sm={3}>
                                    Telephone
                                </Form.Label>
                                <Col sm={9}>
                                    <InputMask className="form-control" mask="9999-9999" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formTelephoneAreaCode">
                                <Form.Label column sm={3}>
                                    Tel. with Area Code
                                </Form.Label>
                                <Col sm={9}>
                                    <InputMask className="form-control" mask="(99) 9999-9999" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formUsTelephone">
                                <Form.Label column sm={3}>
                                    US Telephone
                                </Form.Label>
                                <Col sm={9}>
                                    <InputMask className="form-control" mask="(999) 999-9999" />
                                </Col>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Network</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group as={Row} controlId="formMobileNo">
                                <Form.Label column sm={3}>
                                    IP Address
                                </Form.Label>
                                <Col sm={9}>
                                    <InputMask className="form-control" mask="999.999.999.999" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formTelephone">
                                <Form.Label column sm={3}>
                                    IPV4
                                </Form.Label>
                                <Col sm={9}>
                                    <InputMask className="form-control" mask="999.999.999.9999" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formTelephoneAreaCode">
                                <Form.Label column sm={3}>
                                    IPV6
                                </Form.Label>
                                <Col sm={9}>
                                    <InputMask className="form-control" mask="9999.9999.9999.9.999.9999.9999.9999" />
                                </Col>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://www.npmjs.com/package/react-number-format"
                    />
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Numbers</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group as={Row} controlId="formDefault">
                                <Form.Label column sm={3}>
                                    Default
                                </Form.Label>
                                <Col sm={9}>
                                    <NumberFormat className="form-control" thousandSeparator={true} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formAutoNumeric">
                                <Form.Label column sm={3}>
                                    Auto Numeric (%)
                                </Form.Label>
                                <Col sm={9}>
                                    <NumberFormat className="form-control" thousandSeparator={true} suffix="%" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formMaxVal">
                                <Form.Label column sm={3}>
                                    Maximum Value (0 - 9999)
                                </Form.Label>
                                <Col sm={9}>
                                    <NumberFormat className="form-control" format="####" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formNegative">
                                <Form.Label column sm={3}>
                                    Allow Negative
                                </Form.Label>
                                <Col sm={9}>
                                    <NumberFormat className="form-control" allowNegative />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formLakh">
                                <Form.Label column sm={3}>
                                    Group Style - Lakh
                                </Form.Label>
                                <Col sm={9}>
                                    <NumberFormat className="form-control" thousandSeparator thousandsGroupStyle="lakh" />
                                </Col>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Currency</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group as={Row} controlId="formDollar">
                                <Form.Label column sm={3}>
                                    Dollar ($)
                                </Form.Label>
                                <Col sm={9}>
                                    <NumberFormat className="form-control" thousandSeparator prefix="$ " />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formEuro">
                                <Form.Label column sm={3}>
                                    Euro (€)
                                </Form.Label>
                                <Col sm={9}>
                                    <NumberFormat className="form-control" thousandSeparator prefix="€ " />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formRupee">
                                <Form.Label column sm={3}>
                                    Rupee (₹)
                                </Form.Label>
                                <Col sm={9}>
                                    <NumberFormat className="form-control" thousandSeparator prefix="₹ " suffix=" /-" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formRenminbi">
                                <Form.Label column sm={3}>
                                    Renminbi (¥)
                                </Form.Label>
                                <Col sm={9}>
                                    <NumberFormat className="form-control" thousandSeparator prefix="¥ " />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPound">
                                <Form.Label column sm={3}>
                                    Pound (£)
                                </Form.Label>
                                <Col sm={9}>
                                    <NumberFormat className="form-control" thousandSeparator prefix="£ " />
                                </Col>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default FormsMasking;

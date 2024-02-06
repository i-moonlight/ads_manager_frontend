import React, { useState } from 'react';
import { Row, Col, Card, Form } from 'react-bootstrap';
import ReactTags from 'react-tag-autocomplete';
import ModuleNotification from '../../components/Widgets/Statistic/Notification';

const FormsAdvance = () => {
    const [defaultSwitch, setDefaultSwitch] = useState(true);
    const [tags, setTags] = useState([
        { id: 1, name: 'Washington' },
        { id: 2, name: 'Sydney' },
        { id: 3, name: 'Beijing' }
    ]);
    const [tagsSuggestions, setTagsSuggestions] = useState([
        { id: 1, name: 'Amsterdam' },
        { id: 2, name: 'Washington' },
        { id: 3, name: 'Los Angeles' }
    ]);
    const [suggestions] = useState([
        { id: 1, name: 'Amsterdam' },
        { id: 2, name: 'Beijing' },
        { id: 3, name: 'Cairo' },
        { id: 4, name: 'Los Angeles' },
        { id: 5, name: 'Sydney' },
        { id: 6, name: 'Washington' }
    ]);

    const toggleHandler = () => {
        setDefaultSwitch((prevState) => !prevState);
    };

    const handleDelete = (i, states) => {
        const newTags = tags.slice(0);
        newTags.splice(i, 1);
        setTags(newTags);
    };

    const handleAddition = (tag, state) => {
        const newTags = [].concat(tags, tag);
        setTags(newTags);
    };

    const handleSuggestionsDelete = (i, states) => {
        const newTags = tagsSuggestions.slice(0);
        newTags.splice(i, 1);
        setTagsSuggestions(newTags);
    };

    const handleSuggestionsAddition = (tag, state) => {
        const newTags = [].concat(tagsSuggestions, tag);
        setTagsSuggestions(newTags);
    };

    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://www.npmjs.com/package/react-tag-autocomplete"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Switches</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xl={3} md={6}>
                                    <h5>Default Switch</h5>
                                    <hr />
                                    <Form.Group>
                                        <div className="switch d-inline m-r-10">
                                            <Form.Control
                                                type="checkbox"
                                                id="checked-default"
                                                defaultChecked={defaultSwitch}
                                                onChange={() => toggleHandler}
                                            />
                                            <Form.Label htmlFor="checked-default" className="cr" />
                                        </div>
                                        <Form.Label>Checked</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch d-inline m-r-10">
                                            <Form.Control
                                                type="checkbox"
                                                id="unchecked-default"
                                                defaultChecked={!defaultSwitch}
                                                onChange={() => toggleHandler}
                                            />
                                            <Form.Label htmlFor="unchecked-default" className="cr" />
                                        </div>
                                        <Form.Label>Uncheck</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch d-inline m-r-10">
                                            <Form.Control
                                                type="checkbox"
                                                id="checked-disabled-default"
                                                disabled
                                                defaultChecked={defaultSwitch}
                                            />
                                            <Form.Label htmlFor="checked-disabled-default" className="cr" />
                                        </div>
                                        <Form.Label>Disabled</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch d-inline m-r-10">
                                            <Form.Control
                                                type="checkbox"
                                                id="unchecked-disabled-default"
                                                disabled
                                                defaultChecked={!defaultSwitch}
                                            />
                                            <Form.Label htmlFor="unchecked-disabled-default" className="cr" />
                                        </div>
                                        <Form.Label>Disabled Checked</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col xl={3} md={6}>
                                    <h5>Alternative Switch</h5>
                                    <hr />
                                    <Form.Group>
                                        <div className="switch switch-alternative d-inline m-r-10">
                                            <Form.Control
                                                type="checkbox"
                                                id="checked-alternative"
                                                defaultChecked={defaultSwitch}
                                                onChange={() => toggleHandler}
                                            />
                                            <Form.Label htmlFor="checked-alternative" className="cr" />
                                        </div>
                                        <Form.Label>Checked</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-alternative d-inline m-r-10">
                                            <Form.Control
                                                type="checkbox"
                                                id="unchecked-alternative"
                                                defaultChecked={!defaultSwitch}
                                                onChange={() => toggleHandler}
                                            />
                                            <Form.Label htmlFor="unchecked-alternative" className="cr" />
                                        </div>
                                        <Form.Label>Uncheck</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-alternative d-inline m-r-10">
                                            <Form.Control
                                                type="checkbox"
                                                id="checked-disabled-alternative"
                                                disabled
                                                defaultChecked={defaultSwitch}
                                            />
                                            <Form.Label htmlFor="checked-disabled-alternative" className="cr" />
                                        </div>
                                        <Form.Label>Disabled</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-alternative d-inline m-r-10">
                                            <Form.Control
                                                type="checkbox"
                                                id="unchecked-disabled-alternative"
                                                disabled
                                                defaultChecked={!defaultSwitch}
                                            />
                                            <Form.Label htmlFor="unchecked-disabled-alternative" className="cr" />
                                        </div>
                                        <Form.Label>Disabled Checked</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col xl={3} md={6}>
                                    <h5>Primary Switch</h5>
                                    <hr />
                                    <Form.Group>
                                        <div className="switch switch-primary d-inline m-r-10">
                                            <Form.Control
                                                type="checkbox"
                                                id="checked-primary"
                                                defaultChecked={defaultSwitch}
                                                onChange={() => toggleHandler}
                                            />
                                            <Form.Label htmlFor="checked-primary" className="cr" />
                                        </div>
                                        <Form.Label>Checked</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-primary d-inline m-r-10">
                                            <Form.Control
                                                type="checkbox"
                                                id="unchecked-primary"
                                                defaultChecked={!defaultSwitch}
                                                onChange={() => toggleHandler}
                                            />
                                            <Form.Label htmlFor="unchecked-primary" className="cr" />
                                        </div>
                                        <Form.Label>Uncheck</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-primary d-inline m-r-10">
                                            <Form.Control
                                                type="checkbox"
                                                id="checked-disabled-primary"
                                                disabled
                                                defaultChecked={defaultSwitch}
                                            />
                                            <Form.Label htmlFor="checked-disabled-primary" className="cr" />
                                        </div>
                                        <Form.Label>Disabled</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-primary d-inline m-r-10">
                                            <Form.Control
                                                type="checkbox"
                                                id="unchecked-disabled-primary"
                                                disabled
                                                defaultChecked={!defaultSwitch}
                                            />
                                            <Form.Label htmlFor="unchecked-disabled-primary" className="cr" />
                                        </div>
                                        <Form.Label>Disabled Checked</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col xl={3} md={6}>
                                    <h5>Danger Switch</h5>
                                    <hr />
                                    <Form.Group>
                                        <div className="switch switch-danger d-inline m-r-10">
                                            <Form.Control
                                                type="checkbox"
                                                id="checked-danger"
                                                defaultChecked={defaultSwitch}
                                                onChange={() => toggleHandler}
                                            />
                                            <Form.Label htmlFor="checked-danger" className="cr" />
                                        </div>
                                        <Form.Label>Checked</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-danger d-inline m-r-10">
                                            <Form.Control
                                                type="checkbox"
                                                id="unchecked-danger"
                                                defaultChecked={!defaultSwitch}
                                                onChange={() => toggleHandler}
                                            />
                                            <Form.Label htmlFor="unchecked-danger" className="cr" />
                                        </div>
                                        <Form.Label>Uncheck</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-danger d-inline m-r-10">
                                            <Form.Control
                                                type="checkbox"
                                                id="checked-disabled-danger"
                                                disabled
                                                defaultChecked={defaultSwitch}
                                            />
                                            <Form.Label htmlFor="checked-disabled-danger" className="cr" />
                                        </div>
                                        <Form.Label>Disabled</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-danger d-inline m-r-10">
                                            <Form.Control
                                                type="checkbox"
                                                id="unchecked-disabled-danger"
                                                disabled
                                                defaultChecked={!defaultSwitch}
                                            />
                                            <Form.Label htmlFor="unchecked-disabled-danger" className="cr" />
                                        </div>
                                        <Form.Label>Disabled Checked</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col xl={3} md={6}>
                                    <h5>Success Switch</h5>
                                    <hr />
                                    <Form.Group>
                                        <div className="switch switch-success d-inline m-r-10">
                                            <Form.Control
                                                type="checkbox"
                                                id="checked-success"
                                                defaultChecked={defaultSwitch}
                                                onChange={() => toggleHandler}
                                            />
                                            <Form.Label htmlFor="checked-success" className="cr" />
                                        </div>
                                        <Form.Label>Checked</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-success d-inline m-r-10">
                                            <Form.Control
                                                type="checkbox"
                                                id="unchecked-success"
                                                defaultChecked={!defaultSwitch}
                                                onChange={() => toggleHandler}
                                            />
                                            <Form.Label htmlFor="unchecked-success" className="cr" />
                                        </div>
                                        <Form.Label>Uncheck</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-success d-inline m-r-10">
                                            <Form.Control
                                                type="checkbox"
                                                id="checked-disabled-success"
                                                disabled
                                                defaultChecked={defaultSwitch}
                                            />
                                            <Form.Label htmlFor="checked-disabled-success" className="cr" />
                                        </div>
                                        <Form.Label>Disabled</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-success d-inline m-r-10">
                                            <Form.Control
                                                type="checkbox"
                                                id="unchecked-disabled-success"
                                                disabled
                                                defaultChecked={!defaultSwitch}
                                            />
                                            <Form.Label htmlFor="unchecked-disabled-success" className="cr" />
                                        </div>
                                        <Form.Label>Disabled Checked</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col xl={3} md={6}>
                                    <h5>Warning Switch</h5>
                                    <hr />
                                    <Form.Group>
                                        <div className="switch switch-warning d-inline m-r-10">
                                            <Form.Control
                                                type="checkbox"
                                                id="checked-warning"
                                                defaultChecked={defaultSwitch}
                                                onChange={() => toggleHandler}
                                            />
                                            <Form.Label htmlFor="checked-warning" className="cr" />
                                        </div>
                                        <Form.Label>Checked</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-warning d-inline m-r-10">
                                            <Form.Control
                                                type="checkbox"
                                                id="unchecked-warning"
                                                defaultChecked={!defaultSwitch}
                                                onChange={() => toggleHandler}
                                            />
                                            <Form.Label htmlFor="unchecked-warning" className="cr" />
                                        </div>
                                        <Form.Label>Uncheck</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-warning d-inline m-r-10">
                                            <Form.Control
                                                type="checkbox"
                                                id="checked-disabled-warning"
                                                disabled
                                                defaultChecked={defaultSwitch}
                                            />
                                            <Form.Label htmlFor="checked-disabled-warning" className="cr" />
                                        </div>
                                        <Form.Label>Disabled</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-warning d-inline m-r-10">
                                            <Form.Control
                                                type="checkbox"
                                                id="unchecked-disabled-warning"
                                                disabled
                                                defaultChecked={!defaultSwitch}
                                            />
                                            <Form.Label htmlFor="unchecked-disabled-warning" className="cr" />
                                        </div>
                                        <Form.Label>Disabled Checked</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col xl={3} md={6}>
                                    <h5>Info Switch</h5>
                                    <hr />
                                    <Form.Group>
                                        <div className="switch switch-info d-inline m-r-10">
                                            <Form.Control
                                                type="checkbox"
                                                id="checked-info"
                                                defaultChecked={defaultSwitch}
                                                onChange={() => toggleHandler}
                                            />
                                            <Form.Label htmlFor="checked-info" className="cr" />
                                        </div>
                                        <Form.Label>Checked</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-info d-inline m-r-10">
                                            <Form.Control
                                                type="checkbox"
                                                id="unchecked-info"
                                                defaultChecked={!defaultSwitch}
                                                onChange={() => toggleHandler}
                                            />
                                            <Form.Label htmlFor="unchecked-info" className="cr" />
                                        </div>
                                        <Form.Label>Uncheck</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-info d-inline m-r-10">
                                            <Form.Control
                                                type="checkbox"
                                                id="checked-disabled-info"
                                                disabled
                                                defaultChecked={defaultSwitch}
                                            />
                                            <Form.Label htmlFor="checked-disabled-info" className="cr" />
                                        </div>
                                        <Form.Label>Disabled</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="switch switch-info d-inline m-r-10">
                                            <Form.Control
                                                type="checkbox"
                                                id="unchecked-disabled-info"
                                                disabled
                                                defaultChecked={!defaultSwitch}
                                            />
                                            <Form.Label htmlFor="unchecked-disabled-info" className="cr" />
                                        </div>
                                        <Form.Label>Disabled Checked</Form.Label>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Radio</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={6} xl={4} className="mb-5">
                                    <h5>Default Radio</h5>
                                    <hr />
                                    <Form.Group>
                                        <div className="radio d-inline">
                                            <Form.Control type="radio" name="radio-1" id="radio-1" defaultChecked={true} />
                                            <Form.Label htmlFor="radio-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline">
                                            <Form.Control type="radio" name="radio-1" id="radio-2" defaultChecked={false} />
                                            <Form.Label htmlFor="radio-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline">
                                            <Form.Control type="radio" id="radio-3" disabled />
                                            <Form.Label htmlFor="radio-3" className="cr">
                                                Disabled
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline">
                                            <Form.Control type="radio" id="radio-4" disabled defaultChecked={true} />
                                            <Form.Label htmlFor="radio-4" className="cr">
                                                Disabled Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Radio Fill Button</h6>
                                    <hr />
                                    <Form.Group>
                                        <div className="radio d-inline radio-fill">
                                            <Form.Control type="radio" name="radio-fill-1" id="radio-fill-1" defaultChecked={true} />
                                            <Form.Label htmlFor="radio-fill-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-fill">
                                            <Form.Control type="radio" name="radio-fill-1" id="radio-fill-2" defaultChecked={false} />
                                            <Form.Label htmlFor="radio-fill-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-fill">
                                            <Form.Control type="radio" id="radio-fill-3" disabled />
                                            <Form.Label htmlFor="radio-fill-3" className="cr">
                                                Disabled
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-fill">
                                            <Form.Control type="radio" id="radio-fill-4" disabled defaultChecked={true} />
                                            <Form.Label htmlFor="radio-fill-4" className="cr">
                                                Disabled Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Inline Button</h6>
                                    <hr />
                                    <Form.Group className="d-inline">
                                        <div className="radio d-inline">
                                            <Form.Control type="radio" name="radio-inline-1" id="radio-in-1" defaultChecked={true} />
                                            <Form.Label htmlFor="radio-in-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="d-inline">
                                        <div className="radio d-inline">
                                            <Form.Control type="radio" name="radio-inline-1" id="radio-in-2" defaultChecked={false} />
                                            <Form.Label htmlFor="radio-in-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Inline Fill Button</h6>
                                    <hr />
                                    <Form.Group className="d-inline">
                                        <div className="radio d-inline radio-fill">
                                            <Form.Control
                                                type="radio"
                                                name="radio-inline-fill-1"
                                                id="radio-in-fill-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="radio-in-fill-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="d-inline">
                                        <div className="radio d-inline radio-fill">
                                            <Form.Control
                                                type="radio"
                                                name="radio-inline-fill-1"
                                                id="radio-in-fill-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="radio-in-fill-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col md={6} xl={4} className="mb-5">
                                    <h5>Primary Radio</h5>
                                    <hr />
                                    <Form.Group>
                                        <div className="radio d-inline radio-primary">
                                            <Form.Control type="radio" name="primary-radio-1" id="primary-radio-1" defaultChecked={true} />
                                            <Form.Label htmlFor="primary-radio-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-primary">
                                            <Form.Control type="radio" name="primary-radio-1" id="primary-radio-2" defaultChecked={false} />
                                            <Form.Label htmlFor="primary-radio-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-primary">
                                            <Form.Control type="radio" id="primary-radio-3" disabled />
                                            <Form.Label htmlFor="primary-radio-3" className="cr">
                                                Disabled
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-primary">
                                            <Form.Control type="radio" id="primary-radio-4" disabled defaultChecked={true} />
                                            <Form.Label htmlFor="primary-radio-4" className="cr">
                                                Disabled Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Radio Fill Button</h6>
                                    <hr />
                                    <Form.Group>
                                        <div className="radio d-inline radio-fill radio-primary">
                                            <Form.Control
                                                type="radio"
                                                name="primary-radio-fill-1"
                                                id="primary-radio-fill-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="primary-radio-fill-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-fill radio-primary">
                                            <Form.Control
                                                type="radio"
                                                name="primary-radio-fill-1"
                                                id="primary-radio-fill-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="primary-radio-fill-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-fill radio-primary">
                                            <Form.Control type="radio" id="primary-radio-fill-3" disabled />
                                            <Form.Label htmlFor="primary-radio-fill-3" className="cr">
                                                Disabled
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-fill radio-primary">
                                            <Form.Control type="radio" id="primary-radio-fill-4" disabled defaultChecked={true} />
                                            <Form.Label htmlFor="primary-radio-fill-4" className="cr">
                                                Disabled Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Inline Button</h6>
                                    <hr />
                                    <Form.Group className="d-inline">
                                        <div className="radio d-inline radio-primary">
                                            <Form.Control
                                                type="radio"
                                                name="primary-radio-inline-1"
                                                id="primary-radio-in-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="primary-radio-in-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="d-inline">
                                        <div className="radio d-inline radio-primary">
                                            <Form.Control
                                                type="radio"
                                                name="primary-radio-inline-1"
                                                id="primary-radio-in-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="primary-radio-in-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Inline Fill Button</h6>
                                    <hr />
                                    <Form.Group className="d-inline">
                                        <div className="radio d-inline radio-fill radio-primary">
                                            <Form.Control
                                                type="radio"
                                                name="primary-radio-inline-fill-1"
                                                id="primary-radio-in-fill-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="primary-radio-in-fill-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="d-inline">
                                        <div className="radio d-inline radio-fill radio-primary">
                                            <Form.Control
                                                type="radio"
                                                name="primary-radio-inline-fill-1"
                                                id="primary-radio-in-fill-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="primary-radio-in-fill-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col md={6} xl={4} className="mb-5">
                                    <h5>Danger Radio</h5>
                                    <hr />
                                    <Form.Group>
                                        <div className="radio d-inline radio-danger">
                                            <Form.Control type="radio" name="danger-radio-1" id="danger-radio-1" defaultChecked={true} />
                                            <Form.Label htmlFor="danger-radio-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-danger">
                                            <Form.Control type="radio" name="danger-radio-1" id="danger-radio-2" defaultChecked={false} />
                                            <Form.Label htmlFor="danger-radio-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-danger">
                                            <Form.Control type="radio" id="danger-radio-3" disabled />
                                            <Form.Label htmlFor="danger-radio-3" className="cr">
                                                Disabled
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-danger">
                                            <Form.Control type="radio" id="danger-radio-4" disabled defaultChecked={true} />
                                            <Form.Label htmlFor="danger-radio-4" className="cr">
                                                Disabled Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Radio Fill Button</h6>
                                    <hr />
                                    <Form.Group>
                                        <div className="radio d-inline radio-fill radio-danger">
                                            <Form.Control
                                                type="radio"
                                                name="danger-radio-fill-1"
                                                id="danger-radio-fill-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="danger-radio-fill-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-fill radio-danger">
                                            <Form.Control
                                                type="radio"
                                                name="danger-radio-fill-1"
                                                id="danger-radio-fill-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="danger-radio-fill-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-fill radio-danger">
                                            <Form.Control type="radio" id="danger-radio-fill-3" disabled />
                                            <Form.Label htmlFor="danger-radio-fill-3" className="cr">
                                                Disabled
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-fill radio-danger">
                                            <Form.Control type="radio" id="danger-radio-fill-4" disabled defaultChecked={true} />
                                            <Form.Label htmlFor="danger-radio-fill-4" className="cr">
                                                Disabled Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Inline Button</h6>
                                    <hr />
                                    <Form.Group className="d-inline">
                                        <div className="radio d-inline radio-danger">
                                            <Form.Control
                                                type="radio"
                                                name="danger-radio-inline-1"
                                                id="danger-radio-in-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="danger-radio-in-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="d-inline">
                                        <div className="radio d-inline radio-danger">
                                            <Form.Control
                                                type="radio"
                                                name="danger-radio-inline-1"
                                                id="danger-radio-in-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="danger-radio-in-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Inline Fill Button</h6>
                                    <hr />
                                    <Form.Group className="d-inline">
                                        <div className="radio d-inline radio-fill radio-danger">
                                            <Form.Control
                                                type="radio"
                                                name="danger-radio-inline-fill-1"
                                                id="danger-radio-in-fill-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="danger-radio-in-fill-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="d-inline">
                                        <div className="radio d-inline radio-fill radio-danger">
                                            <Form.Control
                                                type="radio"
                                                name="danger-radio-inline-fill-1"
                                                id="danger-radio-in-fill-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="danger-radio-in-fill-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col md={6} xl={4} className="mb-5">
                                    <h5>Success Radio</h5>
                                    <hr />
                                    <Form.Group>
                                        <div className="radio d-inline radio-success">
                                            <Form.Control type="radio" name="success-radio-1" id="success-radio-1" defaultChecked={true} />
                                            <Form.Label htmlFor="success-radio-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-success">
                                            <Form.Control type="radio" name="success-radio-1" id="success-radio-2" defaultChecked={false} />
                                            <Form.Label htmlFor="success-radio-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-success">
                                            <Form.Control type="radio" id="success-radio-3" disabled />
                                            <Form.Label htmlFor="success-radio-3" className="cr">
                                                Disabled
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-success">
                                            <Form.Control type="radio" id="success-radio-4" disabled defaultChecked={true} />
                                            <Form.Label htmlFor="success-radio-4" className="cr">
                                                Disabled Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Radio Fill Button</h6>
                                    <hr />
                                    <Form.Group>
                                        <div className="radio d-inline radio-fill radio-success">
                                            <Form.Control
                                                type="radio"
                                                name="success-radio-fill-1"
                                                id="success-radio-fill-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="success-radio-fill-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-fill radio-success">
                                            <Form.Control
                                                type="radio"
                                                name="success-radio-fill-1"
                                                id="success-radio-fill-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="success-radio-fill-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-fill radio-success">
                                            <Form.Control type="radio" id="success-radio-fill-3" disabled />
                                            <Form.Label htmlFor="success-radio-fill-3" className="cr">
                                                Disabled
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-fill radio-success">
                                            <Form.Control type="radio" id="success-radio-fill-4" disabled defaultChecked={true} />
                                            <Form.Label htmlFor="success-radio-fill-4" className="cr">
                                                Disabled Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Inline Button</h6>
                                    <hr />
                                    <Form.Group className="d-inline">
                                        <div className="radio d-inline radio-success">
                                            <Form.Control
                                                type="radio"
                                                name="success-radio-inline-1"
                                                id="success-radio-in-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="success-radio-in-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="d-inline">
                                        <div className="radio d-inline radio-success">
                                            <Form.Control
                                                type="radio"
                                                name="success-radio-inline-1"
                                                id="success-radio-in-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="success-radio-in-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Inline Fill Button</h6>
                                    <hr />
                                    <Form.Group className="d-inline">
                                        <div className="radio d-inline radio-fill radio-success">
                                            <Form.Control
                                                type="radio"
                                                name="success-radio-inline-fill-1"
                                                id="success-radio-in-fill-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="success-radio-in-fill-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="d-inline">
                                        <div className="radio d-inline radio-fill radio-success">
                                            <Form.Control
                                                type="radio"
                                                name="success-radio-inline-fill-1"
                                                id="success-radio-in-fill-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="success-radio-in-fill-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col md={6} xl={4} className="mb-5">
                                    <h5>Warning Radio</h5>
                                    <hr />
                                    <Form.Group>
                                        <div className="radio d-inline radio-warning">
                                            <Form.Control type="radio" name="warning-radio-1" id="warning-radio-1" defaultChecked={true} />
                                            <Form.Label htmlFor="warning-radio-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-warning">
                                            <Form.Control type="radio" name="warning-radio-1" id="warning-radio-2" defaultChecked={false} />
                                            <Form.Label htmlFor="warning-radio-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-warning">
                                            <Form.Control type="radio" id="warning-radio-3" disabled />
                                            <Form.Label htmlFor="warning-radio-3" className="cr">
                                                Disabled
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-warning">
                                            <Form.Control type="radio" id="warning-radio-4" disabled defaultChecked={true} />
                                            <Form.Label htmlFor="warning-radio-4" className="cr">
                                                Disabled Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Radio Fill Button</h6>
                                    <hr />
                                    <Form.Group>
                                        <div className="radio d-inline radio-fill radio-warning">
                                            <Form.Control
                                                type="radio"
                                                name="warning-radio-fill-1"
                                                id="warning-radio-fill-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="warning-radio-fill-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-fill radio-warning">
                                            <Form.Control
                                                type="radio"
                                                name="warning-radio-fill-1"
                                                id="warning-radio-fill-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="warning-radio-fill-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-fill radio-warning">
                                            <Form.Control type="radio" id="warning-radio-fill-3" disabled />
                                            <Form.Label htmlFor="warning-radio-fill-3" className="cr">
                                                Disabled
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-fill radio-warning">
                                            <Form.Control type="radio" id="warning-radio-fill-4" disabled defaultChecked={true} />
                                            <Form.Label htmlFor="warning-radio-fill-4" className="cr">
                                                Disabled Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Inline Button</h6>
                                    <hr />
                                    <Form.Group className="d-inline">
                                        <div className="radio d-inline radio-warning">
                                            <Form.Control
                                                type="radio"
                                                name="warning-radio-inline-1"
                                                id="warning-radio-in-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="warning-radio-in-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="d-inline">
                                        <div className="radio d-inline radio-warning">
                                            <Form.Control
                                                type="radio"
                                                name="warning-radio-inline-1"
                                                id="warning-radio-in-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="warning-radio-in-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Inline Fill Button</h6>
                                    <hr />
                                    <Form.Group className="d-inline">
                                        <div className="radio d-inline radio-fill radio-warning">
                                            <Form.Control
                                                type="radio"
                                                name="warning-radio-inline-fill-1"
                                                id="warning-radio-in-fill-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="warning-radio-in-fill-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="d-inline">
                                        <div className="radio d-inline radio-fill radio-warning">
                                            <Form.Control
                                                type="radio"
                                                name="warning-radio-inline-fill-1"
                                                id="warning-radio-in-fill-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="warning-radio-in-fill-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col md={6} xl={4} className="mb-5">
                                    <h5>Info Radio</h5>
                                    <hr />
                                    <Form.Group>
                                        <div className="radio d-inline radio-info">
                                            <Form.Control type="radio" name="info-radio-1" id="info-radio-1" defaultChecked={true} />
                                            <Form.Label htmlFor="info-radio-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-info">
                                            <Form.Control type="radio" name="info-radio-1" id="info-radio-2" defaultChecked={false} />
                                            <Form.Label htmlFor="info-radio-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-info">
                                            <Form.Control type="radio" id="info-radio-3" disabled />
                                            <Form.Label htmlFor="info-radio-3" className="cr">
                                                Disabled
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-info">
                                            <Form.Control type="radio" id="info-radio-4" disabled defaultChecked={true} />
                                            <Form.Label htmlFor="info-radio-4" className="cr">
                                                Disabled Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Radio Fill Button</h6>
                                    <hr />
                                    <Form.Group>
                                        <div className="radio d-inline radio-fill radio-info">
                                            <Form.Control
                                                type="radio"
                                                name="info-radio-fill-1"
                                                id="info-radio-fill-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="info-radio-fill-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-fill radio-info">
                                            <Form.Control
                                                type="radio"
                                                name="info-radio-fill-1"
                                                id="info-radio-fill-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="info-radio-fill-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-fill radio-info">
                                            <Form.Control type="radio" id="info-radio-fill-3" disabled />
                                            <Form.Label htmlFor="info-radio-fill-3" className="cr">
                                                Disabled
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="radio d-inline radio-fill radio-info">
                                            <Form.Control type="radio" id="info-radio-fill-4" disabled defaultChecked={true} />
                                            <Form.Label htmlFor="info-radio-fill-4" className="cr">
                                                Disabled Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Inline Button</h6>
                                    <hr />
                                    <Form.Group className="d-inline">
                                        <div className="radio d-inline radio-info">
                                            <Form.Control
                                                type="radio"
                                                name="info-radio-inline-1"
                                                id="info-radio-in-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="info-radio-in-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="d-inline">
                                        <div className="radio d-inline radio-info">
                                            <Form.Control
                                                type="radio"
                                                name="info-radio-inline-1"
                                                id="info-radio-in-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="info-radio-in-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Inline Fill Button</h6>
                                    <hr />
                                    <Form.Group className="d-inline">
                                        <div className="radio d-inline radio-fill radio-info">
                                            <Form.Control
                                                type="radio"
                                                name="info-radio-inline-fill-1"
                                                id="info-radio-in-fill-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="info-radio-in-fill-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="d-inline">
                                        <div className="radio d-inline radio-fill radio-info">
                                            <Form.Control
                                                type="radio"
                                                name="info-radio-inline-fill-1"
                                                id="info-radio-in-fill-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="info-radio-in-fill-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Checkbox</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={6} xl={4} className="mb-5">
                                    <h5>Default Checkbox</h5>
                                    <hr />
                                    <Form.Group>
                                        <div className="checkbox d-inline">
                                            <Form.Control type="checkbox" name="checkbox-1" id="checkbox-1" defaultChecked={true} />
                                            <Form.Label htmlFor="checkbox-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline">
                                            <Form.Control type="checkbox" name="checkbox-1" id="checkbox-2" defaultChecked={false} />
                                            <Form.Label htmlFor="checkbox-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline">
                                            <Form.Control type="checkbox" id="checkbox-3" disabled />
                                            <Form.Label htmlFor="checkbox-3" className="cr">
                                                Disabled
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline">
                                            <Form.Control type="checkbox" id="checkbox-4" disabled defaultChecked={true} />
                                            <Form.Label htmlFor="checkbox-4" className="cr">
                                                Disabled Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Bordered checkbox</h6>
                                    <hr />
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-fill">
                                            <Form.Control
                                                type="checkbox"
                                                name="checkbox-fill-1"
                                                id="checkbox-fill-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="checkbox-fill-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-fill">
                                            <Form.Control
                                                type="checkbox"
                                                name="checkbox-fill-1"
                                                id="checkbox-fill-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="checkbox-fill-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-fill">
                                            <Form.Control type="checkbox" id="checkbox-fill-3" disabled />
                                            <Form.Label htmlFor="checkbox-fill-3" className="cr">
                                                Disabled
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-fill">
                                            <Form.Control type="checkbox" id="checkbox-fill-4" disabled defaultChecked={true} />
                                            <Form.Label htmlFor="checkbox-fill-4" className="cr">
                                                Disabled Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Inline Button</h6>
                                    <hr />
                                    <Form.Group className="d-inline">
                                        <div className="checkbox d-inline">
                                            <Form.Control
                                                type="checkbox"
                                                name="checkbox-inline-1"
                                                id="checkbox-in-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="checkbox-in-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="d-inline">
                                        <div className="checkbox d-inline">
                                            <Form.Control
                                                type="checkbox"
                                                name="checkbox-inline-1"
                                                id="checkbox-in-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="checkbox-in-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Inline Bordered checkbox</h6>
                                    <hr />
                                    <Form.Group className="d-inline">
                                        <div className="checkbox d-inline checkbox-fill">
                                            <Form.Control
                                                type="checkbox"
                                                name="checkbox-inline-fill-1"
                                                id="checkbox-in-fill-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="checkbox-in-fill-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="d-inline">
                                        <div className="checkbox d-inline checkbox-fill">
                                            <Form.Control
                                                type="checkbox"
                                                name="checkbox-inline-fill-1"
                                                id="checkbox-in-fill-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="checkbox-in-fill-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col md={6} xl={4} className="mb-5">
                                    <h5>Primary Checkbox</h5>
                                    <hr />
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-primary">
                                            <Form.Control
                                                type="checkbox"
                                                name="primary-checkbox-1"
                                                id="primary-checkbox-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="primary-checkbox-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-primary">
                                            <Form.Control
                                                type="checkbox"
                                                name="primary-checkbox-1"
                                                id="primary-checkbox-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="primary-checkbox-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-primary">
                                            <Form.Control type="checkbox" id="primary-checkbox-3" disabled />
                                            <Form.Label htmlFor="primary-checkbox-3" className="cr">
                                                Disabled
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-primary">
                                            <Form.Control type="checkbox" id="primary-checkbox-4" disabled defaultChecked={true} />
                                            <Form.Label htmlFor="primary-checkbox-4" className="cr">
                                                Disabled Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Bordered checkbox</h6>
                                    <hr />
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-fill checkbox-primary">
                                            <Form.Control
                                                type="checkbox"
                                                name="primary-checkbox-fill-1"
                                                id="primary-checkbox-fill-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="primary-checkbox-fill-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-fill checkbox-primary">
                                            <Form.Control
                                                type="checkbox"
                                                name="primary-checkbox-fill-1"
                                                id="primary-checkbox-fill-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="primary-checkbox-fill-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-fill checkbox-primary">
                                            <Form.Control type="checkbox" id="primary-checkbox-fill-3" disabled />
                                            <Form.Label htmlFor="primary-checkbox-fill-3" className="cr">
                                                Disabled
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-fill checkbox-primary">
                                            <Form.Control type="checkbox" id="primary-checkbox-fill-4" disabled defaultChecked={true} />
                                            <Form.Label htmlFor="primary-checkbox-fill-4" className="cr">
                                                Disabled Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Inline Button</h6>
                                    <hr />
                                    <Form.Group className="d-inline">
                                        <div className="checkbox d-inline checkbox-primary">
                                            <Form.Control
                                                type="checkbox"
                                                name="primary-checkbox-inline-1"
                                                id="primary-checkbox-in-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="primary-checkbox-in-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="d-inline">
                                        <div className="checkbox d-inline checkbox-primary">
                                            <Form.Control
                                                type="checkbox"
                                                name="primary-checkbox-inline-1"
                                                id="primary-checkbox-in-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="primary-checkbox-in-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Inline Bordered checkbox</h6>
                                    <hr />
                                    <Form.Group className="d-inline">
                                        <div className="checkbox d-inline checkbox-fill checkbox-primary">
                                            <Form.Control
                                                type="checkbox"
                                                name="primary-checkbox-inline-fill-1"
                                                id="primary-checkbox-in-fill-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="primary-checkbox-in-fill-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="d-inline">
                                        <div className="checkbox d-inline checkbox-fill checkbox-primary">
                                            <Form.Control
                                                type="checkbox"
                                                name="primary-checkbox-inline-fill-1"
                                                id="primary-checkbox-in-fill-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="primary-checkbox-in-fill-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col md={6} xl={4} className="mb-5">
                                    <h5>Danger Checkbox</h5>
                                    <hr />
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-danger">
                                            <Form.Control
                                                type="checkbox"
                                                name="danger-checkbox-1"
                                                id="danger-checkbox-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="danger-checkbox-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-danger">
                                            <Form.Control
                                                type="checkbox"
                                                name="danger-checkbox-1"
                                                id="danger-checkbox-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="danger-checkbox-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-danger">
                                            <Form.Control type="checkbox" id="danger-checkbox-3" disabled />
                                            <Form.Label htmlFor="danger-checkbox-3" className="cr">
                                                Disabled
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-danger">
                                            <Form.Control type="checkbox" id="danger-checkbox-4" disabled defaultChecked={true} />
                                            <Form.Label htmlFor="danger-checkbox-4" className="cr">
                                                Disabled Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Bordered checkbox</h6>
                                    <hr />
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-fill checkbox-danger">
                                            <Form.Control
                                                type="checkbox"
                                                name="danger-checkbox-fill-1"
                                                id="danger-checkbox-fill-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="danger-checkbox-fill-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-fill checkbox-danger">
                                            <Form.Control
                                                type="checkbox"
                                                name="danger-checkbox-fill-1"
                                                id="danger-checkbox-fill-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="danger-checkbox-fill-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-fill checkbox-danger">
                                            <Form.Control type="checkbox" id="danger-checkbox-fill-3" disabled />
                                            <Form.Label htmlFor="danger-checkbox-fill-3" className="cr">
                                                Disabled
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-fill checkbox-danger">
                                            <Form.Control type="checkbox" id="danger-checkbox-fill-4" disabled defaultChecked={true} />
                                            <Form.Label htmlFor="danger-checkbox-fill-4" className="cr">
                                                Disabled Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Inline Button</h6>
                                    <hr />
                                    <Form.Group className="d-inline">
                                        <div className="checkbox d-inline checkbox-danger">
                                            <Form.Control
                                                type="checkbox"
                                                name="danger-checkbox-inline-1"
                                                id="danger-checkbox-in-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="danger-checkbox-in-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="d-inline">
                                        <div className="checkbox d-inline checkbox-danger">
                                            <Form.Control
                                                type="checkbox"
                                                name="danger-checkbox-inline-1"
                                                id="danger-checkbox-in-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="danger-checkbox-in-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Inline Bordered checkbox</h6>
                                    <hr />
                                    <Form.Group className="d-inline">
                                        <div className="checkbox d-inline checkbox-fill checkbox-danger">
                                            <Form.Control
                                                type="checkbox"
                                                name="danger-checkbox-inline-fill-1"
                                                id="danger-checkbox-in-fill-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="danger-checkbox-in-fill-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="d-inline">
                                        <div className="checkbox d-inline checkbox-fill checkbox-danger">
                                            <Form.Control
                                                type="checkbox"
                                                name="danger-checkbox-inline-fill-1"
                                                id="danger-checkbox-in-fill-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="danger-checkbox-in-fill-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col md={6} xl={4} className="mb-5">
                                    <h5>Success Checkbox</h5>
                                    <hr />
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-success">
                                            <Form.Control
                                                type="checkbox"
                                                name="success-checkbox-1"
                                                id="success-checkbox-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="success-checkbox-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-success">
                                            <Form.Control
                                                type="checkbox"
                                                name="success-checkbox-1"
                                                id="success-checkbox-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="success-checkbox-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-success">
                                            <Form.Control type="checkbox" id="success-checkbox-3" disabled />
                                            <Form.Label htmlFor="success-checkbox-3" className="cr">
                                                Disabled
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-success">
                                            <Form.Control type="checkbox" id="success-checkbox-4" disabled defaultChecked={true} />
                                            <Form.Label htmlFor="success-checkbox-4" className="cr">
                                                Disabled Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Bordered checkbox</h6>
                                    <hr />
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-fill checkbox-success">
                                            <Form.Control
                                                type="checkbox"
                                                name="success-checkbox-fill-1"
                                                id="success-checkbox-fill-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="success-checkbox-fill-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-fill checkbox-success">
                                            <Form.Control
                                                type="checkbox"
                                                name="success-checkbox-fill-1"
                                                id="success-checkbox-fill-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="success-checkbox-fill-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-fill checkbox-success">
                                            <Form.Control type="checkbox" id="success-checkbox-fill-3" disabled />
                                            <Form.Label htmlFor="success-checkbox-fill-3" className="cr">
                                                Disabled
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-fill checkbox-success">
                                            <Form.Control type="checkbox" id="success-checkbox-fill-4" disabled defaultChecked={true} />
                                            <Form.Label htmlFor="success-checkbox-fill-4" className="cr">
                                                Disabled Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Inline Button</h6>
                                    <hr />
                                    <Form.Group className="d-inline">
                                        <div className="checkbox d-inline checkbox-success">
                                            <Form.Control
                                                type="checkbox"
                                                name="success-checkbox-inline-1"
                                                id="success-checkbox-in-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="success-checkbox-in-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="d-inline">
                                        <div className="checkbox d-inline checkbox-success">
                                            <Form.Control
                                                type="checkbox"
                                                name="success-checkbox-inline-1"
                                                id="success-checkbox-in-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="success-checkbox-in-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Inline Bordered checkbox</h6>
                                    <hr />
                                    <Form.Group className="d-inline">
                                        <div className="checkbox d-inline checkbox-fill checkbox-success">
                                            <Form.Control
                                                type="checkbox"
                                                name="success-checkbox-inline-fill-1"
                                                id="success-checkbox-in-fill-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="success-checkbox-in-fill-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="d-inline">
                                        <div className="checkbox d-inline checkbox-fill checkbox-success">
                                            <Form.Control
                                                type="checkbox"
                                                name="success-checkbox-inline-fill-1"
                                                id="success-checkbox-in-fill-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="success-checkbox-in-fill-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col md={6} xl={4} className="mb-5">
                                    <h5>Warning Checkbox</h5>
                                    <hr />
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-warning">
                                            <Form.Control
                                                type="checkbox"
                                                name="warning-checkbox-1"
                                                id="warning-checkbox-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="warning-checkbox-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-warning">
                                            <Form.Control
                                                type="checkbox"
                                                name="warning-checkbox-1"
                                                id="warning-checkbox-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="warning-checkbox-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-warning">
                                            <Form.Control type="checkbox" id="warning-checkbox-3" disabled />
                                            <Form.Label htmlFor="warning-checkbox-3" className="cr">
                                                Disabled
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-warning">
                                            <Form.Control type="checkbox" id="warning-checkbox-4" disabled defaultChecked={true} />
                                            <Form.Label htmlFor="warning-checkbox-4" className="cr">
                                                Disabled Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Bordered checkbox</h6>
                                    <hr />
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-fill checkbox-warning">
                                            <Form.Control
                                                type="checkbox"
                                                name="warning-checkbox-fill-1"
                                                id="warning-checkbox-fill-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="warning-checkbox-fill-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-fill checkbox-warning">
                                            <Form.Control
                                                type="checkbox"
                                                name="warning-checkbox-fill-1"
                                                id="warning-checkbox-fill-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="warning-checkbox-fill-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-fill checkbox-warning">
                                            <Form.Control type="checkbox" id="warning-checkbox-fill-3" disabled />
                                            <Form.Label htmlFor="warning-checkbox-fill-3" className="cr">
                                                Disabled
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-fill checkbox-warning">
                                            <Form.Control type="checkbox" id="warning-checkbox-fill-4" disabled defaultChecked={true} />
                                            <Form.Label htmlFor="warning-checkbox-fill-4" className="cr">
                                                Disabled Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Inline Button</h6>
                                    <hr />
                                    <Form.Group className="d-inline">
                                        <div className="checkbox d-inline checkbox-warning">
                                            <Form.Control
                                                type="checkbox"
                                                name="warning-checkbox-inline-1"
                                                id="warning-checkbox-in-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="warning-checkbox-in-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="d-inline">
                                        <div className="checkbox d-inline checkbox-warning">
                                            <Form.Control
                                                type="checkbox"
                                                name="warning-checkbox-inline-1"
                                                id="warning-checkbox-in-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="warning-checkbox-in-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Inline Bordered checkbox</h6>
                                    <hr />
                                    <Form.Group className="d-inline">
                                        <div className="checkbox d-inline checkbox-fill checkbox-warning">
                                            <Form.Control
                                                type="checkbox"
                                                name="warning-checkbox-inline-fill-1"
                                                id="warning-checkbox-in-fill-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="warning-checkbox-in-fill-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="d-inline">
                                        <div className="checkbox d-inline checkbox-fill checkbox-warning">
                                            <Form.Control
                                                type="checkbox"
                                                name="warning-checkbox-inline-fill-1"
                                                id="warning-checkbox-in-fill-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="warning-checkbox-in-fill-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col md={6} xl={4} className="mb-5">
                                    <h5>Info Checkbox</h5>
                                    <hr />
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-info">
                                            <Form.Control
                                                type="checkbox"
                                                name="info-checkbox-1"
                                                id="info-checkbox-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="info-checkbox-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-info">
                                            <Form.Control
                                                type="checkbox"
                                                name="info-checkbox-1"
                                                id="info-checkbox-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="info-checkbox-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-info">
                                            <Form.Control type="checkbox" id="info-checkbox-3" disabled />
                                            <Form.Label htmlFor="info-checkbox-3" className="cr">
                                                Disabled
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-info">
                                            <Form.Control type="checkbox" id="info-checkbox-4" disabled defaultChecked={true} />
                                            <Form.Label htmlFor="info-checkbox-4" className="cr">
                                                Disabled Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Bordered checkbox</h6>
                                    <hr />
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-fill checkbox-info">
                                            <Form.Control
                                                type="checkbox"
                                                name="info-checkbox-fill-1"
                                                id="info-checkbox-fill-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="info-checkbox-fill-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-fill checkbox-info">
                                            <Form.Control
                                                type="checkbox"
                                                name="info-checkbox-fill-1"
                                                id="info-checkbox-fill-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="info-checkbox-fill-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-fill checkbox-info">
                                            <Form.Control type="checkbox" id="info-checkbox-fill-3" disabled />
                                            <Form.Label htmlFor="info-checkbox-fill-3" className="cr">
                                                Disabled
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="checkbox d-inline checkbox-fill checkbox-info">
                                            <Form.Control type="checkbox" id="info-checkbox-fill-4" disabled defaultChecked={true} />
                                            <Form.Label htmlFor="info-checkbox-fill-4" className="cr">
                                                Disabled Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Inline Button</h6>
                                    <hr />
                                    <Form.Group className="d-inline">
                                        <div className="checkbox d-inline checkbox-info">
                                            <Form.Control
                                                type="checkbox"
                                                name="info-checkbox-inline-1"
                                                id="info-checkbox-in-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="info-checkbox-in-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="d-inline">
                                        <div className="checkbox d-inline checkbox-info">
                                            <Form.Control
                                                type="checkbox"
                                                name="info-checkbox-inline-1"
                                                id="info-checkbox-in-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="info-checkbox-in-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <h6 className="mt-4">Inline Bordered checkbox</h6>
                                    <hr />
                                    <Form.Group className="d-inline">
                                        <div className="checkbox d-inline checkbox-fill checkbox-info">
                                            <Form.Control
                                                type="checkbox"
                                                name="info-checkbox-inline-fill-1"
                                                id="info-checkbox-in-fill-1"
                                                defaultChecked={true}
                                            />
                                            <Form.Label htmlFor="info-checkbox-in-fill-1" className="cr">
                                                Checked
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="d-inline">
                                        <div className="checkbox d-inline checkbox-fill checkbox-info">
                                            <Form.Control
                                                type="checkbox"
                                                name="info-checkbox-inline-fill-1"
                                                id="info-checkbox-in-fill-2"
                                                defaultChecked={false}
                                            />
                                            <Form.Label htmlFor="info-checkbox-in-fill-2" className="cr">
                                                Uncheck
                                            </Form.Label>
                                        </div>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Bootstrap Tags Input</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <h5>Basic Tag Input</h5>
                            <hr />
                            <Card.Text>
                                An array of tags that are displayed as pre-selected. Each tag must have an <code>id</code> and a{' '}
                                <code>name</code> property
                            </Card.Text>
                            <ReactTags
                                classNames={{ root: 'react-tags bootstrap-tagsinput', selectedTag: 'react-tags__selected-tag btn-primary' }}
                                allowNew={true}
                                tags={tags}
                                onDelete={handleDelete}
                                onAddition={(e) => handleAddition(e)}
                            />

                            <h5 className="mt-5">Add On Blur </h5>
                            <hr />
                            <Card.Text>
                                <code>addOnBlur</code> - Creates a tag from the current input value when focus on the input is lost
                            </Card.Text>
                            <ReactTags
                                classNames={{ root: 'react-tags bootstrap-tagsinput', selectedTag: 'react-tags__selected-tag btn-primary' }}
                                allowNew={true}
                                addOnBlur={true}
                                tags={tags}
                                onDelete={handleDelete}
                                onAddition={(e) => handleAddition(e)}
                            />

                            <h5 className="mt-5">Suggestions</h5>
                            <hr />
                            <Card.Text>
                                An array of suggestions that are used as basis for showing suggestions. Each suggestion must have an id and
                                a name property and an optional <code>disabled</code> property.
                            </Card.Text>
                            <ReactTags
                                classNames={{ root: 'react-tags bootstrap-tagsinput', selectedTag: 'react-tags__selected-tag btn-primary' }}
                                tags={tagsSuggestions}
                                minQueryLength={1}
                                suggestions={suggestions}
                                onDelete={handleSuggestionsDelete}
                                onAddition={(e) => handleSuggestionsAddition(e)}
                            />

                            <h5 className="mt-5">Categorizing Tags</h5>
                            <hr />
                            <Card.Text>Override the default class names.</Card.Text>
                            <ReactTags
                                classNames={{ root: 'react-tags bootstrap-tagsinput', selectedTag: 'react-tags__selected-tag btn-primary' }}
                                allowNew={true}
                                addOnBlur={true}
                                tags={tags}
                                onDelete={handleDelete}
                                onAddition={(e) => handleAddition(e)}
                            />
                            <br />
                            <ReactTags
                                classNames={{
                                    root: 'react-tags bootstrap-tagsinput',
                                    selectedTag: 'react-tags__selected-tag btn-secondary'
                                }}
                                allowNew={true}
                                addOnBlur={true}
                                tags={tags}
                                onDelete={handleDelete}
                                onAddition={(e) => handleAddition(e)}
                            />
                            <br />
                            <ReactTags
                                classNames={{ root: 'react-tags bootstrap-tagsinput', selectedTag: 'react-tags__selected-tag btn-success' }}
                                allowNew={true}
                                addOnBlur={true}
                                tags={tags}
                                onDelete={handleDelete}
                                onAddition={(e) => handleAddition(e)}
                            />
                            <br />
                            <ReactTags
                                classNames={{ root: 'react-tags bootstrap-tagsinput', selectedTag: 'react-tags__selected-tag btn-danger' }}
                                allowNew={true}
                                addOnBlur={true}
                                tags={tags}
                                onDelete={handleDelete}
                                onAddition={(e) => handleAddition(e)}
                            />
                            <br />
                            <ReactTags
                                classNames={{ root: 'react-tags bootstrap-tagsinput', selectedTag: 'react-tags__selected-tag btn-warning' }}
                                allowNew={true}
                                addOnBlur={true}
                                tags={tags}
                                onDelete={handleDelete}
                                onAddition={(e) => handleAddition(e)}
                            />
                            <br />
                            <ReactTags
                                classNames={{ root: 'react-tags bootstrap-tagsinput', selectedTag: 'react-tags__selected-tag btn-info' }}
                                allowNew={true}
                                addOnBlur={true}
                                tags={tags}
                                onDelete={handleDelete}
                                onAddition={(e) => handleAddition(e)}
                            />
                            <br />
                            <ReactTags
                                classNames={{ root: 'react-tags bootstrap-tagsinput', selectedTag: 'react-tags__selected-tag btn-light' }}
                                allowNew={true}
                                addOnBlur={true}
                                tags={tags}
                                onDelete={handleDelete}
                                onAddition={(e) => handleAddition(e)}
                            />
                            <br />
                            <ReactTags
                                classNames={{ root: 'react-tags bootstrap-tagsinput', selectedTag: 'react-tags__selected-tag btn-dark' }}
                                allowNew={true}
                                addOnBlur={true}
                                tags={tags}
                                onDelete={handleDelete}
                                onAddition={(e) => handleAddition(e)}
                            />
                            <br />
                            <ReactTags
                                classNames={{ root: 'react-tags bootstrap-tagsinput', selectedTag: 'react-tags__selected-tag btn-link' }}
                                allowNew={true}
                                addOnBlur={true}
                                tags={tags}
                                onDelete={handleDelete}
                                onAddition={(e) => handleAddition(e)}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default FormsAdvance;

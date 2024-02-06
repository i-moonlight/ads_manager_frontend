import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import ModuleNotification from '../../../components/Widgets/Statistic/Notification';

import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
        <Tooltip prefixCls="rc-slider-tooltip" overlay={value} visible={dragging} placement="top" key={index}>
            <Handle value={value} {...restProps} />
        </Tooltip>
    );
};

const marks = {
    '-10': '-10°C',
    0: <strong>0°C</strong>,
    26: '26°C',
    37: '37°C',
    50: '50°C',
    100: {
        style: {
            color: 'red'
        },
        label: <strong>100°C</strong>
    }
};

const ControlledRangeDisableAcross = (props) => {
    const [value, setValue] = useState([20, 40, 60, 80]);

    const handleChange = (value) => {
        setValue(value);
    };

    return <Range className="pc-range-slider" value={value} onChange={handleChange} allowCross={false} {...props} />;
};

const AdvanceRangeSlider = () => {
    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://www.npmjs.com/package/rc-slider"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Basic Slider</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Slider className="pc-range-slider" defaultValue={20} handle={handle} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Slider with fixed values</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Slider
                                className="pc-range-slider"
                                min={10}
                                defaultValue={40}
                                marks={{ 10: 10, 40: 40, 75: 75, 100: 100 }}
                                step={null}
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">
                                Slider with <code>marks</code>, <code>step=null</code>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Slider className="pc-range-slider" min={-10} marks={marks} step={null} defaultValue={20} handle={handle} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">
                                Slider with <code>marks</code>, <code>step</code>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Slider className="pc-range-slider" min={-10} marks={marks} step={10} defaultValue={20} handle={handle} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">
                                Slider with <code>marks</code>, <code>included=false</code>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Slider
                                className="pc-range-slider"
                                min={-10}
                                marks={marks}
                                included={false}
                                defaultValue={20}
                                handle={handle}
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">
                                Slider with <code>marks</code>, <code>step</code>, <code>included=false</code>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Slider
                                className="pc-range-slider"
                                min={-10}
                                marks={marks}
                                step={10}
                                included={false}
                                defaultValue={20}
                                handle={handle}
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Range with custom handle</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Range
                                className="pc-range-slider"
                                min={0}
                                max={20}
                                defaultValue={[3, 10]}
                                tipFormatter={(value) => `${value}%`}
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">
                                Range with <code>allowCross=false</code>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Range className="pc-range-slider" allowCross={false} defaultValue={[0, 20]} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">
                                Range with <code>step=20</code>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Range className="pc-range-slider" step={20} defaultValue={[20, 20]} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">
                                Range with <code>disabled</code>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Range className="pc-range-slider" allowCross={false} defaultValue={[0, 20]} disabled />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">
                                Range with <code>marks</code>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Slider.Range
                                className="pc-range-slider"
                                min={-10}
                                marks={marks}
                                defaultValue={[20, 25, 30, 40]}
                                handle={handle}
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">
                                Range with <code>marks</code>, <code>step</code>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Slider.Range
                                className="pc-range-slider"
                                min={-10}
                                marks={marks}
                                step={10}
                                defaultValue={[20, 25, 30, 40]}
                                handle={handle}
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">
                                Range with <code>dots</code>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Range className="pc-range-slider" dots step={20} defaultValue={[20, 40]} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">
                                Range with <code>controller</code>, <code>allowCross=false</code>, <code>pushable={'{5}'}</code>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ControlledRangeDisableAcross pushable={5} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">
                                Range with <code>min={'{45}'}</code>, <code>max={'{115}'}</code>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Range className="pc-range-slider" defaultValue={[56, 82]} min={45} max={115} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">
                                Multi Range with <code>trackStyle</code>, <code>handleStyle</code>, <code>railStyle</code>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Range
                                className="pc-range-slider"
                                count={3}
                                defaultValue={[20, 40, 60, 80]}
                                pushable
                                trackStyle={[{ backgroundColor: 'red' }, { backgroundColor: 'green' }]}
                                handleStyle={[{ backgroundColor: 'yellow' }, { backgroundColor: 'gray' }]}
                                railStyle={{ backgroundColor: 'black' }}
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">
                                Slider with <code>className</code> like <code>square-handler</code>, <code>triangle-handler</code>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Slider className="pc-range-slider square-handler" defaultValue={20} handle={handle} />
                            <hr />
                            <Slider className="pc-range-slider triangle-handler" defaultValue={50} handle={handle} />
                            <hr />
                            <Slider defaultValue={36} handle={handle} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Color Slider</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Slider
                                className="pc-range-slider square-handler"
                                defaultValue={20}
                                handle={handle}
                                trackStyle={[{ backgroundColor: '#ffaba5' }]}
                                handleStyle={[{ backgroundColor: '#fb0000', borderColor: '#fb0000' }]}
                            />
                            <hr />
                            <Slider
                                className="pc-range-slider triangle-handler"
                                defaultValue={50}
                                handle={handle}
                                trackStyle={[{ backgroundColor: '#ffff9c' }]}
                                handleStyle={[{ borderBottomColor: '#000' }]}
                            />
                            <hr />
                            <Slider
                                defaultValue={36}
                                handle={handle}
                                trackStyle={[{ backgroundColor: '#01bf09' }]}
                                handleStyle={[{ borderColor: '#01bf09' }]}
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Vertical Slider</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Slider
                                        vertical
                                        className="pc-range-slider square-handler"
                                        defaultValue={20}
                                        handle={handle}
                                        trackStyle={[{ backgroundColor: '#ffaba5' }]}
                                        handleStyle={[{ backgroundColor: '#fb0000', borderColor: '#fb0000' }]}
                                    />
                                </Col>
                                <Col>
                                    <Slider
                                        vertical
                                        className="pc-range-slider triangle-handler"
                                        defaultValue={50}
                                        handle={handle}
                                        trackStyle={[{ backgroundColor: '#ffff9c' }]}
                                        handleStyle={[{ borderBottomColor: '#000' }]}
                                    />
                                </Col>
                                <Col>
                                    <Slider vertical className="pc-range-slider" defaultValue={36} handle={handle} />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default AdvanceRangeSlider;

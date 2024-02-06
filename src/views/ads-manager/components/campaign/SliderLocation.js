import React, { useState } from 'react';
import { Slider } from 'primereact/slider';
import { Form, Row, Col } from 'react-bootstrap';
//
import { useExtraLibraryConsumer } from '../../../../contexts/extra/ExtraLibraryContext';
import * as actions_ExtraLAT from '../../../../contexts/extra/ExtraLibraryActionType';
//
const SliderLocation = (props) => {
    const itemLocation = props.itemLocation;
    const [value, setValue] = useState(itemLocation.radius);
    //
    const { state_ExtraLC, dispatch_ExtraLC } = useExtraLibraryConsumer();
    const { extra_amSelectedAdSetLocationsList } = state_ExtraLC;
    //
    // useEffect(() => {
    //     console.log('itemLocation: ', itemLocation);
    //     console.log('value: ', value);
    //     // let arrTemp = [...extra_amSelectedAdSetLocationsList];
    //     // const updatedArray = arrTemp.map((item) => {
    //     //     if (item.name === itemLocation.name) {
    //     //         return { ...item, radius: value };
    //     //     }
    //     //     return item;
    //     // });
    //     // dispatch_ExtraLC({
    //     //     type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_LOCATIONS_LIST,
    //     //     payload: updatedArray
    //     // });
    // }, []);

    const handleChangeValue = (_value) => {
        // if (_value < 10) _value = 10;
        setValue(_value);
        // console.log('value1: ', _value);
        // props.onTransferValue(_value, itemLocation);
        // dispatch_ExtraLC({
        //     type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_CURRENT_LOCATION,
        //     payload: { radius: _value, place_id: itemLocation.place_id }
        // });
    };

    const handleSlideEnd = (event) => {
        // console.log('====================================');
        // console.log('handleSlideEnd: ', event.value);
        // console.log('handleSlideEnd_place_id: ', itemLocation.place_id);
        let arrTemp = [...extra_amSelectedAdSetLocationsList];
        const updatedArray = arrTemp.map((item) => {
            if (item.place_id === itemLocation.place_id) {
                return { ...item, radius: event.value };
            }
            return item;
        });
        dispatch_ExtraLC({
            type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_LOCATIONS_LIST,
            payload: updatedArray
        });
        // dispatch_ExtraLC({
        //     type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_CURRENT_LOCATION,
        //     payload: { radius: event.value, place_id: itemLocation.place_id }
        // });
    };

    const handleBlurValue = (value) => {
        // console.log('====================================');
        // console.log('handleBlurValue: ', value);
        // console.log('handleBlurValue_place_id: ', itemLocation.place_id);
        let arrTemp = [...extra_amSelectedAdSetLocationsList];
        const updatedArray = arrTemp.map((item) => {
            if (item.place_id === itemLocation.place_id) {
                return { ...item, radius: value };
            }
            return item;
        });
        dispatch_ExtraLC({
            type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_LOCATIONS_LIST,
            payload: updatedArray
        });        
    };

    return (
        <div id={'radius_' + itemLocation.place_id}>
            <Row>
                <Col md="1" style={{ top: '-6px' }}>
                    1
                </Col>
                <Col md="8" style={{ paddingRight: '0', paddingLeft: '5px' }}>
                    <Slider
                        onSlideEnd={handleSlideEnd}
                        value={value}
                        onChange={(e) => handleChangeValue(e.value)}
                        step={1}
                        max={50}
                        min={1}
                    />
                </Col>
                <Col md="1" style={{ paddingLeft: '5px', top: '-6px' }}>
                    50
                </Col>
            </Row>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Form.Control
                    style={{ textAlign: 'center' }}
                    value={value}
                    onChange={(e) => handleChangeValue(e.target.value)}
                    type="text"
                    placeholder=""
                    size="sm"
                    onBlur={(e) => handleBlurValue(e.target.value)}
                />{' '}
                mil
                {/* <Button style={{ marginLeft: '10px' }} size="sm" variant="primary">
                    OK
                </Button> */}
            </div>
        </div>
    );
};

export default SliderLocation;

import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Col, Form, Button, InputGroup, Row } from 'react-bootstrap';

import Select from 'react-select';

import ReactTags from 'react-tag-autocomplete';
import { geocodeByLatLng } from 'react-google-places-autocomplete';
import AsyncSelect from 'react-select/async';

import { AlertSuccess, AlertError } from '../../../../utils/alertUtils';

import { useExtraLibraryConsumer } from '../../../../contexts/extra/ExtraLibraryContext';
import * as actions_ExtraLAT from '../../../../contexts/extra/ExtraLibraryActionType';

import LocationsList from '../campaign/LocationsList';
import MyGooglePlacesAutocomplete from '../campaign/MyGooglePlacesAutocomplete';
import { useAdSetUpdateByUserMutation } from '../../../../apis/ads-manager-api-slice';

const AdSetEditForm = (props) => {
    const { state_ExtraLC, dispatch_ExtraLC } = useExtraLibraryConsumer();
    const { extra_amSelectedAdSetLocationsList, extra_amSelectedAdSetLocationsTempList } = state_ExtraLC;

    const { adSetUpdating } = props;

    const [keywords, setKeyWords] = useState([]);
    const [selectedLanguages, setSelectedLanguages] = useState([{ value: 'All Languages', label: 'All Languages' }]);

    const [adSetUpdateByUser] = useAdSetUpdateByUserMutation();

    useEffect(() => {
        if (adSetUpdating) {
            if (adSetUpdating.languages_w_ad_set) {
                if (adSetUpdating.languages_w_ad_set.length === 0) {
                    setSelectedLanguages({ value: 'All Languages', label: 'All Languages' });
                } else {
                    let tempArr = [];
                    adSetUpdating.languages_w_ad_set.forEach((item) => {
                        tempArr.push({ value: item.language, label: item.language });
                    });
                    setSelectedLanguages(tempArr);
                }
            }
            if (adSetUpdating.locations_w_ad_set) {
                let tempArr = [];
                adSetUpdating.locations_w_ad_set.forEach((item, index) => {
                    tempArr.push({
                        id: undefined,
                        name: item.location,
                        gps_lat: item.gps_lat,
                        gps_lng: item.gps_lng,
                        radius: item.radius,
                        place_id: String(index)
                    });
                });
                // setLocations(tempArr);
                dispatch_ExtraLC({
                    type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_LOCATIONS_LIST,
                    payload: tempArr
                });
            }
            if (adSetUpdating.keywords_w_ad_set) {
                let tempArr = [];
                adSetUpdating.keywords_w_ad_set.forEach((item) => {
                    tempArr.push({ id: undefined, name: item.keyword });
                });
                setKeyWords(tempArr);
            }
        }
    }, [adSetUpdating, dispatch_ExtraLC]);
    //
    const [isMinAgeCompare, setIsMinAgeCompare] = useState(true);
    const [isMaxAgeCompare, setIsMaxAgeCompare] = useState(true);
    //
    const schema = Yup.object().shape({
        name: Yup.string().label('Name').required('*Required')
        // spend_limit: Yup.number().label('Spend limit').typeError('Must be number!').moreThan(0, '>0')
    });

    const formik = useFormik({
        initialValues: {
            name: adSetUpdating.name,
            spend_limit: adSetUpdating.spend_limit,
            daily_budget: adSetUpdating.daily_budget,
            //
            age_min: adSetUpdating.age_min,
            age_max: adSetUpdating.age_max,
            gender: adSetUpdating.gender
        },
        onSubmit: (values) => {
            handleSubmitForm(values);
        },
        validationSchema: schema
        // enableReinitialize: true
    });

    const handleAgeMinOnChange = (field, value) => {
        formik.handleChange(field)(value);
        let age_max = formik.values.age_max;
        if (value > age_max) {
            setIsMinAgeCompare(false);
        } else {
            setIsMinAgeCompare(true);
            setIsMaxAgeCompare(true);
        }
        // console.log('handleAgeMinOnChange: ', formik.values.age_max);
    };

    const handleAgeMaxOnChange = (field, value) => {
        formik.handleChange(field)(value);
        let age_min = formik.values.age_min;
        if (value < age_min) {
            setIsMaxAgeCompare(false);
        } else {
            setIsMaxAgeCompare(true);
            setIsMinAgeCompare(true);
        }
        // console.log('handleAgeMaxOnChange: ', value);
    };

    //
    const showAgeRangeList = () => {
        var tempArr = [];
        for (let i = 18; i <= 65; i++) {
            tempArr.push({ value: i, label: i === 65 ? String(i) + '+' : String(i) });
        }
        return tempArr;
    };

    const languageOptions = [
        { value: 'All Languages', label: 'All Languages' },
        { value: 'Afrikaans', label: 'Afrikaans' },
        { value: 'Albanian', label: 'Albanian' },
        { value: 'Arabic', label: 'Arabic' },
        { value: 'Azerbaijani', label: 'Azerbaijani' },
        { value: 'Basque', label: 'Basque' },
        { value: 'Belarusian', label: 'Belarusian' },
        { value: 'Bengali', label: 'Bengali' },
        { value: 'Bosnian', label: 'Bosnian' },
        { value: 'Bulgarian', label: 'Bulgarian' },
        { value: 'Catalan', label: 'Catalan' },
        { value: 'Cebuano', label: 'Cebuano' },
        { value: 'Chinese (All)', label: 'Chinese (All)' },
        { value: 'Croatian', label: 'Croatian' },
        { value: 'Czech', label: 'Czech' },
        { value: 'Danish', label: 'Danish' },
        { value: 'Dutch', label: 'Dutch' },
        { value: 'English', label: 'English' },
        { value: 'Esperanto', label: 'Esperanto' },
        { value: 'Estonian', label: 'Estonian' },
        { value: 'Faroese', label: 'Faroese' },
        { value: 'Filipino', label: 'Filipino' },
        { value: 'Finnish', label: 'Finnish' },
        { value: 'Flemish', label: 'Flemish' },
        { value: 'French', label: 'French' },
        { value: 'Frisian', label: 'Frisian' },
        { value: 'Galician', label: 'Galician' },
        { value: 'Georgian', label: 'Georgian' },
        { value: 'German', label: 'German' },
        { value: 'Greek', label: 'Greek' },
        { value: 'Guarani', label: 'Guarani' },
        { value: 'Gujarati', label: 'Gujarati' },
        { value: 'Hebrew', label: 'Hebrew' },
        { value: 'Hindi', label: 'Hindi' },
        { value: 'Hungarian', label: 'Hungarian' },
        { value: 'Icelandic', label: 'Icelandic' },
        { value: 'Indonesian', label: 'Indonesian' },
        { value: 'Irish', label: 'Irish' },
        { value: 'Italian', label: 'Italian' },
        { value: 'Japanese', label: 'Japanese' },
        { value: 'Javanese', label: 'Javanese' },
        { value: 'Kannada', label: 'Kannada' },
        { value: 'Kazakh', label: 'Kazakh' },
        { value: 'Khmer', label: 'Khmer' },
        { value: 'Korean', label: 'Korean' },
        { value: 'Latvian', label: 'Latvian' },
        { value: 'Lithuanian', label: 'Lithuanian' },
        { value: 'Macedonian', label: 'Macedonian' },
        { value: 'Malay', label: 'Malay' },
        { value: 'Malayalam', label: 'Malayalam' },
        { value: 'Marathi', label: 'Marathi' },
        { value: 'Mongolian', label: 'Mongolian' },
        { value: 'Nepali', label: 'Nepali' },
        { value: 'Northern Kurdish (Kurmanji)', label: 'Northern Kurdish (Kurmanji)' },
        { value: 'Norwegian (bokmal)', label: 'Norwegian (bokmal)' },
        { value: 'Norwegian (nynorsk)', label: 'Norwegian (nynorsk)' },
        { value: 'Pashto', label: 'Pashto' },
        { value: 'Persian', label: 'Persian' },
        { value: 'Polish', label: 'Polish' },
        { value: 'Portuguese (All)', label: 'Portuguese (All)' },
        { value: 'Portuguese (Brazil)', label: 'Portuguese (Brazil)' },
        { value: 'Portuguese (Portugal)', label: 'Portuguese (Portugal)' },
        { value: 'Romanian', label: 'Romanian' },
        { value: 'Russian', label: 'Russian' },
        { value: 'Serbian', label: 'Serbian' },
        { value: 'Sinhala', label: 'Sinhala' },
        { value: 'Slovak', label: 'Slovak' },
        { value: 'Slovenian', label: 'Slovenian' },
        { value: 'Spanish', label: 'Spanish' },
        { value: 'Swahili', label: 'Swahili' },
        { value: 'Swedish', label: 'Swedish' },
        { value: 'Tajik', label: 'Tajik' },
        { value: 'Tamil', label: 'Tamil' },
        { value: 'Telugu', label: 'Telugu' },
        { value: 'Thai', label: 'Thai' },
        { value: 'Turkish', label: 'Turkish' },
        { value: 'Ukrainian', label: 'Ukrainian' },
        { value: 'Urdu', label: 'Urdu' },
        { value: 'Uzbek', label: 'Uzbek' },
        { value: 'Vietnamese', label: 'Vietnamese' },
        { value: 'Welsh', label: 'Welsh' }
    ];

    // const handelChangeLocation = (value) => {
    //     setSelectedLocations(value);
    // };

    // Languages
    const handleChangeLanguage = (event) => {
        var arrTemp = [...event];
        let index = arrTemp.findIndex((item) => item.value === 'All Languages');
        if (index > -1) {
            arrTemp.splice(index, 1);
            setSelectedLanguages(arrTemp);
        } else {
            if (event.length === 0) {
                setSelectedLanguages({ value: 'All Languages', label: 'All Languages' });
            } else {
                setSelectedLanguages(event);
            }
        }
        //
        if (arrTemp.length > 0 && index === arrTemp.length) {
            setSelectedLanguages({ value: 'All Languages', label: 'All Languages' });
        }
    };

    // Keywords
    const handleDeleteKeywords = (i, states) => {
        const newTags = keywords.slice(0);
        newTags.splice(i, 1);
        setKeyWords(newTags);
    };

    const handleAdditionKeywords = (tag, state) => {
        const newTags = [].concat(keywords, tag);
        setKeyWords(newTags);
    };

    const handleSubmitForm = async (values) => {
        if (!isMaxAgeCompare || !isMinAgeCompare) return;
        var _keywords = '';
        if (keywords.length > 0) {
            keywords.forEach((item, index) => {
                index === keywords.length - 1 ? (_keywords += item.name) : (_keywords += item.name + ';');
            });
        }
        var _languages = '';
        if (selectedLanguages.length > 0) {
            selectedLanguages.forEach((item, index) => {
                index === selectedLanguages.length - 1 ? (_languages += item.value) : (_languages += item.value + ';');
            });
        } else {
            _languages = 'All Languages';
        }
        var _locations = [];
        if (extra_amSelectedAdSetLocationsList.length > 0) {
            extra_amSelectedAdSetLocationsList.forEach((item, index) => {
                let objTemp = { name: item.name, radius: item.radius, lat: item.lat, lng: item.lng };
                _locations.push(objTemp);
            });
        }

        const data = {
            ...values,
            spend_limit: values.spend_limit ? values.spend_limit : null,
            languages: _languages,
            locations: JSON.stringify(_locations),
            keywords: _keywords,
            id: adSetUpdating.id
        };

        try {
            await adSetUpdateByUser(data).unwrap();
            AlertSuccess('Update successfully!');
            dispatch_ExtraLC({
                type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_LOCATIONS_LIST,
                payload: []
            });

            props.hideModal(false);
        } catch (error) {
            AlertError('Error from server!');
        }
    };

    

    // Location
    // const handleDeleteLocation = (i, states) => {
    //     const newTags = locations.slice(0);
    //     newTags.splice(i, 1);
    //     setLocations(newTags);
    // };

    // const handleAdditionLocations = (tag, state) => {
    //     const newTags = [].concat(locations, tag);
    //     setLocations(newTags);
    // };

    const handleKeyPress = (event) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);

        if (keyValue === '.') {
            event.preventDefault();
        }
    };

    // ===================

    const [locateType, setLocateType] = useState('name');
    const [currentCoordinate, setCurrentCoordinate] = useState('');
    // const asyncSelectRef = useRef(null);

    const handelChangeLocationType = (event) => {
        let locationType = event.target.value;
        setLocateType(locationType);
        // if (locationType === 'coordinate') {
        //     setSelectedLocations([]);
        // }
    };

    const handleSelectAddressByPlaceId = (data) => {
        // console.log('handleSelectAddressByPlaceId: ', data);
        let arrCoordinate = currentCoordinate.split(', ');
        if (arrCoordinate && arrCoordinate.length === 2) {
            try {
                let lat = Number(arrCoordinate[0]);
                let lng = Number(arrCoordinate[1]);
                let _location = { id: undefined, name: data.label, lat: lat, lng: lng, radius: 10, place_id: data.value };
                let arrTemp = [...extra_amSelectedAdSetLocationsList];
                let checkExist = arrTemp.find((item) => {
                    return item.place_id === data.value;
                });
                if (!checkExist) {
                    arrTemp.push(_location);
                    dispatch_ExtraLC({
                        type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_LOCATIONS_LIST,
                        payload: arrTemp
                    });
                }
            } catch {}
        }
        // const results = await geocodeByPlaceId(data.value);
        // const { lat, lng } = results[0].geometry.location;
        // console.log('handleSelectAddressByPlaceId_lat: ', results);
    };

    const loadOptions = (inputValue, callback) => {
        let arrCoordinate = inputValue.split(', ');
        if (arrCoordinate && arrCoordinate.length === 2) {
            let lat = Number(arrCoordinate[0]);
            let lng = Number(arrCoordinate[1]);
            console.log(lat);
            geocodeByLatLng({ lat: lat, lng: lng })
                .then((results) => {
                    console.log(results);
                    const options = results.map((item) => ({ value: item.place_id, label: item.formatted_address }));
                    callback(options);
                    setCurrentCoordinate(inputValue);
                    var arrTemp = [];
                    results.map((item) => {
                        let _location = {
                            label: item.formatted_address,
                            value: item.place_id
                        };
                        arrTemp.push(_location);
                        return '';
                    });
                    dispatch_ExtraLC({
                        type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_LOCATIONS_TEMP_LIST,
                        payload: arrTemp
                    });
                    // console.log('setSelectedLocations:::');
                })
                .catch((error) => console.error(error));
        }
    };

    // ================

    const closeModal = () => {
        dispatch_ExtraLC({
            type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_LOCATIONS_LIST,
            payload: []
        });
        dispatch_ExtraLC({
            type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_LOCATIONS_TEMP_LIST,
            payload: []
        });
        props.hideModal(false);
    };

    const [refreshKey, setRefreshKey] = useState(0);

    const refreshChild = () => {
        setRefreshKey((prevKey) => prevKey + 1);
    };

    return (
        <Form name="frmAdSetEditForm" onSubmit={formik.handleSubmit}>
            <Form.Group>
                <Form.Label mb="1">Ad Set Name</Form.Label>
                <Form.Control
                    value={formik.values.name}
                    onChange={formik.handleChange('name')}
                    onBlur={formik.handleBlur('name')}
                    isInvalid={formik.touched.name && formik.errors.name ? true : false}
                    type="text"
                    placeholder="Ad Set Name *Required"
                    className="mb-2"
                />
            </Form.Group>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Spend Limit</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text style={{ padding: '0px 5px' }} id="inputGroup-sizing-default">
                                $
                            </InputGroup.Text>
                        </InputGroup.Prepend>

                        <Form.Control
                            value={formik.values.spend_limit ? formik.values.spend_limit : ''}
                            onChange={formik.handleChange('spend_limit')}
                            onBlur={formik.handleBlur('spend_limit')}
                            isInvalid={formik.touched.spend_limit && formik.errors.spend_limit ? true : false}
                            type="number"
                            placeholder="Spend Limit"
                            aria-describedby="inputGroup-sizing-default"
                            onKeyPress={handleKeyPress}
                        />
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Daily Budget</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text style={{ padding: '0px 5px' }} id="inputGroup-sizing-default">
                                $
                            </InputGroup.Text>
                        </InputGroup.Prepend>

                        <Form.Control
                            value={formik.values.daily_budget ? formik.values.daily_budget : ''}
                            onChange={formik.handleChange('daily_budget')}
                            onBlur={formik.handleBlur('daily_budget')}
                            isInvalid={formik.touched.daily_budget && formik.errors.daily_budget ? true : false}
                            type="number"
                            placeholder="Daily Budget"
                            aria-describedby="inputGroup-sizing-default"
                            onKeyPress={handleKeyPress}
                        />
                    </InputGroup>
                </Form.Group>

                <Form.Group as={Col}></Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Age range</Form.Label>
                    <Form.Control
                        className={isMinAgeCompare ? '' : 'isAgeCompare_error'}
                        value={formik.values.age_min}
                        onChange={(e) => {
                            handleAgeMinOnChange('age_min', e.target.value);
                        }}
                        // onChange={formik.handleChange('age_min')}
                        as="select"
                    >
                        {/* <option value="0">Select from</option> */}
                        {showAgeRangeList().map(({ value, label }, index) => (
                            <option key={index} value={value}>
                                {label}
                            </option>
                        ))}
                    </Form.Control>
                    {!isMinAgeCompare && (
                        <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
                            Minimum age must not be greater than maximum age.
                        </Form.Control.Feedback>
                    )}
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>to</Form.Label>
                    <Form.Control
                        className={isMaxAgeCompare ? '' : 'isAgeCompare_error'}
                        value={formik.values.age_max}
                        onChange={(e) => {
                            handleAgeMaxOnChange('age_max', e.target.value);
                        }}
                        // onChange={formik.handleChange('age_max')}
                        as="select"
                    >
                        {/* <option value="0">Select to</option> */}
                        {showAgeRangeList().map(({ value, label }, index) => {
                            if (value === 65) {
                                return (
                                    <option key={index} value={value} defaultValue="65">
                                        {label}
                                    </option>
                                );
                            }
                            return (
                                <option key={index} value={value}>
                                    {label}
                                </option>
                            );
                        })}
                    </Form.Control>
                    {!isMaxAgeCompare && (
                        <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
                            Maximum age must be greater than maximum age.
                        </Form.Control.Feedback>
                    )}
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Gender</Form.Label>
                    <Form.Control value={formik.values.gender} onChange={formik.handleChange('gender')} as="select">
                        <option value="All Genders">All Genders</option>
                        <option value="Female Only">Female Only</option>
                        <option value="Male Only">Male Only</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <Form.Group>
                <Form.Label>Languages</Form.Label>
                <Select
                    defaultValue={[languageOptions[0]]}
                    isMulti
                    name="languages"
                    options={languageOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(e) => handleChangeLanguage(e)}
                    value={selectedLanguages}
                />
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Locations</Form.Label>
                {/* style={{ border: '1px dashed #dee2e6', padding: '5px' }} */}
                <div
                    id="idLocationInput"
                    style={{ border: '1px dashed #dee2e6', padding: '5px', paddingBottom: '0', borderRadius: '0.25rem' }}
                >
                    <Row className="mb-2">
                        <Col md="9" style={{ marginTop: '5px' }}>
                            {locateType === 'name' && <MyGooglePlacesAutocomplete key={refreshKey} refreshChild={refreshChild} />}
                            {locateType === 'coordinate' && (
                                <AsyncSelect
                                    // ref={asyncSelectRef}
                                    cacheOptions
                                    defaultOptions={extra_amSelectedAdSetLocationsTempList}
                                    loadOptions={loadOptions}
                                    onChange={handleSelectAddressByPlaceId}
                                    placeholder="Add new locations..."
                                    isClearable={true}
                                    styles={{
                                        control: (provided, state) => ({
                                            ...provided,
                                            backgroundColor: '#f4f7fa', // Change the background color of the control
                                            border: state.isFocused ? '1px solid #80bdff' : '1px solid #ced4da',
                                            boxShadow: state.isFocused ? '0 0 0 0.2rem rgba(0, 123, 255, 0.25)' : 'none'
                                        }),
                                        placeholder: (defaultStyles) => {
                                            return {
                                                ...defaultStyles,
                                                color: '#aaaeb3'
                                            };
                                        },
                                        indicatorSeparator: (provided, state) => ({
                                            ...provided,
                                            display: 'none'
                                        })
                                    }}
                                    value={null}
                                />
                                // <Select
                                //     onInputChange={handleInputChange}
                                //     options={selectedLocations}
                                //     // value={locations}
                                //     onChange={handleSelectAddressByPlaceId}
                                //     // isMulti
                                //     className="basic-multi-select"
                                //     classNamePrefix="select"
                                // />
                            )}
                        </Col>
                        <Col md="3" style={{ paddingLeft: '0', marginBottom: '-10px', marginTop: '5px' }}>
                            <Form.Group>
                                <Form.Control style={{ padding: '7px 10px' }} onChange={(e) => handelChangeLocationType(e)} as="select">
                                    <option value="name">By name</option>
                                    <option value="coordinate">By GPS</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <LocationsList />
                    {/* <ReactTags
                        classNames={{ root: 'react-tags bootstrap-tagsinput', selectedTag: 'react-tags__selected-tag btn-primary' }}
                        allowNew={true}
                        tags={locations}
                        onDelete={handleDeleteLocation}
                        onAddition={(e) => handleAdditionLocations(e)}
                        placeholderText={null}
                    /> */}
                </div>
                {/* <Select
                    options={locationOptions}
                    value={selectedLocations}
                    onChange={handelChangeLocation}
                    isMulti
                    className="basic-multi-select"
                    classNamePrefix="select"
                /> */}
            </Form.Group>
            <Form.Group>
                {/* <Form.Control value={formik.values.keyword} onChange={formik.handleChange('keyword')} type="text" placeholder="" /> */}
                <div id="idKeywordInput">
                    <ReactTags
                        classNames={{
                            root: 'react-tags bootstrap-tagsinput',
                            selectedTag: 'react-tags__selected-tag btn-primary'
                        }}
                        allowNew={true}
                        tags={keywords}
                        onDelete={handleDeleteKeywords}
                        onAddition={(e) => handleAdditionKeywords(e)}
                        placeholderText="Keywords & Interests"
                    />
                </div>
            </Form.Group>

            <div className="campaign_create_footer">
                <Button variant="secondary" onClick={() => closeModal()}>
                    Close
                </Button>
                <Button onClick={() => formik.handleSubmit()} variant="primary">
                    Save change
                </Button>
            </div>
        </Form>
    );
};

export default AdSetEditForm;

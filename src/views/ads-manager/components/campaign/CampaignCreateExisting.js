import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Col, Form, Button, OverlayTrigger, Tooltip, Row } from 'react-bootstrap';
import Select from 'react-select';
import { Accordion, AccordionTab } from 'primereact/accordion';
import ReactTags from 'react-tag-autocomplete';
import { geocodeByLatLng } from 'react-google-places-autocomplete';
import AsyncSelect from 'react-select/async';

import { useAdsManagerLibraryConsumer } from '../../common/AdsManagerLibraryContext';
import * as actions_AdsManagerLAT from '../../common/AdsManagerLibraryActionType';
import { AlertSuccess, AlertError } from '../../../../utils/alertUtils';

import { useExtraLibraryConsumer } from '../../../../contexts/extra/ExtraLibraryContext';
import * as actions_ExtraLAT from '../../../../contexts/extra/ExtraLibraryActionType';

import LocationsList from './LocationsList';
import MyGooglePlacesAutocomplete from './MyGooglePlacesAutocomplete';
import { useAdSetAddWithCampaignByUserMutation, useCampaignBasicGetAllByUserQuery } from '../../../../apis/ads-manager-api-slice';

const CampaignCreateExisting = (props) => {
    const { state_AdsManagerLC, dispatch_AdsManagerLC } = useAdsManagerLibraryConsumer();
    const { isRefreshAfterUpdate, amCampaignIdCurrent, amAdSetIdCurrent, amIsShowMediaLibraryModal } = state_AdsManagerLC;

    const { state_ExtraLC, dispatch_ExtraLC } = useExtraLibraryConsumer();
    const { extra_amSelectedAdSetLocationsList, extra_amSelectedAdSetLocationsTempList } = state_ExtraLC;

    const { data: data_Campaign, isLoading: isLoading_Campaign } = useCampaignBasicGetAllByUserQuery();

    const [campaignIDCurrent, setCampaignIDCurrent] = useState(0);
    const [adSetIDCurrent, setAdSetIDCurrent] = useState(0);
    const [adSetListCurrentByCampaign, setAdSetListCurrentByCampaign] = useState([]);
    const [isChoosenAdSetOptionID, setIsChoosenAdSetOptionID] = useState(0);

    const [keywords, setKeyWords] = useState([]);

    const [isMinAgeCompare, setIsMinAgeCompare] = useState(true);
    const [isMaxAgeCompare, setIsMaxAgeCompare] = useState(true);

    const [adSetAddWithCampaignByUser] = useAdSetAddWithCampaignByUserMutation();

    const re =
        /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;
    const schema = Yup.object().shape({
        ad_set_name: Yup.string().label('Ad Set Name').required('*Required'),
        destination_url: Yup.string()
            .label('Destination URL')
            .required('*Required')
            .matches(re, 'URL is invalid. Please make sure it is formatted properly.'),
        display_url: Yup.string().label('Display URL').matches(re, 'Display URL is invalid. Please make sure it is formatted properly.')
    });

    const schema1 = Yup.object().shape({
        destination_url: Yup.string()
            .label('Destionation URL')
            .required('*Required')
            .matches(re, 'URL is invalid. Please make sure it is formatted properly.'),
        display_url: Yup.string().label('Display URL').matches(re, 'Display URL is invalid. Please make sure it is formatted properly.')
    });

    const formik = useFormik({
        initialValues: {
            destination_url: '',
            display_url: '',
            //
            age_min: 18,
            age_max: 65,
            gender: 'All Genders',
            //
            ad_set_name: ''
        },
        onSubmit: (values) => {
            amAdSetIdCurrent === 0 ? handleSubmitForm(values) : handleSubmitFormOnlyUrl(values);
        },
        validationSchema: amAdSetIdCurrent === 0 ? schema : schema1
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

    // Languages
    const [selectedLanguages, setSelectedLanguages] = useState([{ value: 'All Languages', label: 'All Languages' }]);
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

    //
    const handleSubmitFormOnlyUrl = (values) => {
        var elem = document.getElementById('idSelectAdSet');
        if (elem) {
            if (adSetIDCurrent === 0) {
                elem.classList.add('is-invalid');
                return;
            } else {
                elem.classList.remove('is-invalid');
            }
        }
        if (amIsShowMediaLibraryModal) {
            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_MEDIA_LIBRARY_MODAL,
                payload: 'visible'
            });
        } else {
            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_SHOW_MEDIA_LIBRARY_MODAL,
                payload: true
            });
        }
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_CAMPAIGN_CREATE_MODAL,
            payload: 'hidden'
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_MEDIA_LIBRARY_MODAL,
            payload: 'visible'
        });
        //
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_ADS_CAMPAIGN_ID_CURRENT,
            payload: campaignIDCurrent
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_ADS_AD_SET_ID_CURRENT,
            payload: adSetIDCurrent
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_ADS_URL_CURRENT,
            payload: values.destination_url
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_DISPLAY_URL_CURRENT,
            payload: values.display_url
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_IS_REFRESH_AFTER_UPDATE,
            payload: !isRefreshAfterUpdate
        });
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
            name: values.ad_set_name,
            age_min: values.age_min,
            age_max: values.age_max,
            gender: values.gender,
            destination_url: values.destination_url,
            display_url: values.display_url,
            campaign_id: amCampaignIdCurrent,
            languages: _languages,
            locations: JSON.stringify(_locations),
            keywords: _keywords,
            status: 'DRAFT'
        };

        try {
            const adSetData = await adSetAddWithCampaignByUser(data).unwrap();

            AlertSuccess('Add new successfully!');

            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_SHOW_MEDIA_LIBRARY_MODAL,
                payload: true
            });
            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_CAMPAIGN_CREATE_MODAL,
                payload: 'hidden'
            });
            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_MEDIA_LIBRARY_MODAL,
                payload: 'visible'
            });

            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_ADS_CAMPAIGN_ID_CURRENT,
                payload: adSetData.campaign_id
            });
            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_ADS_AD_SET_ID_CURRENT,
                payload: adSetData.ad_set_id
            });
            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_ADS_URL_CURRENT,
                payload: adSetData.destination_url
            });
            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_DISPLAY_URL_CURRENT,
                payload: adSetData.display_url
            });

            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_ADS_CAMPAIGN_ITEM_CURRENT,
                payload: adSetData.campaign
            });
            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_AD_SET_ITEM_CURRENT,
                payload: adSetData.ad_set
            });
            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_CREATE_CAMPAIGN,
                payload: false
            });

            dispatch_ExtraLC({
                type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_LOCATIONS_LIST,
                payload: []
            });
            dispatch_ExtraLC({
                type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_LOCATIONS_TEMP_LIST,
                payload: []
            });
        } catch (error) {
            AlertError('Error from server!');
        }
    };

    const handleChangeCampaign = (event) => {
        let campaign_id = parseInt(event.target.value);
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_ADS_CAMPAIGN_ID_CURRENT,
            payload: campaign_id
        });
        listAdSetByCampaign(campaign_id);
        setCampaignIDCurrent(campaign_id);
        //
        if (data_Campaign && data_Campaign.length > 0) {
            let objIsExist = data_Campaign.find((elem) => {
                return elem.id === campaign_id;
            });
            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_ADS_CAMPAIGN_ITEM_CURRENT,
                payload: objIsExist
            });
            // console.log('amCampaignItemCurrent: ', amCampaignItemCurrent);
        }
        if (campaign_id === 0) {
            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_CREATE_CAMPAIGN,
                payload: true
            });
        } else {
            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_CREATE_CAMPAIGN,
                payload: false
            });
        }
    };

    const listAdSetByCampaign = (campaign_id) => {
        let objIsExist = data_Campaign.find((elem) => {
            return elem.id === campaign_id;
        });
        if (objIsExist) {
            setAdSetListCurrentByCampaign(objIsExist.campaign_w_ad_sets);
            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_AD_SET_ITEM_CURRENT,
                payload: objIsExist.campaign_w_ad_sets.length > 0 ? objIsExist.campaign_w_ad_sets[0] : null
            });
            // console.log('campaign_w_ad_sets: ', amAdSetItemCurrent);
        }
        // console.log('objIsExist: ', objIsExist);
    };

    const handleChangeAdSetOption = (event) => {
        let optionId = parseInt(event.target.value);
        if (optionId === 1) {
            listAdSetByCampaign(campaignIDCurrent);
        } else {
            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_ADS_AD_SET_ID_CURRENT,
                payload: 0
            });
        }
        setIsChoosenAdSetOptionID(optionId);
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_CREATE_AD_SETS,
            payload: optionId === 1 ? false : true
        });
    };

    const handleChangeAdSet = (event) => {
        let ad_set_id = parseInt(event.target.value);
        setAdSetIDCurrent(ad_set_id);
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_ADS_AD_SET_ID_CURRENT,
            payload: ad_set_id
        });
        let objIsExist = adSetListCurrentByCampaign.find((elem) => {
            return elem.id === ad_set_id;
        });
        if (objIsExist) {
            // console.log('adSetList_objIsExist: ', objIsExist);
            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_AD_SET_ITEM_CURRENT,
                payload: objIsExist
            });
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

    const handleClose = () => {
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_CAMPAIGN_CREATE_MODAL,
            payload: 'visible'
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_CAMPAIGN_CREATE_AND_EDIT_MODAL,
            payload: 'visible'
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_CAMPAIGN_FINALIZE_MODAL,
            payload: 'visible'
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_MEDIA_LIBRARY_MODAL,
            payload: 'visible'
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_SHOW_MEDIA_LIBRARY_MODAL,
            payload: false
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_SHOW_CAMPAIGN_CREATE_MODAL,
            payload: false
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_SHOW_CAMPAIGN_CREATE_AND_EDIT_MODAL,
            payload: false
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_SHOW_CAMPAIGN_FINALIZE_MODAL,
            payload: false
        });
        //
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_ADS_CAMPAIGN_ID_CURRENT,
            payload: 0
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_ADS_AD_SET_ID_CURRENT,
            payload: 0
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_ADS_URL_CURRENT,
            payload: ''
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_DISPLAY_URL_CURRENT,
            payload: ''
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_ADS_CAMPAIGN_ITEM_CURRENT,
            payload: null
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_AD_SET_ITEM_CURRENT,
            payload: null
        });
        //
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_CREATE_CAMPAIGN,
            payload: true
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_CREATE_AD_SETS,
            payload: true
        });
        //
        dispatch_ExtraLC({
            type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_LOCATIONS_LIST,
            payload: []
        });
        dispatch_ExtraLC({
            type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_LOCATIONS_TEMP_LIST,
            payload: []
        });
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

    const [refreshKey, setRefreshKey] = useState(0);

    const refreshChild = () => {
        setRefreshKey((prevKey) => prevKey + 1);
    };

    return (
        <Form name="frmCampaignCreateExisting" style={{ marginTop: '10px' }}>
            <Form.Group>
                <Form.Label>
                    <i className="fas fa-folder-open"></i> Campaign
                </Form.Label>
                <Form.Control onChange={(e) => handleChangeCampaign(e)} as="select">
                    <option value={0}>Choose a campaign</option>
                    {!isLoading_Campaign &&
                        data_Campaign &&
                        data_Campaign.map((item, index) => {
                            return (
                                <option key={index} value={item.id}>
                                    {item.name}
                                </option>
                            );
                        })}
                </Form.Control>
            </Form.Group>
            {campaignIDCurrent > 0 && (
                <>
                    <Form.Row>
                        {adSetListCurrentByCampaign.length > 0 && (
                            <Form.Group as={Col} className="mb-2">
                                <Form.Label>
                                    <i className="feather icon-grid"></i> Ad Set
                                </Form.Label>
                                <Form.Control onChange={(e) => handleChangeAdSetOption(e)} as="select">
                                    <option value={0}>Create Ad Set</option>
                                    <option value={1}>Use Existing Ad Set</option>
                                </Form.Control>
                            </Form.Group>
                        )}
                        <Form.Group as={Col} className="mb-2">
                            {adSetListCurrentByCampaign.length === 0 && (
                                <Form.Label>
                                    <i className="feather icon-grid"></i> Ad Set
                                </Form.Label>
                            )}
                            <Form.Label style={{ color: 'white' }}>.</Form.Label>
                            {isChoosenAdSetOptionID === 0 && (
                                <OverlayTrigger
                                    placement="right"
                                    overlay={<Tooltip>Ad Set Name: Internal reference, not seen by audience.</Tooltip>}
                                >
                                    <Form.Control
                                        value={formik.values.ad_set_name}
                                        onChange={formik.handleChange('ad_set_name')}
                                        onBlur={formik.handleBlur('ad_set_name')}
                                        isInvalid={formik.touched.ad_set_name && formik.errors.ad_set_name ? true : false}
                                        type="text"
                                        placeholder="Ad Set Name *Required"
                                    />
                                </OverlayTrigger>
                            )}
                            {isChoosenAdSetOptionID !== 0 && (
                                <Form.Control
                                    id="idSelectAdSet"
                                    onChange={(e) => handleChangeAdSet(e)}
                                    as="select"
                                    isInvalid={formik.touched.ad_set_name && formik.errors.ad_set_name ? true : false}
                                >
                                    <option value={0}>Select an Ad Set</option>
                                    {adSetListCurrentByCampaign.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>
                                                {item.name}
                                            </option>
                                        );
                                    })}
                                    {/* <option value={1}>Ad Set A</option>
                                    <option value={2}>Ad Set B</option> */}
                                </Form.Control>
                            )}
                        </Form.Group>
                    </Form.Row>
                    <Form.Group className="mb-2">
                        <OverlayTrigger
                            placement="left"
                            overlay={<Tooltip>Destination URL: The landing page for those who click your ad.</Tooltip>}
                        >
                            <Form.Control
                                value={formik.values.destination_url}
                                onChange={formik.handleChange('destination_url')}
                                onBlur={formik.handleBlur('destination_url')}
                                isInvalid={formik.touched.destination_url && formik.errors.destination_url ? true : false}
                                type="text"
                                placeholder="Destination URL *Required"
                            />
                        </OverlayTrigger>
                        <Form.Control.Feedback type="invalid">{formik.errors.destination_url}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <OverlayTrigger
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-display-url`}>
                                    Display URL: The web address viewed with the ad. Preferably, use your domain name.
                                </Tooltip>
                            }
                        >
                            <Form.Control
                                value={formik.values.display_url}
                                onChange={formik.handleChange('display_url')}
                                onBlur={formik.handleBlur('display_url')}
                                isInvalid={formik.touched.display_url && formik.errors.display_url ? true : false}
                                type="text"
                                placeholder="Display URL"
                            />
                        </OverlayTrigger>
                        <Form.Control.Feedback type="invalid">{formik.errors.display_url}</Form.Control.Feedback>
                    </Form.Group>

                    {isChoosenAdSetOptionID === 0 && (
                        <>
                            <Accordion className="noPadding">
                                <AccordionTab
                                    header={
                                        <span>
                                            <i className="fas fa-users" style={{ marginRight: '10px' }}></i>Target Audience Details
                                        </span>
                                    }
                                >
                                    <Form.Row>
                                        <Form.Group as={Col} className="mb-2">
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
                                        <Form.Group as={Col} className="mb-2">
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
                                        <Form.Group as={Col} className="mb-2">
                                            <Form.Control value={formik.values.gender} onChange={formik.handleChange('gender')} as="select">
                                                <option value="All Genders">All Genders</option>
                                                <option value="Female Only">Female Only</option>
                                                <option value="Male Only">Male Only</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Group className="mb-2">
                                        <Select
                                            defaultValue={[languageOptions[0]]}
                                            isMulti
                                            name="languages"
                                            options={languageOptions}
                                            classNamePrefix="select"
                                            onChange={(e) => handleChangeLanguage(e)}
                                            value={selectedLanguages}
                                            styles={{
                                                control: (provided, state) => ({
                                                    ...provided,
                                                    backgroundColor: '#f4f7fa', // Change the background color of the control
                                                    border: state.isFocused ? '1px solid #80bdff' : '1px solid #ced4da',
                                                    boxShadow: state.isFocused ? '0 0 0 0.2rem rgba(0, 123, 255, 0.25)' : 'none'
                                                }),
                                                option: (base) => ({
                                                    ...base,
                                                    color: 'black' // Change the color of the option labels
                                                }),
                                                multiValue: (styles) => {
                                                    return {
                                                        ...styles,
                                                        backgroundColor: '#d6d6d6;', // You can set your own color or any other style here
                                                        border: '0px solid #d1d1d1',
                                                        margin: '3px 3px 3px 0',
                                                        padding: '2px',
                                                        borderRadius: '4px'
                                                    };
                                                },
                                                multiValueLabel: (styles) => {
                                                    return {
                                                        ...styles,
                                                        color: 'black' // You can set your own color or any other style here
                                                    };
                                                }
                                            }}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-2">
                                        <div
                                            style={{
                                                border: '1px dashed #dee2e6',
                                                padding: '5px',
                                                paddingBottom: '0',
                                                borderRadius: '0.25rem'
                                            }}
                                        >
                                            <Row className="mb-2">
                                                <Col md="9" style={{ marginTop: '5px' }}>
                                                    {locateType === 'name' && (
                                                        <MyGooglePlacesAutocomplete key={refreshKey} refreshChild={refreshChild} />
                                                    )}
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
                                                        <Form.Control
                                                            style={{ padding: '8px 10px' }}
                                                            onChange={(e) => handelChangeLocationType(e)}
                                                            as="select"
                                                        >
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
                                            {/* {extra_amSelectedAdSetLocationsList &&
								extra_amSelectedAdSetLocationsList.length > 0 &&
								extra_amSelectedAdSetLocationsList.map((item, index) => {
									return <div key={item.place_id}>{locationsTemplate(item, index)}</div>;
								})} */}
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="mb-2">
                                        {/* <Form.Control value={formik.values.keyword} onChange={formik.handleChange('keyword')} type="text" placeholder="" /> */}
                                        <ReactTags
                                            allowNew={true}
                                            tags={keywords}
                                            onDelete={handleDeleteKeywords}
                                            onAddition={(e) => handleAdditionKeywords(e)}
                                            placeholderText="Keywords & Interests"
                                        />
                                    </Form.Group>
                                </AccordionTab>
                            </Accordion>
                        </>
                    )}
                </>
            )}
            <div className="campaign_create_footer">
                <Button size="sm" variant="secondary" onClick={() => handleClose()}>
                    Close
                </Button>
                <Button size="sm" disabled={campaignIDCurrent === 0} onClick={() => formik.handleSubmit()} variant="success">
                    Next
                </Button>
            </div>
        </Form>
    );
};

export default CampaignCreateExisting;

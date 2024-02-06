import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Col, Form, Button } from 'react-bootstrap';
// import Datetime from 'react-datetime';
import Select from 'react-select';
// import countryList from 'react-select-country-list';
import ReactTags from 'react-tag-autocomplete';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import { useAdsManagerLibraryConsumer } from '../../common/AdsManagerLibraryContext';
import * as actions_AdsManagerLAT from '../../common/AdsManagerLibraryActionType';
import { adSetUpdateExistingByUserApi } from '../../../../apis/adsManagerApi';
import { STATUS_CODE } from '../../../../utils/statusCodeApi';
import { AlertSuccess, AlertError } from '../../../../utils/alertUtils';
import { useCampaignBasicGetAllByUserQuery } from '../../../../apis/ads-manager-api-slice';

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

const CampaignCreateAndEditExisting = (props) => {
    const { state_AdsManagerLC, dispatch_AdsManagerLC } = useAdsManagerLibraryConsumer();
    const { isRefreshAfterUpdate, amCampaignIdCurrent, amAdSetIdCurrent, amAdsUrlCurrent, amDisplayUrlCurrent, amAdSetItemCurrent } =
        state_AdsManagerLC;

    const { data: data_Campaign, isLoading: isLoading_Campaign } = useCampaignBasicGetAllByUserQuery();

    const [campaignIDCurrent, setCampaignIDCurrent] = useState(0);
    const [adSetIDCurrent, setAdSetIDCurrent] = useState(0);
    const [adSetListCurrentByCampaign, setAdSetListCurrentByCampaign] = useState([]);
    const [isChoosenAdSetOptionID, setIsChoosenAdSetOptionID] = useState(0);
    // const [selectedLocations, setSelectedLocations] = useState([{ value: 'US', label: 'United States' }]);
    // const locationOptions = useMemo(() => countryList().getData(), []);
    const [locations, setLocations] = useState([]);
    const [keywords, setKeyWords] = useState([]);
    //
    // console.log("isChoosenAdSetOptionID: ", isChoosenAdSetOptionID)
    useEffect(() => {
        if (amAdSetItemCurrent) {
            console.log('amAdSetItemCurrent: ', amAdSetItemCurrent);
            if (amAdSetItemCurrent.languages_w_ad_set) {
                if (amAdSetItemCurrent.languages_w_ad_set.length === 0) {
                    setSelectedLanguages({ value: 'All Languages', label: 'All Languages' });
                } else {
                    let tempArr = [];
                    amAdSetItemCurrent.languages_w_ad_set.forEach((item) => {
                        tempArr.push({ value: item.language, label: item.language });
                    });
                    setSelectedLanguages(tempArr);
                }
            }
            if (amAdSetItemCurrent.locations_w_ad_set) {
                let tempArr = [];
                amAdSetItemCurrent.locations_w_ad_set.forEach((item) => {
                    tempArr.push({ id: undefined, name: item.location });
                });
                setLocations(tempArr);
            }
            if (amAdSetItemCurrent.keywords_w_ad_set) {
                let tempArr = [];
                amAdSetItemCurrent.keywords_w_ad_set.forEach((item) => {
                    tempArr.push({ id: undefined, name: item.keyword });
                });
                setKeyWords(tempArr);
            }
        }
    }, [amAdSetItemCurrent]);
    //
    const re =
        /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;
    const schema = Yup.object().shape({
        ad_set_name: Yup.string().label('Ad Set Name').required('*Required'),
        destination_url: Yup.string().label('Destination URL').required('*Required').matches(re, 'URL invalid!'),
        display_url: Yup.string().label('Display URL').matches(re, 'URL invalid!')
    });

    const schema1 = Yup.object().shape({
        destination_url: Yup.string().label('Destination URL').required('*Required').matches(re, 'URL invalid!'),
        display_url: Yup.string().label('Display URL').matches(re, 'URL invalid!')
    });
    console.log('amAdSetItemCurrent.id :', amAdSetItemCurrent ? amAdSetItemCurrent.id : 0);
    const formik = useFormik({
        initialValues: {
            destination_url: amAdsUrlCurrent,
            display_url: amDisplayUrlCurrent,
            //
            age_min: amAdSetItemCurrent ? amAdSetItemCurrent.age_min : 0,
            age_max: amAdSetItemCurrent ? amAdSetItemCurrent.age_max : 0,
            gender: amAdSetItemCurrent ? amAdSetItemCurrent.gender : '',
            //
            ad_set_name: amAdSetItemCurrent ? amAdSetItemCurrent.name : ''
        },
        onSubmit: (values) => {
            isChoosenAdSetOptionID === 0 ? handleSubmitForm(values) : handleSubmitFormOnlyUrl(values);
        },
        validationSchema: isChoosenAdSetOptionID === 0 ? schema : schema1,
        enableReinitialize: true
    });

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
        if (arrTemp.length > 1 && index === arrTemp.length) {
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
        var elem = document.getElementById('idSelectAdSet_EditCampaign');
        if (adSetIDCurrent === 0) {
            elem.classList.add('is-invalid');
            return;
        } else {
            elem.classList.remove('is-invalid');
        }
        let data = {
            destination_url: values.destination_url,
            display_url: values.display_url,
            campaign_id: amCampaignIdCurrent,
            ad_set_id: amAdSetIdCurrent
        };
        console.log('handleSubmitFormOnlyUrl: ', data);
        // return;
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_SHOW_MEDIA_LIBRARY_MODAL,
            payload: true
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_CAMPAIGN_CREATE_AND_EDIT_MODAL,
            payload: 'hidden'
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_MEDIA_LIBRARY_MODAL,
            payload: 'visible'
        });
        //
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_ADS_CAMPAIGN_ID_CURRENT,
            payload: amCampaignIdCurrent
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_ADS_AD_SET_ID_CURRENT,
            payload: amAdSetIdCurrent
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
        //
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_CREATE_CAMPAIGN,
            payload: true
        });
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_CREATE_AD_SETS,
            payload: true
        });
    };

    const handleSubmitForm = (values) => {
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
        var _locations = '';
        if (locations.length > 0) {
            locations.forEach((item, index) => {
                index === locations.length - 1 ? (_locations += item.name) : (_locations += item.name + ';');
            });
        }
        let data = {
            name: values.ad_set_name,
            age_min: values.age_min,
            age_max: values.age_max,
            gender: values.gender,
            destination_url: values.destination_url,
            display_url: values.display_url,
            campaign_id: amCampaignIdCurrent,
            languages: _languages,
            locations: _locations,
            keywords: _keywords,
            ad_set_id: amAdSetIdCurrent
        };
        console.log('handleSubmitForm: ', data);
        // alert("CampaignCreateAndEditExisting.js");
        // return;
        adSetUpdateExistingByUserApi(data).then((resp) => {
            if (resp && resp.status === STATUS_CODE.HTTP_200_OK) {
                // console.log('adSetAddWithCampaignByUserApi: ', resp);
                AlertSuccess('Update existing Ad set successfully!');
                let campaign_id = resp.data ? resp.data.campaign_id : 0;
                let ad_set_id = resp.data ? resp.data.ad_set_id : 0;
                let destination_url = resp.data ? resp.data.destination_url : '';
                let display_url = resp.data ? resp.data.display_url : '';
                let campaign_current = resp.data ? resp.data.campaign : null;
                let ad_set_current = resp.data ? resp.data.ad_set : null;
                dispatch_AdsManagerLC({
                    type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_SHOW_MEDIA_LIBRARY_MODAL,
                    payload: true
                });
                dispatch_AdsManagerLC({
                    type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_CAMPAIGN_CREATE_AND_EDIT_MODAL,
                    payload: 'hidden'
                });
                dispatch_AdsManagerLC({
                    type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_MEDIA_LIBRARY_MODAL,
                    payload: 'visible'
                });
                //
                dispatch_AdsManagerLC({
                    type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_ADS_CAMPAIGN_ID_CURRENT,
                    payload: campaign_id
                });
                dispatch_AdsManagerLC({
                    type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_ADS_AD_SET_ID_CURRENT,
                    payload: ad_set_id
                });
                dispatch_AdsManagerLC({
                    type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_ADS_URL_CURRENT,
                    payload: destination_url
                });
                dispatch_AdsManagerLC({
                    type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_DISPLAY_URL_CURRENT,
                    payload: display_url
                });
                dispatch_AdsManagerLC({
                    type: actions_AdsManagerLAT.AT_SET_IS_REFRESH_AFTER_UPDATE,
                    payload: !isRefreshAfterUpdate
                });
                dispatch_AdsManagerLC({
                    type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_ADS_CAMPAIGN_ITEM_CURRENT,
                    payload: campaign_current
                });
                dispatch_AdsManagerLC({
                    type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_AD_SET_ITEM_CURRENT,
                    payload: ad_set_current
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
            } else {
                AlertError('Error from server!');
            }
        });
    };

    //
    const handleChangeCampaign = (event) => {
        let campaign_id = parseInt(event.target.value);
        listAdSetByCampaign(campaign_id);
        setCampaignIDCurrent(campaign_id);
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
    };

    const listAdSetByCampaign = (campaign_id) => {
        let objIsExist = data_Campaign.find((elem) => {
            return elem.id === amCampaignIdCurrent;
        });
        if (objIsExist) {
            setAdSetListCurrentByCampaign(objIsExist.campaign_w_ad_sets);
            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_AD_SET_ITEM_CURRENT,
                payload: objIsExist.campaign_w_ad_sets && objIsExist.campaign_w_ad_sets.length > 0 ? objIsExist.campaign_w_ad_sets[0] : null
            });
            // console.log('campaign_w_ad_sets: ', objIsExist.campaign_w_ad_sets);
        }
        // console.log('objIsExist: ', objIsExist);
    };

    const handleChangeAdSetOption = (event) => {
        let optionId = parseInt(event.target.value);
        if (optionId === 1) {
            listAdSetByCampaign(campaignIDCurrent);
        }
        setIsChoosenAdSetOptionID(optionId);
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

    const handleChangeLocation = (locate) => {
        let arrTemp = [...locations];
        arrTemp.push({ id: undefined, name: locate.label });
        setLocations(arrTemp);
        // console.log('handleChangeLocation: ', locate);
        // console.log('Locations: ', locations);
    };

    // Location
    const handleDeleteLocation = (i, states) => {
        const newTags = locations.slice(0);
        newTags.splice(i, 1);
        setLocations(newTags);
    };

    const handleAdditionLocations = (tag, state) => {
        const newTags = [].concat(locations, tag);
        setLocations(newTags);
    };

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
    };

    return (
        <Form name="frmCampaignCreateAndEditExisting" onSubmit={formik.handleSubmit}>
            {/* campaignIDCurrent: {amAdSetItemCurrent?amAdSetItemCurrent.name:""} */}
            <Form.Group>
                <Form.Label>
                    <i className="fas fa-folder-open"></i> Campaign
                </Form.Label>
                <Form.Control
                    onChange={(e) => handleChangeCampaign(e)}
                    as="select"
                    value={amCampaignIdCurrent}
                    disabled={data_Campaign && amCampaignIdCurrent !== 0 ? true : false}
                >
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
            {amCampaignIdCurrent > 0 && (
                <>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>
                                <i className="feather icon-grid"></i> Ad Set
                            </Form.Label>
                            <Form.Control onChange={(e) => handleChangeAdSetOption(e)} as="select" value={isChoosenAdSetOptionID}>
                                <option value={0}>Create Ad Set</option>
                                <option value={1}>Use Existing Ad Set</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label style={{ color: 'white' }}>.</Form.Label>
                            {isChoosenAdSetOptionID === 0 && (
                                <Form.Control
                                    value={formik.values.ad_set_name}
                                    onChange={formik.handleChange('ad_set_name')}
                                    onBlur={formik.handleBlur('ad_set_name')}
                                    isInvalid={formik.touched.ad_set_name && formik.errors.ad_set_name ? true : false}
                                    type="text"
                                    placeholder=""
                                />
                            )}
                            {isChoosenAdSetOptionID !== 0 && (
                                <Form.Control id="idSelectAdSet_EditCampaign" onChange={(e) => handleChangeAdSet(e)} as="select">
                                    <option value={0}>Select an Ad set...</option>
                                    {adSetListCurrentByCampaign.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>
                                                {item.name}
                                            </option>
                                        );
                                    })}
                                </Form.Control>
                            )}
                        </Form.Group>
                    </Form.Row>
                    <Form.Group>
                        <Form.Label>Destination URL *Required</Form.Label>
                        <Form.Control
                            value={formik.values.url}
                            onChange={formik.handleChange('url')}
                            onBlur={formik.handleBlur('url')}
                            isInvalid={formik.touched.url && formik.errors.url ? true : false}
                            type="text"
                            placeholder=""
                        />
                    </Form.Group>
                    {isChoosenAdSetOptionID === 0 && (
                        <>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Age range</Form.Label>
                                    <Form.Control value={formik.values.age_min} onChange={formik.handleChange('age_min')} as="select">
                                        {/* <option value="0">Select from</option> */}
                                        {showAgeRangeList().map(({ value, label }, index) => (
                                            <option key={index} value={value}>
                                                {label}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>to</Form.Label>
                                    <Form.Control value={formik.values.age_max} onChange={formik.handleChange('age_max')} as="select">
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
                            <Form.Group>
                                <Form.Label>Locations</Form.Label>
                                <div id="idLocationInput1">
                                    <GooglePlacesAutocomplete
                                        apiKey={GOOGLE_MAP_API_KEY}
                                        onLoadFailed={(error) => console.error('Could not inject Google script', error)}
                                        selectProps={{
                                            locations,
                                            onChange: (locate) => handleChangeLocation(locate),
                                            styles: {
                                                singleValue: (provided) => ({
                                                    ...provided,
                                                    color: 'transparent'
                                                }),
                                                indicatorSeparator: (provided) => ({
                                                    ...provided,
                                                    display: 'none'
                                                }),
                                                indicatorContainer: (provided) => ({
                                                    ...provided,
                                                    display: 'none'
                                                })
                                            }
                                        }}
                                    />
                                    <ReactTags
                                        classNames={{
                                            root: 'react-tags bootstrap-tagsinput',
                                            selectedTag: 'react-tags__selected-tag btn-primary'
                                        }}
                                        allowNew={true}
                                        tags={locations}
                                        onDelete={handleDeleteLocation}
                                        onAddition={(e) => handleAdditionLocations(e)}
                                        placeholderText={null}
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Keywords</Form.Label>

                                <div id="idKeywordInput1">
                                    <ReactTags
                                        classNames={{
                                            root: 'react-tags bootstrap-tagsinput',
                                            selectedTag: 'react-tags__selected-tag btn-primary'
                                        }}
                                        allowNew={true}
                                        tags={keywords}
                                        onDelete={handleDeleteKeywords}
                                        onAddition={(e) => handleAdditionKeywords(e)}
                                        placeholderText="Add new keywords"
                                    />
                                </div>
                            </Form.Group>
                        </>
                    )}
                </>
            )}
            <div className="campaign_create_footer">
                <Button
                    variant="secondary"
                    onClick={() => {
                        handleClose();
                    }}
                >
                    Close
                </Button>
                <Button onClick={() => formik.handleSubmit()} variant="primary">
                    Add Media (Edit)
                </Button>
            </div>
        </Form>
    );
};

export default CampaignCreateAndEditExisting;

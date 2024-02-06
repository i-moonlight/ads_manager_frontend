import React, { useState, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Col, Form, Button, OverlayTrigger, Tooltip, Row, InputGroup } from 'react-bootstrap';
import Datetime from 'react-datetime';
import moment from 'moment';
import Select from 'react-select';
// import countryList from 'react-select-country-list';
import { Accordion, AccordionTab } from 'primereact/accordion';
import ReactTags from 'react-tag-autocomplete';
import { geocodeByLatLng } from 'react-google-places-autocomplete';
import AsyncSelect from 'react-select/async';
//
import { useAdsManagerLibraryConsumer } from '../../common/AdsManagerLibraryContext';
import * as actions_AdsManagerLAT from '../../common/AdsManagerLibraryActionType';
import { campaignEditWithDraftModeByUserApi } from '../../../../apis/adsManagerApi';
import { STATUS_CODE } from '../../../../utils/statusCodeApi';
import { AlertSuccess, AlertError } from '../../../../utils/alertUtils';
//
import { useExtraLibraryConsumer } from '../../../../contexts/extra/ExtraLibraryContext';
import * as actions_ExtraLAT from '../../../../contexts/extra/ExtraLibraryActionType';
//
import LocationsList from './LocationsList';
import MyGooglePlacesAutocomplete from './MyGooglePlacesAutocomplete';
import { useCampaignAddWithDraftModeByUserMutation } from '../../../../apis/ads-manager-api-slice';
//
// const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

const CampaignCreateNew = (props) => {
    const { state_AdsManagerLC, dispatch_AdsManagerLC } = useAdsManagerLibraryConsumer();
    const { isRefreshAfterUpdate, amCampaignIdCurrent, amAdSetIdCurrent, amIsShowMediaLibraryModal } = state_AdsManagerLC;
    //
    const { state_ExtraLC, dispatch_ExtraLC } = useExtraLibraryConsumer();
    const { extra_amSelectedAdSetLocationsList, extra_amSelectedAdSetLocationsTempList } = state_ExtraLC;
    //
    const [keywords, setKeyWords] = useState([]);
    //
    const [isCredit, setIsCredit] = useState(false);
    const [isEmployment, setIsEmployment] = useState(false);
    const [isHousing, setIsHousing] = useState(false);
    const [isSocial, setIsSocial] = useState(false);
    //
    const [isEndStartCompare, setIsEndStartCompare] = useState(true);
    const [dailyBudgetValidate, setDailyBudgetValidate] = useState({
        isZero: false,
        isNotGreaterThanCampaign: true
    });
    const [campaignBudgetValidate, setCampaignBudgetValidate] = useState({
        isZero: false,
        isGreaterThanDailyBudget: true
    });
    const [isMinAgeCompare, setIsMinAgeCompare] = useState(true);
    const [isMaxAgeCompare, setIsMaxAgeCompare] = useState(true);

    const [campaignAddWithDraftModeByUser] = useCampaignAddWithDraftModeByUserMutation();

    const re =
        /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;
    const schema = Yup.object().shape({
        name: Yup.string().label('Name').required('*Required'),
        destination_url: Yup.string()
            .label('Destination URL')
            .required('*Required')
            .matches(re, 'URL is invalid. Please make sure it is formatted properly.'),
        display_url: Yup.string().label('Display URL').matches(re, 'URL is invalid1. Please make sure it is formatted properly.'),
        budget: Yup.number()
            .integer()
            .label('Campaign budget')
            .test('campaignBudgetComparison', 'Campaign budget must exceed lifetime budget.', function (value) {
                const { daily_budget } = this.parent;
                // const isFirstCharZero = value.charAt(0) === '0';
                // console.log(isFirstCharZero);
                if (daily_budget === undefined && value === undefined) {
                    setCampaignBudgetValidate({ isZero: false, isGreaterThanDailyBudget: true });
                    return true;
                }
                if (value === undefined || value === 0) {
                    setCampaignBudgetValidate({ isZero: false, isGreaterThanDailyBudget: true });
                    return true;
                }
                if (value < daily_budget) {
                    setCampaignBudgetValidate({ isZero: false, isGreaterThanDailyBudget: false });
                    return false;
                } else {
                    setCampaignBudgetValidate({ isZero: false, isGreaterThanDailyBudget: true });
                }
                return true;
            }),
        daily_budget: Yup.number()
            .integer()
            .label('Daily budget')
            .test('dailyBudgetComparison', 'Daily budget must not exceed lifetime budget.', function (value) {
                const { budget } = this.parent;
                if (budget === undefined && value === undefined) {
                    setDailyBudgetValidate({ isZero: false, isNotGreaterThanCampaign: true });
                    return true;
                }
                if (budget) {
                    if (value === undefined || value === 0) {
                        setDailyBudgetValidate({ isZero: false, isNotGreaterThanCampaign: true });
                        return true;
                    }
                    if (budget > value) {
                        setDailyBudgetValidate({ isZero: false, isNotGreaterThanCampaign: true });
                        return true;
                    } else {
                        setDailyBudgetValidate({ isZero: false, isNotGreaterThanCampaign: false });
                        return false;
                    }
                } else {
                    setDailyBudgetValidate({ isZero: false, isNotGreaterThanCampaign: true });
                }
                return true;
            }),
        start_date: Yup.string().default(null).nullable(),
        end_date: Yup.string()
            .default(null)
            .nullable()
            .test('dateComparison', 'End Date cannot be earlier than Start Date.', function (value) {
                const { end_date, start_date } = this.parent;
                let _start_date = moment(start_date).format('MM/DD/YYYY');
                let _end_date = moment(end_date).format('MM/DD/YYYY');
                let result = _start_date <= _end_date;
                if (result) setIsEndStartCompare(true);
                else setIsEndStartCompare(false);
                return result;
            })
    });

    const dailyBudgetCheckContentValidate = () => {
        if (dailyBudgetValidate.isZero === true) return 'Must > 0';
        if (dailyBudgetValidate.isNotGreaterThanCampaign === false) return 'Daily budget must not exceed lifetime budget.';
        return 'Daily Budget: Maximum potential spend for campaign each day.';
    };

    const dailyBudgetCheckContentCss = () => {
        if (dailyBudgetValidate.isZero === true || dailyBudgetValidate.isNotGreaterThanCampaign === false) return 'isBudgetCompare_error';
        return '';
    };

    const handleBudgetOnChange = (field, value) => {
        if (value.startsWith('0')) {
            return;
        }
        formik.handleChange(field)(value);
    };

    const campaignBudgetCheckContentValidate = () => {
        if (campaignBudgetValidate.isZero === true) return 'Must > 0';
        if (campaignBudgetValidate.isGreaterThanDailyBudget === false) return 'Campaign budget must exceed lifetime budget.';
        return 'Campaign Budget: Total spend limit for entire duration of campaign.';
    };

    const campaignBudgetCheckContentCss = () => {
        if (campaignBudgetValidate.isZero === true || campaignBudgetValidate.isGreaterThanDailyBudget === false)
            return 'isBudgetCompare_error';
        return '';
    };

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

    const formik = useFormik({
        initialValues: {
            name: '',
            destination_url: '',
            display_url: '',
            budget: '',
            daily_budget: '',
            start_date: null,
            end_date: null,
            credit: false,
            employment: false,
            housing: false,
            social: false,
            //
            age_min: 18,
            age_max: 65,
            gender: 'All Genders'
        },
        onSubmit: (values) => {
            // handleSubmitForm(values);
            if (amCampaignIdCurrent === 0) {
                handleSubmitForm(values);
            } else {
                handleEditSubmitForm(values);
            }
        },
        validationSchema: schema
    });

    // console.log("budget: ", campaignBudgetValidate);
    // console.log("daily_budget: ", dailyBudgetValidate);

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

    const handleSubmitForm = async (values) => {
        let isValidBudget =
            campaignBudgetValidate.isZero === false &&
            campaignBudgetValidate.isGreaterThanDailyBudget === true &&
            dailyBudgetValidate.isZero === false &&
            dailyBudgetValidate.isNotGreaterThanCampaign === true;
        if (!isEndStartCompare || !isValidBudget || !isMaxAgeCompare || !isMinAgeCompare) return;
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
            name: values.name,
            budget: values.budget ? values.budget : null,
            daily_budget: values.daily_budget ? values.daily_budget : null,
            status: 'DRAFT',
            start_date: values.start_date ? values.start_date.format('YYYY-MM-DD') : null,
            end_date: values.end_date ? values.end_date.format('YYYY-MM-DD') : null,
            credit: isCredit,
            employment: isEmployment,
            housing: isHousing,
            social: isSocial,
            destination_url: values.destination_url,
            display_url: values.display_url,
            ad_set: {
                name: values.name + ' New Ad Set',
                status: 'DRAFT',
                spend_limit: 0,
                age_min: values.age_min,
                age_max: values.age_max,
                gender: values.gender,
                languages: _languages,
                locations: JSON.stringify(_locations),
                keywords: _keywords
            }
        };

        try {
            const campaignData = await campaignAddWithDraftModeByUser(data).unwrap();

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
            //
            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_ADS_CAMPAIGN_ID_CURRENT,
                payload: campaignData.campaign_id
            });
            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_ADS_AD_SET_ID_CURRENT,
                payload: campaignData.ad_set_id
            });
            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_ADS_URL_CURRENT,
                payload: campaignData.destination_url
            });
            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_DISPLAY_URL_CURRENT,
                payload: campaignData.display_url
            });
            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_ADS_CAMPAIGN_ITEM_CURRENT,
                payload: campaignData.campaign
            });
            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_AD_SET_ITEM_CURRENT,
                payload: campaignData.ad_set
            });
            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_CREATE_CAMPAIGN,
                payload: true
            });
            dispatch_AdsManagerLC({
                type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_CREATE_AD_SETS,
                payload: true
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

    const handleEditSubmitForm = (values) => {
        let isValidBudget =
            campaignBudgetValidate.isZero === false &&
            campaignBudgetValidate.isGreaterThanDailyBudget === true &&
            dailyBudgetValidate.isZero === false &&
            dailyBudgetValidate.isNotGreaterThanCampaign === true;
        if (!isEndStartCompare || !isValidBudget) return;
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
        // console.log('handleEditSubmitForm_values: ', values);
        let data = {
            name: values.name,
            budget: values.budget ? values.budget : null,
            daily_budget: values.daily_budget ? values.daily_budget : null,
            status: 'DRAFT',
            start_date: values.start_date ? values.start_date.format('YYYY-MM-DD') : null,
            end_date: values.start_date ? values.start_date.format('YYYY-MM-DD') : null,
            credit: isCredit,
            employment: isEmployment,
            housing: isHousing,
            social: isSocial,
            destination_url: values.destination_url,
            display_url: values.display_url,
            ad_set: {
                name: values.name + ' New Ad Set',
                status: 'DRAFT',
                spend_limit: 0,
                age_min: values.age_min,
                age_max: values.age_max,
                gender: values.gender,
                languages: _languages,
                locations: JSON.stringify(_locations),
                keywords: _keywords,
                ad_set_id: amAdSetIdCurrent
            },
            campaign_id: amCampaignIdCurrent
        };
        // console.log('handleEditSubmitForm_data: ', data);
        // alert('handleEditSubmitForm_data');
        // return;
        campaignEditWithDraftModeByUserApi(data).then((resp) => {
            if (resp && resp.status === STATUS_CODE.HTTP_200_OK) {
                // console.log('campaignEditWithDraftModeByUserApi: ', resp);
                let campaign_id = resp.data ? resp.data.campaign_id : 0;
                let ad_set_id = resp.data ? resp.data.ad_set_id : 0;
                let destination_url = resp.data ? resp.data.destination_url : '';
                let display_url = resp.data ? resp.data.display_url : '';
                let campaign_current = resp.data ? resp.data.campaign : null;
                let ad_set_current = resp.data ? resp.data.ad_set : null;
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
            } else {
                AlertError('Error from server!');
            }
        });

        // if (amIsShowMediaLibraryModal) {
        //     dispatch_AdsManagerLC({
        //         type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_MEDIA_LIBRARY_MODAL,
        //         payload: 'visible'
        //     });
        // } else {
        //     dispatch_AdsManagerLC({
        //         type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_SHOW_MEDIA_LIBRARY_MODAL,
        //         payload: true
        //     });
        // }
        // dispatch_AdsManagerLC({
        //     type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_CAMPAIGN_CREATE_MODAL,
        //     payload: 'hidden'
        // });
        // dispatch_AdsManagerLC({
        //     type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_VISIBILITY_MEDIA_LIBRARY_MODAL,
        //     payload: 'visible'
        // });
        // //
        // dispatch_AdsManagerLC({
        //     type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_CREATE_CAMPAIGN,
        //     payload: true
        // });
        // dispatch_AdsManagerLC({
        //     type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_IS_CREATE_AD_SETS,
        //     payload: true
        // });
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

    // const startLocationsTemp = (name) => {
    //     return (
    //         <div>
    //             <i style={{ color: 'green' }} className="pi pi-map-marker"></i> <span>{name}</span>
    //         </div>
    //     );
    // };

    // const handleRemoveLocationItem = (name) => {
    //     let arrTemp = [...extra_amSelectedAdSetLocationsList];
    //     arrTemp = arrTemp.filter((item) => {
    //         return item.name !== name;
    //     });
    //     dispatch_ExtraLC({
    //         type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_LOCATIONS_LIST,
    //         payload: arrTemp
    //     });
    //     console.log('handleRemoveLocationItem: ', name);
    // };

    // const endLocationsTemp = (name) => {
    //     return (
    //         <i
    //             onClick={() => {
    //                 handleRemoveLocationItem(name);
    //             }}
    //             style={{ cursor: 'pointer', fontSize: 'smaller' }}
    //             className="pi pi-times"
    //         ></i>
    //     );
    // };

    // function useOnClickOutside(ref, handler) {
    //     useEffect(
    //         () => {
    //             const listener = (event) => {
    //                 // Do nothing if clicking ref's element or descendent elements
    //                 if (!ref.current || ref.current.contains(event.target)) {
    //                     return;
    //                 }
    //                 handler(event);
    //             };
    //             document.addEventListener('mousedown', listener);
    //             document.addEventListener('touchstart', listener);
    //             return () => {
    //                 document.removeEventListener('mousedown', listener);
    //                 document.removeEventListener('touchstart', listener);
    //             };
    //         },
    //         // Add ref and handler to effect dependencies
    //         // It's worth noting that because passed in handler is a new ...
    //         // ... function on every render that will cause this effect ...
    //         // ... callback/cleanup to run every render. It's not a big deal ...
    //         // ... but to optimize you can wrap handler in useCallback before ...
    //         // ... passing it into this hook.
    //         [ref, handler]
    //     );
    // }

    // useOnClickOutside(overlayRef, (e) => {
    //     console.log('useClickOutside: ', overlayRef.current);
    //     let _idString = overlayRef.current.id;
    //     console.log('useClickOutside_idString: ', _idString);
    //     if (currentRadius && currentPlaceId.length > 0 && currentPlaceId === _idString) {
    //         let arrTemp = [...extra_amSelectedAdSetLocationsList];
    //         const updatedArray = arrTemp.map((item) => {
    //             if (item.place_id === _idString) {
    //                 return { ...item, radius: currentRadius };
    //             }
    //             return item;
    //         });
    //         dispatch_ExtraLC({
    //             type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_AD_SET_SELECTED_LOCATIONS_LIST,
    //             payload: updatedArray
    //         });
    //     }
    // });

    // const locationsTemplate = (itemLocation, index) => {
    //     const items = [
    //         {
    //             label: '+' + String(itemLocation.radius) + 'mi',
    //             icon: null,
    //             items: [
    //                 [
    //                     {
    //                         label: (
    //                             <div key={currentPlaceId} ref={overlayRef} id={String(itemLocation.place_id)}>
    //                                 <div>Current city only</div>
    //                                 <hr></hr>
    //                                 {/* <div>Cities within radius</div> */}
    //                                 <div>
    //                                     {/* <SliderLocation itemLocation={itemLocation} onRenderParent={handleRenderParent} /> */}
    //                                     <SliderLocation itemLocation={itemLocation} onTransferValue={handleTransferValue} />
    //                                 </div>
    //                             </div>
    //                         ),
    //                         items: []
    //                     }
    //                 ]
    //             ]
    //         }
    //     ];
    //     return (
    //         <>
    //             <MegaMenu
    //                 style={{ fontSize: 'inherit' }}
    //                 model={items}
    //                 start={startLocationsTemp(itemLocation.name)}
    //                 end={endLocationsTemp(itemLocation.name)}
    //             />
    //         </>
    //     );
    // };

    // const handleTransferValue = (_value, itemLocation) => {
    //     console.log('handleTransferValue: ', _value);
    //     console.log('handleTransferValue_itemLocation: ', itemLocation.place_id);
    //     setCurrentRadius(_value);
    //     setCurrentPlaceId(itemLocation.place_id);
    // };

    const handleKeyPress = (event) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
        if (keyValue === '.' || keyValue === '-') {
            event.preventDefault();
        }
    };

    // ===================

    const [locateType, setLocateType] = useState('name');
    const [currentCoordinate, setCurrentCoordinate] = useState('');
    const asyncSelectRef = useRef(null);

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

    const handleMenuClose = () => {
        console.log('handleMenuClose');
    };

    // console.log('extra_amSelectedAdSetLocationsTempList:::', extra_amSelectedAdSetLocationsTempList);

    // ================

    // function handleInputChange(inputValue, actionMeta) {
    //     // setSelectedLocations([]);
    //     console.log('Input changed:', inputValue);
    //     let arrCoordinate = inputValue.split(', ');
    //     if (arrCoordinate && arrCoordinate.length === 2) {
    //         let lat = Number(arrCoordinate[0]);
    //         let lng = Number(arrCoordinate[1]);
    //         console.log(lat);
    //         geocodeByLatLng({ lat: lat, lng: lng })
    //             .then((results) => {
    //                 console.log(results);
    //                 var arrTemp = [];
    //                 results.map((item, key) => {
    //                     if (key) {
    //                         arrTemp.push({ value: item.place_id, label: item.formatted_address });
    //                     }
    //                     return '';
    //                 });
    //                 setSelectedLocations(arrTemp);
    //                 console.log('setSelectedLocations:::');
    //             })
    //             .catch((error) => console.error(error));
    //     }
    // }

    // =========

    const [refreshKey, setRefreshKey] = useState(0);

    const refreshChild = () => {
        setRefreshKey((prevKey) => prevKey + 1);
    };

    return (
        <Form name="frmCampaignCreateNew">
            {/* {amCampaignIdCurrent} - {amAdSetIdCurrent} - {amAdsUrlCurrent} */}
            {/* {String(amIsCreateCampaign)} */}
            <OverlayTrigger placement="left" overlay={<Tooltip>Campaign Name: Internal reference, not seen by audience.</Tooltip>}>
                <Form.Control
                    value={formik.values.name}
                    onChange={formik.handleChange('name')}
                    onBlur={formik.handleBlur('name')}
                    isInvalid={formik.touched.name && formik.errors.name ? true : false}
                    type="text"
                    placeholder="Campaign Name *Required"
                    className="mb-2 mt-2"
                />
            </OverlayTrigger>
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
                    overlay={<Tooltip>Display URL: The web address viewed with the ad. Preferably, use your domain name.</Tooltip>}
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
            <Accordion className="noPadding">
                <AccordionTab
                    header={
                        <span>
                            <i className="fas fa-dollar-sign" style={{ marginRight: '10px', marginLeft: '4px', fontWeight: 'bold' }}></i>
                            Budget & Schedule
                        </span>
                    }
                >
                    <Form.Row>
                        <OverlayTrigger placement="left" overlay={<Tooltip>{campaignBudgetCheckContentValidate()} </Tooltip>}>
                            <Form.Group as={Col} className="mb-2">
                                <InputGroup className={campaignBudgetCheckContentCss()}>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text style={{ padding: '0px 18px' }} id="inputGroup-sizing-default">
                                            $
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        id="idCampaignBudget"
                                        value={formik.values.budget}
                                        onChange={(e) => handleBudgetOnChange('budget', e.target.value)}
                                        onBlur={formik.handleBlur('budget')}
                                        // isInvalid={formik.touched.budget && formik.errors.budget ? true : false}
                                        type="number"
                                        placeholder="Campaign Budget"
                                        onKeyPress={handleKeyPress}
                                    />
                                </InputGroup>
                            </Form.Group>
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="right"
                            overlay={<Tooltip id={`tooltip-daily-budget`}>{dailyBudgetCheckContentValidate()}</Tooltip>}
                        >
                            <Form.Group as={Col} className="mb-2">
                                <InputGroup className={dailyBudgetCheckContentCss()}>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text style={{ padding: '0px 18px' }} id="inputGroup-sizing-default">
                                            $
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        id="idDailyBudget"
                                        value={formik.values.daily_budget}
                                        onChange={(e) => handleBudgetOnChange('daily_budget', e.target.value)}
                                        // onChange={formik.handleChange('daily_budget')}
                                        onBlur={formik.handleBlur('daily_budget')}
                                        // isInvalid={formik.touched.daily_budget && formik.errors.daily_budget ? true : false}
                                        type="number"
                                        placeholder="Daily Budget"
                                        onKeyPress={handleKeyPress}
                                    />
                                </InputGroup>
                            </Form.Group>
                        </OverlayTrigger>
                    </Form.Row>
                    <Form.Row>
                        <OverlayTrigger
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-start-date`}>
                                    Campaign will start running on this date. Leave it blank to start immediately.{' '}
                                </Tooltip>
                            }
                        >
                            <Form.Group as={Col} className="mb-2">
                                <Datetime
                                    value={formik.values.start_date ? moment(formik.values.start_date).format('MM/DD/YYYY') : ''}
                                    onChange={(dateFromValue) => {
                                        formik.setFieldValue('start_date', dateFromValue);
                                    }}
                                    timeFormat={false}
                                    renderInput={(props, openCalendar) => {
                                        return (
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text
                                                        id="inputGroup-sizing-default"
                                                        style={{ cursor: 'pointer', backgroundColor: '#f4f7fa' }}
                                                        onClick={openCalendar}
                                                    >
                                                        <i className="far fa-calendar-alt"></i>
                                                    </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control
                                                    readOnly
                                                    onClick={openCalendar}
                                                    value={
                                                        formik.values.start_date
                                                            ? moment(formik.values.start_date).format('MM/DD/YYYY')
                                                            : ''
                                                    }
                                                    placeholder="Start date"
                                                    style={{ backgroundColor: 'transparent' }}
                                                />
                                            </InputGroup>
                                        );
                                    }}
                                />
                            </Form.Group>
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="right"
                            overlay={
                                <Tooltip id={`tooltip-end-date`}>
                                    {isEndStartCompare
                                        ? 'Campaign will stop running on this date. Leave blank to run continously.'
                                        : 'End Date cannot be earlier than Start Date'}
                                </Tooltip>
                            }
                        >
                            <Form.Group as={Col} className="mb-2">
                                <Datetime
                                    value={formik.values.end_date ? moment(formik.values.end_date).format('MM/DD/YYYY') : ''}
                                    onChange={(dateFromValue) => {
                                        formik.setFieldValue('end_date', dateFromValue);
                                    }}
                                    timeFormat={false}
                                    renderInput={(props, openCalendar) => {
                                        return (
                                            <InputGroup className={isEndStartCompare ? '' : 'isEndStartCompare_error'}>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text
                                                        id="inputGroup-sizing-default"
                                                        style={{ cursor: 'pointer', backgroundColor: '#f4f7fa' }}
                                                        onClick={openCalendar}
                                                    >
                                                        <i className="far fa-calendar-alt"></i>
                                                    </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control
                                                    readOnly
                                                    onClick={openCalendar}
                                                    value={
                                                        formik.values.end_date ? moment(formik.values.end_date).format('MM/DD/YYYY') : ''
                                                    }
                                                    placeholder="End date"
                                                    style={{ backgroundColor: 'transparent' }}
                                                />
                                            </InputGroup>
                                        );
                                    }}
                                />
                            </Form.Group>
                        </OverlayTrigger>
                    </Form.Row>
                </AccordionTab>
            </Accordion>

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
                        <div style={{ border: '1px dashed #dee2e6', padding: '5px', paddingBottom: '0', borderRadius: '0.25rem' }}>
                            <Row className="mb-2">
                                <Col style={{ marginTop: '5px' }}>
                                    {locateType === 'name' && <MyGooglePlacesAutocomplete key={refreshKey} refreshChild={refreshChild} />}
                                    {locateType === 'coordinate' && (
                                        <AsyncSelect
                                            ref={asyncSelectRef}
                                            cacheOptions
                                            defaultOptions={extra_amSelectedAdSetLocationsTempList}
                                            loadOptions={loadOptions}
                                            onChange={handleSelectAddressByPlaceId}
                                            placeholder="Add GPS coordinates (Latitude, Longitude)"
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
                                            onMenuClose={handleMenuClose}
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
                        {/* <Select
            		        options={locationOptions}
            		        value={locations}
            		        onChange={handelChangeLocation}
            		        isMulti
            		        className="basic-multi-select"
            		        classNamePrefix="select"
            		    /> */}
                    </Form.Group>
                    <Form.Group className="mb-2">
                        {/* <Form.Control value={formik.values.keyword} onChange={formik.handleChange('keyword')} type="text" placeholder="" /> */}
                        <ReactTags
                            allowNew={true}
                            tags={keywords}
                            onDelete={handleDeleteKeywords}
                            onAddition={(e) => handleAdditionKeywords(e)}
                            placeholderText="Keywords, Interests"
                        />
                    </Form.Group>
                </AccordionTab>
            </Accordion>

            <Accordion className="noPadding">
                <AccordionTab
                    header={
                        <span>
                            <i className="fas fa-certificate" style={{ marginRight: '10px' }}></i>Special Categories
                        </span>
                    }
                >
                    <div className="special_categories_content">
                        <div className="special_categories_item">
                            <div className="special_categories_item__check">
                                <Form.Group>
                                    <div className="checkbox d-inline checkbox-fill">
                                        <Form.Control
                                            onChange={(e) => setIsCredit(e.target.checked)}
                                            type="checkbox"
                                            name="isCredit"
                                            id="isCredit"
                                            defaultChecked={false}
                                        />
                                        <Form.Label htmlFor="isCredit" className="cr"></Form.Label>
                                    </div>
                                </Form.Group>
                            </div>
                            <div className="special_categories_item_content">
                                <div className="special_categories_item_content__title">
                                    Credit <i className="fas fa-credit-card"></i>
                                </div>
                                <div className="special_categories_item_content__note">
                                    Ads for credit card offers, auto loans, long-term financing or other related opportunities.
                                </div>
                            </div>
                        </div>
                        <div className="special_categories_item">
                            <div className="special_categories_item__check">
                                <Form.Group>
                                    <div className="checkbox d-inline checkbox-fill">
                                        <Form.Control
                                            onChange={(e) => setIsEmployment(e.target.checked)}
                                            type="checkbox"
                                            name="isEmployment"
                                            id="isEmployment"
                                            defaultChecked={false}
                                        />
                                        <Form.Label htmlFor="isEmployment" className="cr"></Form.Label>
                                    </div>
                                </Form.Group>
                            </div>
                            <div className="special_categories_item_content">
                                <div className="special_categories_item_content__title">
                                    Employment <i className="fas fa-briefcase"></i>
                                </div>
                                <div className="special_categories_item_content__note">
                                    Ads for job offers, internships, professional certification programs or other related opportunities.
                                </div>
                            </div>
                        </div>
                        <div className="special_categories_item">
                            <div className="special_categories_item__check">
                                <Form.Group>
                                    <div className="checkbox d-inline checkbox-fill">
                                        <Form.Control
                                            onChange={(e) => setIsHousing(e.target.checked)}
                                            type="checkbox"
                                            name="isHousing"
                                            id="isHousing"
                                            defaultChecked={false}
                                        />
                                        <Form.Label htmlFor="isHousing" className="cr"></Form.Label>
                                    </div>
                                </Form.Group>
                            </div>
                            <div className="special_categories_item_content">
                                <div className="special_categories_item_content__title">
                                    Housing <i className="fas fa-home"></i>
                                </div>
                                <div className="special_categories_item_content__note">
                                    Ads for real estate listings, homeowners insurance, mortgage loans or other related opportunities.
                                </div>
                            </div>
                        </div>
                        <div className="special_categories_item">
                            <div className="special_categories_item__check">
                                <Form.Group>
                                    <div className="checkbox d-inline checkbox-fill">
                                        <Form.Control
                                            onChange={(e) => setIsSocial(e.target.checked)}
                                            type="checkbox"
                                            name="isSocial"
                                            id="isSocial"
                                            defaultChecked={false}
                                        />
                                        <Form.Label htmlFor="isSocial" className="cr"></Form.Label>
                                    </div>
                                </Form.Group>
                            </div>
                            <div className="special_categories_item_content">
                                <div className="special_categories_item_content__title">
                                    Social issues, elections, or politics <i className="fas fa-bullhorn"></i>
                                </div>
                                <div className="special_categories_item_content__note">
                                    Ads about social issues (such as the economy, or civil and social rights), elections, or political
                                    figures or campaigns.
                                </div>
                            </div>
                        </div>
                    </div>
                </AccordionTab>
            </Accordion>
            <div className="campaign_create_footer">
                <Button variant="secondary" onClick={() => handleClose()}>
                    Close
                </Button>
                <Button onClick={() => formik.handleSubmit()} variant="success">
                    Next
                </Button>
            </div>
        </Form>
    );
};
// logic
export default CampaignCreateNew;

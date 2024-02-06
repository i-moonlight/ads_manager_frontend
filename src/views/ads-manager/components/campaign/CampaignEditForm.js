import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Col, Form, Button, InputGroup } from 'react-bootstrap';
import Datetime from 'react-datetime';
import { Accordion, AccordionTab } from 'primereact/accordion';
import moment from 'moment';

import { AlertSuccess, AlertError } from '../../../../utils/alertUtils';
import { useCampaignUpdateByUserMutation } from '../../../../apis/ads-manager-api-slice';

const CampaignEditForm = (props) => {
    const { campaignUpdating } = props;

    const [isCredit, setIsCredit] = useState(false);
    const [isEmployment, setIsEmployment] = useState(false);
    const [isHousing, setIsHousing] = useState(false);
    const [isSocial, setIsSocial] = useState(false);

    const [dailyBudgetValidate, setDailyBudgetValidate] = useState({
        isZero: false,
        isNotGreaterThanCampaign: true
    });
    const [campaignBudgetValidate, setCampaignBudgetValidate] = useState({
        isZero: false,
        isGreaterThanDailyBudget: true
    });

    const [campaignUpdateByUser] = useCampaignUpdateByUserMutation();

    useEffect(() => {
        if (campaignUpdating) {
            setIsCredit(campaignUpdating.credit);
            setIsEmployment(campaignUpdating.employment);
            setIsHousing(campaignUpdating.housing);
            setIsSocial(campaignUpdating.social);
        }
    }, [campaignUpdating]);

    const schema = Yup.object().shape({
        name: Yup.string().label('Name').required('*Required'),
        start_date: Yup.string().default(null).nullable(),
        end_date: Yup.string()
            .default(null)
            .nullable()
            .test('dateComparison', 'End Date cannot be earlier than Start Date', function (value) {
                const { end_date, start_date } = this.parent;
                let _start_date = new Date(start_date);
                let _end_date = new Date(end_date);
                let result = _start_date <= _end_date;
                return result;
            })
            .test('future-end-date', 'End Date cannot be in past', function (value) {
                const formattedEndDate = new Date(value);
                const currentDate = new Date(new Date().setHours(0, 0, 0, 0));

                return formattedEndDate >= currentDate;
            }),
        budget: Yup.number()
            .integer()
            .label('Campaign budget')
            .test('campaignBudgetComparison', 'Campaign budget must exceed lifetime budget.', function (value) {
                const { daily_budget } = this.parent;
                // console.log("budget_value: ", this.parent);
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
                    // console.log("daily_budget: vao day");
                    if (isNaN(daily_budget)) {
                        setDailyBudgetValidate({ isZero: false, isNotGreaterThanCampaign: true });
                    }
                    setCampaignBudgetValidate({ isZero: false, isGreaterThanDailyBudget: true });
                }
                return true;
            })
            .transform((value) => (isNaN(value) ? 0 : value)),
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
                    // console.log("budget_value::: ", this.parent);
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
            })
            .transform((value) => (isNaN(value) ? 0 : value))
        // budget: Yup.number().integer().label('Campaign budget').typeError('Must be number!').moreThan(0, '>0'),
        // daily_budget: Yup.number().integer().label('Daily budget').typeError('Must be number!').moreThan(0, '>0')
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

    // console.log("budget: ", campaignBudgetValidate);
    // console.log("daily_budget: ", dailyBudgetValidate);

    const formik = useFormik({
        initialValues: {
            name: campaignUpdating.name,
            budget: campaignUpdating.budget,
            daily_budget: campaignUpdating.daily_budget,
            start_date: campaignUpdating.start_date ? moment(campaignUpdating.start_date).format('MM/DD/YYYY') : null,
            end_date: campaignUpdating.end_date ? moment(campaignUpdating.end_date).format('MM/DD/YYYY') : null
            // start_date: campaignUpdating.start_date?new Date(campaignUpdating.start_date):null,
            // end_date: campaignUpdating.end_date?new Date(campaignUpdating.end_date):null
        },
        onSubmit: (values) => {
            handleSubmitForm(values);
        },
        validationSchema: schema
        // enableReinitialize: true
    });

    //
    const handleSubmitForm = async (values) => {
        let isValidBudget =
            campaignBudgetValidate.isZero === false &&
            campaignBudgetValidate.isGreaterThanDailyBudget === true &&
            dailyBudgetValidate.isZero === false &&
            dailyBudgetValidate.isNotGreaterThanCampaign === true;
        if (!isValidBudget) return;

        const data = {
            ...values,
            budget: values.budget ? values.budget : null,
            daily_budget: values.daily_budget ? values.daily_budget : null,
            start_date: values.start_date ? moment(values.start_date).format('YYYY-MM-DD') : null,
            end_date: values.end_date ? moment(values.end_date).format('YYYY-MM-DD') : null,
            credit: isCredit,
            employment: isEmployment,
            housing: isHousing,
            social: isSocial,
            id: campaignUpdating.id
        };

        try {
            await campaignUpdateByUser(data).unwrap();
            AlertSuccess('Update successfully!');
        } catch (error) {
            AlertError('Error from server!');
        }

        props.hideModal(false);
    };

    const handleKeyPress = (event) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);

        if (keyValue === '.' || keyValue === '-') {
            event.preventDefault();
        }
    };

    return (
        <Form name="frmCampaignEditForm">
            <Form.Group>
                <Form.Label>Campaign Name * Required</Form.Label>
                <Form.Control
                    value={formik.values.name}
                    onChange={formik.handleChange('name')}
                    onBlur={formik.handleBlur('name')}
                    isInvalid={formik.touched.name && formik.errors.name ? true : false}
                    type="text"
                    //placeholder="Campaign Name *Required"
                    className="mb-3"
                />
            </Form.Group>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Total Budget</Form.Label>
                    <InputGroup className={`mb-2 ${campaignBudgetCheckContentCss()}`}>
                        <InputGroup.Prepend>
                            <InputGroup.Text style={{ padding: '0px 18px' }} id="inputGroup-sizing-default">
                                $
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            value={formik.values.budget ? formik.values.budget : ''}
                            onChange={(e) => handleBudgetOnChange('budget', e.target.value)}
                            // onChange={formik.handleChange('budget')}
                            onBlur={formik.handleBlur('budget')}
                            // isInvalid={formik.touched.budget && formik.errors.budget ? true : false}
                            type="number"
                            //placeholder="Campaign Budget"
                            onKeyPress={handleKeyPress}
                        />
                    </InputGroup>
                    {(campaignBudgetValidate.isZero === true || campaignBudgetValidate.isGreaterThanDailyBudget === false) && (
                        <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
                            {campaignBudgetCheckContentValidate()}
                        </Form.Control.Feedback>
                    )}
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Daily Budget</Form.Label>
                    <InputGroup className={`mb-2 ${dailyBudgetCheckContentCss()}`}>
                        <InputGroup.Prepend>
                            <InputGroup.Text style={{ padding: '0px 18px' }} id="inputGroup-sizing-default">
                                $
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            value={formik.values.daily_budget ? formik.values.daily_budget : ''}
                            onChange={(e) => handleBudgetOnChange('daily_budget', e.target.value)}
                            // onChange={formik.handleChange('daily_budget')}
                            onBlur={formik.handleBlur('daily_budget')}
                            // isInvalid={formik.touched.daily_budget && formik.errors.daily_budget ? true : false}
                            type="number"
                            //placeholder="Daily Budget"
                            onKeyPress={handleKeyPress}
                        />
                    </InputGroup>
                    {(dailyBudgetValidate.isZero === true || dailyBudgetValidate.isNotGreaterThanCampaign === false) && (
                        <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
                            {dailyBudgetCheckContentValidate()}
                        </Form.Control.Feedback>
                    )}
                </Form.Group>
            </Form.Row>
            <Form.Row className="mb-2">
                <Form.Group as={Col}>
                    <Form.Label>Start Date</Form.Label>
                    <Datetime
                        value={formik.values.start_date ? moment(formik.values.start_date).format('MM/DD/YYYY') : ''}
                        onChange={(dateFromValue) => {
                            formik.setFieldValue('start_date', dateFromValue);
                        }}
                        timeFormat={false}
                        renderInput={(props, openCalendar) => {
                            return (
                                <>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text
                                                id="inputGroup-sizing-default"
                                                style={{ cursor: props.disabled ? 'auto' : 'pointer', backgroundColor: '#f4f7fa' }}
                                                onClick={!props.disabled && openCalendar}
                                            >
                                                <i className="far fa-calendar-alt"></i>
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            readOnly
                                            onClick={openCalendar}
                                            value={formik.values.start_date ? moment(formik.values.start_date).format('MM/DD/YYYY') : ''}
                                            style={{ backgroundColor: 'transparent' }}
                                            disabled={props.disabled}
                                        />
                                    </InputGroup>
                                    {props.disabled && <Form.Text muted>Start Date can't be changed after started</Form.Text>}
                                </>
                            );
                        }}
                        inputProps={{ disabled: campaignUpdating.status !== 'DRAFT' }}
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>End Date</Form.Label>
                    <Datetime
                        value={formik.values.end_date ? moment(formik.values.end_date).format('MM/DD/YYYY') : ''}
                        onChange={(dateFromValue) => {
                            formik.setFieldValue('end_date', dateFromValue);
                        }}
                        timeFormat={false}
                        renderInput={(props, openCalendar) => {
                            return (
                                <>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text
                                                id="inputGroup-sizing-default"
                                                style={{ cursor: props.disabled ? 'auto' : 'pointer', backgroundColor: '#f4f7fa' }}
                                                onClick={!props.disabled && openCalendar}
                                            >
                                                <i className="far fa-calendar-alt"></i>
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            readOnly
                                            onClick={openCalendar}
                                            value={formik.values.end_date ? moment(formik.values.end_date).format('MM/DD/YYYY') : ''}
                                            style={{ backgroundColor: 'transparent' }}
                                            disabled={props.disabled}
                                        />
                                    </InputGroup>
                                    {props.disabled && <Form.Text muted>End Date can't be changed after started</Form.Text>}
                                </>
                            );
                        }}
                        //inputProps={{ disabled: campaignUpdating.status !== 'DRAFT' }}
                    />
                    {formik.touched.end_date && formik.errors.end_date && (
                        <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
                            {formik.errors.end_date}
                        </Form.Control.Feedback>
                    )}
                </Form.Group>
            </Form.Row>

            <Accordion>
                <AccordionTab header="Special Categories">
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
                                            defaultChecked={isCredit}
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
                                            defaultChecked={isEmployment}
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
                                            defaultChecked={isHousing}
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
                                            defaultChecked={isSocial}
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
                <Button variant="secondary" onClick={() => props.hideModal(false)}>
                    Close
                </Button>
                <Button onClick={() => formik.handleSubmit()} variant="success">
                    Save change
                </Button>
            </div>
        </Form>
    );
};

export default CampaignEditForm;

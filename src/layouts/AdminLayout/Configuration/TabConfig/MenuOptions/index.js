import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { ConfigContext } from '../../../../../contexts/ConfigContext';
import * as actionType from '../../../../../store/actions';

const MenuOptions = () => {
    const configContext = useContext(ConfigContext);
    const { layout, navDropdownIcon, navListIcon, navActiveListColor, navListTitleColor, navListTitleHide } = configContext.state;
    const { dispatch } = configContext;

    const onChangeNavListTitleColor = (color) => {
        dispatch({ type: actionType.NAV_LIST_TITLE_COLOR, navListTitleColor: color });
    };

    const onChangeNavDropDownIcon = (icon) => {
        dispatch({ type: actionType.NAV_DROPDOWN_ICON, navDropdownIcon: icon });
    };

    const onChangeNavListIcon = (icon) => {
        dispatch({ type: actionType.NAV_LIST_ICON, navListIcon: icon });
    };

    const onChangeNavActiveListColor = (color) => {
        dispatch({ type: actionType.NAV_ACTIVE_LIST_COLOR, navActiveListColor: color });
    };

    let menuOptions = '';
    if (layout !== 'horizontal') {
        menuOptions = (
            <div>
                <h6>Menu Title Color</h6>
                <div className="theme-color title-color small">
                    <Link
                        to="#"
                        onClick={() => onChangeNavListTitleColor('title-default')}
                        className={navListTitleColor === 'title-default' ? 'active' : ''}
                        data-value="title-default"
                    >
                        <span />
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeNavListTitleColor('title-blue')}
                        className={navListTitleColor === 'title-blue' ? 'active' : ''}
                        data-value="title-blue"
                    >
                        <span />
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeNavListTitleColor('title-red')}
                        className={navListTitleColor === 'title-red' ? 'active' : ''}
                        data-value="title-red"
                    >
                        <span />
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeNavListTitleColor('title-purple')}
                        className={navListTitleColor === 'title-purple' ? 'active' : ''}
                        data-value="title-purple"
                    >
                        <span />
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeNavListTitleColor('title-lightblue')}
                        className={navListTitleColor === 'title-lightblue' ? 'active' : ''}
                        data-value="title-lightblue"
                    >
                        <span />
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeNavListTitleColor('title-dark')}
                        className={navListTitleColor === 'title-dark' ? 'active' : ''}
                        data-value="title-dark"
                    >
                        <span />
                        <span />
                    </Link>
                </div>
                <div className="form-group mb-0">
                    <div className="switch switch-primary d-inline m-r-10">
                        <input
                            type="checkbox"
                            id="caption-hide"
                            checked={navListTitleHide}
                            onChange={() => dispatch({ type: actionType.NAV_LIST_TITLE_HIDE })}
                        />
                        <label htmlFor="caption-hide" className="cr" />
                    </div>
                    <label>Menu Title Hide</label>
                </div>
            </div>
        );
    }

    return (
        <React.Fragment>
            <div className="config-scroll">
                <PerfectScrollbar>
                    <h6>Menu Dropdown Icon</h6>
                    <div className="theme-color">
                        <div className="form-group d-inline">
                            <div className="radio radio-primary d-inline">
                                <input
                                    type="radio"
                                    name="radio-in-1"
                                    id="drpicon-1"
                                    checked={navDropdownIcon === 'style1'}
                                    onChange={() => onChangeNavDropDownIcon('style1')}
                                />
                                <label htmlFor="drpicon-1" className="cr">
                                    <i className="feather icon-chevron-right" />
                                </label>
                            </div>
                        </div>
                        <div className="form-group d-inline">
                            <div className="radio radio-primary d-inline">
                                <input
                                    type="radio"
                                    name="radio-in-1"
                                    id="drpicon-2"
                                    checked={navDropdownIcon === 'style2'}
                                    onChange={() => onChangeNavDropDownIcon('style2')}
                                />
                                <label htmlFor="drpicon-2" className="cr">
                                    <i className="feather icon-chevrons-right" />
                                </label>
                            </div>
                        </div>
                        <div className="form-group d-inline">
                            <div className="radio radio-primary d-inline">
                                <input
                                    type="radio"
                                    name="radio-in-1"
                                    id="drpicon-3"
                                    checked={navDropdownIcon === 'style3'}
                                    onChange={() => onChangeNavDropDownIcon('style3')}
                                />
                                <label htmlFor="drpicon-3" className="cr">
                                    <i className="feather icon-plus" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <h6>Menu List Icon</h6>
                    <div className="theme-color">
                        <div className="form-group d-inline">
                            <div className="radio radio-primary d-inline">
                                <input
                                    type="radio"
                                    name="radio-in"
                                    id="subitem-1"
                                    checked={navListIcon === 'style1'}
                                    onChange={() => onChangeNavListIcon('style1')}
                                />
                                <label htmlFor="subitem-1" className="cr">
                                    <i className=" " />
                                </label>
                            </div>
                        </div>
                        <div className="form-group d-inline">
                            <div className="radio radio-primary d-inline">
                                <input
                                    type="radio"
                                    name="radio-in"
                                    id="subitem-2"
                                    checked={navListIcon === 'style2'}
                                    onChange={() => onChangeNavListIcon('style2')}
                                />
                                <label htmlFor="subitem-2" className="cr">
                                    <i className="feather icon-minus" />
                                </label>
                            </div>
                        </div>
                        <div className="form-group d-inline">
                            <div className="radio radio-primary d-inline">
                                <input
                                    type="radio"
                                    name="radio-in"
                                    id="subitem-3"
                                    checked={navListIcon === 'style3'}
                                    onChange={() => onChangeNavListIcon('style3')}
                                />
                                <label htmlFor="subitem-3" className="cr">
                                    <i className="feather icon-check" />
                                </label>
                            </div>
                        </div>
                        <div className="form-group d-inline">
                            <div className="radio radio-primary d-inline">
                                <input
                                    type="radio"
                                    name="radio-in"
                                    id="subitem-4"
                                    checked={navListIcon === 'style4'}
                                    onChange={() => onChangeNavListIcon('style4')}
                                />
                                <label htmlFor="subitem-4" className="cr">
                                    <i className="icon feather icon-corner-down-right" />
                                </label>
                            </div>
                        </div>
                        <div className="form-group d-inline">
                            <div className="radio radio-primary d-inline">
                                <input
                                    type="radio"
                                    name="radio-in"
                                    id="subitem-5"
                                    checked={navListIcon === 'style5'}
                                    onChange={() => onChangeNavListIcon('style5')}
                                />
                                <label htmlFor="subitem-5" className="cr">
                                    <i className="icon feather icon-chevrons-right" />
                                </label>
                            </div>
                        </div>
                        <div className="form-group d-inline">
                            <div className="radio radio-primary d-inline">
                                <input
                                    type="radio"
                                    name="radio-in"
                                    id="subitem-6"
                                    checked={navListIcon === 'style6'}
                                    onChange={() => onChangeNavListIcon('style6')}
                                />
                                <label htmlFor="subitem-6" className="cr">
                                    <i className="icon feather icon-chevron-right" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <h6>Active Color</h6>
                    <div className="theme-color active-color small">
                        <Link
                            to="#"
                            onClick={() => onChangeNavActiveListColor('active-default')}
                            className={navActiveListColor === 'active-default' ? 'active' : ''}
                            data-value="active-default"
                        >
                            <span />
                            <span />
                        </Link>
                        <Link
                            to="#"
                            onClick={() => onChangeNavActiveListColor('active-blue')}
                            className={navActiveListColor === 'active-blue' ? 'active' : ''}
                            data-value="active-blue"
                        >
                            <span />
                            <span />
                        </Link>
                        <Link
                            to="#"
                            onClick={() => onChangeNavActiveListColor('active-red')}
                            className={navActiveListColor === 'active-red' ? 'active' : ''}
                            data-value="active-red"
                        >
                            <span />
                            <span />
                        </Link>
                        <Link
                            to="#"
                            onClick={() => onChangeNavActiveListColor('active-purple')}
                            className={navActiveListColor === 'active-purple' ? 'active' : ''}
                            data-value="active-purple"
                        >
                            <span />
                            <span />
                        </Link>
                        <Link
                            to="#"
                            onClick={() => onChangeNavActiveListColor('active-lightblue')}
                            className={navActiveListColor === 'active-lightblue' ? 'active' : ''}
                            data-value="active-lightblue"
                        >
                            <span />
                            <span />
                        </Link>
                        <Link
                            to="#"
                            onClick={() => onChangeNavActiveListColor('active-dark')}
                            className={navActiveListColor === 'active-dark' ? 'active' : ''}
                            data-value="active-dark"
                        >
                            <span />
                            <span />
                        </Link>
                    </div>
                    {menuOptions}
                </PerfectScrollbar>
            </div>
        </React.Fragment>
    );
};

export default MenuOptions;

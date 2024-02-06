import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { ConfigContext } from '../../../../../contexts/ConfigContext';
import * as actionType from '../../../../../store/actions';

import navImage1 from '../../../../../assets/images/nav-bg/navbar-img-1.jpg';
import navImage2 from '../../../../../assets/images/nav-bg/navbar-img-2.jpg';
import navImage3 from '../../../../../assets/images/nav-bg/navbar-img-3.jpg';
import navImage4 from '../../../../../assets/images/nav-bg/navbar-img-4.jpg';
import navImage5 from '../../../../../assets/images/nav-bg/navbar-img-5.jpg';

import backImage1 from '../../../../../assets/images/bg-images/bg1.jpg';
import backImage3 from '../../../../../assets/images/bg-images/bg3.jpg';
import backImage4 from '../../../../../assets/images/bg-images/bg4.jpg';
import backImage5 from '../../../../../assets/images/bg-images/bg5.jpg';

import patternImage1 from '../../../../../assets/images/bg-images/1.png';
import patternImage2 from '../../../../../assets/images/bg-images/2.png';
import patternImage3 from '../../../../../assets/images/bg-images/3.png';
import patternImage4 from '../../../../../assets/images/bg-images/4.png';
import patternImage5 from '../../../../../assets/images/bg-images/5.png';
import patternImage6 from '../../../../../assets/images/bg-images/6.png';

const ColorOptions = () => {
    const configContext = useContext(ConfigContext);
    const { layout, subLayout, headerBackColor, navBrandColor, navBackImage, layout6Background, navBackColor } = configContext.state;
    const { dispatch } = configContext;

    let colorOptions = '';
    let colorOptionsWithoutHorizontal = '';

    const onChangeNavBrandColor = (brand) => {
        dispatch({ type: actionType.NAV_BRAND_COLOR, navBrandColor: brand });
    };

    const onChangeNavBackImage = (image) => {
        dispatch({ type: actionType.NAV_BACK_IMAGE, navBackImage: image });
    };

    const onChangeLayout6Background = (backgound) => {
        dispatch({ type: actionType.LAYOUT6_BACKGROUND, layout6Background: backgound });
    };

    const onChangeHeaderBackColor = (backgound) => {
        dispatch({ type: actionType.HEADER_BACK_COLOR, headerBackColor: backgound });
    };

    const onChangeNavBackColor = (backgound) => {
        dispatch({ type: actionType.NAV_BACK_COLOR, navBackColor: backgound });
    };

    if (subLayout !== 'layout-6' && layout !== 'horizontal') {
        colorOptionsWithoutHorizontal = (
            <div>
                <h6>Menu Brand Color</h6>
                <div className="theme-color brand-color">
                    <Link
                        to="#"
                        onClick={() => onChangeNavBrandColor('brand-default')}
                        className={navBrandColor === 'brand-default' ? 'active' : ''}
                        data-value="brand-default"
                    >
                        <span />
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeNavBrandColor('brand-blue')}
                        className={navBrandColor === 'brand-blue' ? 'active' : ''}
                        data-value="brand-blue"
                    >
                        <span />
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeNavBrandColor('brand-red')}
                        className={navBrandColor === 'brand-red' ? 'active' : ''}
                        data-value="brand-red"
                    >
                        <span />
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeNavBrandColor('brand-purple')}
                        className={navBrandColor === 'brand-purple' ? 'active' : ''}
                        data-value="brand-purple"
                    >
                        <span />
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeNavBrandColor('brand-lightblue')}
                        className={navBrandColor === 'brand-lightblue' ? 'active' : ''}
                        data-value="brand-lightblue"
                    >
                        <span />
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeNavBrandColor('brand-dark')}
                        className={navBrandColor === 'brand-dark' ? 'active' : ''}
                        data-value="brand-dark"
                    >
                        <span />
                        <span />
                    </Link>
                </div>
                <h6>Navbar Image</h6>
                <div className="theme-color navbar-images">
                    <Link
                        to="#"
                        onClick={() => onChangeNavBackImage('navbar-image-1')}
                        className={navBackImage === 'navbar-image-1' ? 'active' : ''}
                        style={{ backgroundImage: `url(${navImage1})` }}
                        data-value="navbar-image-1"
                    >
                        <span />
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeNavBackImage('navbar-image-2')}
                        className={navBackImage === 'navbar-image-2' ? 'active' : ''}
                        style={{ backgroundImage: `url(${navImage2})` }}
                        data-value="navbar-image-2"
                    >
                        <span />
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeNavBackImage('navbar-image-3')}
                        className={navBackImage === 'navbar-image-3' ? 'active' : ''}
                        style={{ backgroundImage: `url(${navImage3})` }}
                        data-value="navbar-image-3"
                    >
                        <span />
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeNavBackImage('navbar-image-4')}
                        className={navBackImage === 'navbar-image-4' ? 'active' : ''}
                        style={{ backgroundImage: `url(${navImage4})` }}
                        data-value="navbar-image-4"
                    >
                        <span />
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeNavBackImage('navbar-image-5')}
                        className={navBackImage === 'navbar-image-5' ? 'active' : ''}
                        style={{ backgroundImage: `url(${navImage5})` }}
                        data-value="navbar-image-5"
                    >
                        <span />
                        <span />
                    </Link>
                </div>
            </div>
        );
    }

    if (subLayout === 'layout-6') {
        colorOptions = (
            <div>
                <h6>Background Color</h6>
                <div className="theme-color laybg-color small">
                    <Link
                        to="#"
                        onClick={() => onChangeLayout6Background('linear-gradient(to right, #04a9f5 0%, #04a9f5 100%)')}
                        className={layout6Background === 'linear-gradient(to right, #04a9f5 0%, #04a9f5 100%)' ? 'active' : ''}
                        data-value="linear-gradient(to right, #04a9f5 0%, #04a9f5 100%)"
                        style={{ background: 'linear-gradient(to right, #04a9f5 0%, #04a9f5 100%)' }}
                    >
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeLayout6Background('linear-gradient(to right, #ff5252 0%, #ff5252 100%)')}
                        className={layout6Background === 'linear-gradient(to right, #ff5252 0%, #ff5252 100%)' ? 'active' : ''}
                        data-value="linear-gradient(to right, #ff5252 0%, #ff5252 100%)"
                        style={{ background: 'linear-gradient(to right, #ff5252 0%, #ff5252 100%)' }}
                    >
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeLayout6Background('linear-gradient(to right, #9575CD 0%, #9575CD 100%)')}
                        className={layout6Background === 'linear-gradient(to right, #9575CD 0%, #9575CD 100%)' ? 'active' : ''}
                        data-value="linear-gradient(to right, #9575CD 0%, #9575CD 100%)"
                        style={{ background: 'linear-gradient(to right, #9575CD 0%, #9575CD 100%)' }}
                    >
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeLayout6Background('linear-gradient(to right, #23b7e5 0%, #23b7e5 100%)')}
                        className={layout6Background === 'linear-gradient(to right, #23b7e5 0%, #23b7e5 100%)' ? 'active' : ''}
                        data-value="linear-gradient(to right, #23b7e5 0%, #23b7e5 100%)"
                        style={{ background: 'linear-gradient(to right, #23b7e5 0%, #23b7e5 100%)' }}
                    >
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeLayout6Background('linear-gradient(to right, #424448 0%, #424448 100%)')}
                        className={layout6Background === 'linear-gradient(to right, #424448 0%, #424448 100%)' ? 'active' : ''}
                        data-value="linear-gradient(to right, #424448 0%, #424448 100%)"
                        style={{ background: 'linear-gradient(to right, #424448 0%, #424448 100%)' }}
                    >
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeLayout6Background('linear-gradient(to right, #1de9b6 0%, #1dc4e9 100%)')}
                        className={layout6Background === 'linear-gradient(to right, #1de9b6 0%, #1dc4e9 100%)' ? 'active' : ''}
                        data-value="linear-gradient(to right, #1de9b6 0%, #1dc4e9 100%)"
                        style={{ background: 'linear-gradient(to right, #1de9b6 0%, #1dc4e9 100%)' }}
                    >
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeLayout6Background('linear-gradient(to right, #899FD4 0%, #A389D4 100%)')}
                        className={layout6Background === 'linear-gradient(to right, #899FD4 0%, #A389D4 100%)' ? 'active' : ''}
                        data-value="linear-gradient(to right, #899FD4 0%, #A389D4 100%)"
                        style={{ background: 'linear-gradient(to right, #899FD4 0%, #A389D4 100%)' }}
                    >
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeLayout6Background('linear-gradient(to right, #4facfe 0%, #00f2fe 100%)')}
                        className={layout6Background === 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)' ? 'active' : ''}
                        data-value="linear-gradient(to right, #4facfe 0%, #00f2fe 100%)"
                        style={{ background: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)' }}
                    >
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeLayout6Background('linear-gradient(to right, #667eea 0%, #764ba2 100%)')}
                        className={layout6Background === 'linear-gradient(to right, #667eea 0%, #764ba2 100%)' ? 'active' : ''}
                        data-value="linear-gradient(to right, #667eea 0%, #764ba2 100%)"
                        style={{ background: 'linear-gradient(to right, #667eea 0%, #764ba2 100%)' }}
                    >
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeLayout6Background('linear-gradient(to right, #f77062 0%, #fe5196 100%)')}
                        className={layout6Background === 'linear-gradient(to right, #f77062 0%, #fe5196 100%)' ? 'active' : ''}
                        data-value="linear-gradient(to right, #f77062 0%, #fe5196 100%)"
                        style={{ background: 'linear-gradient(to right, #f77062 0%, #fe5196 100%)' }}
                    >
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeLayout6Background('linear-gradient(to right, #9be15d 0%, #00e3ae 100%)')}
                        className={layout6Background === 'linear-gradient(to right, #9be15d 0%, #00e3ae 100%)' ? 'active' : ''}
                        data-value="linear-gradient(to right, #9be15d 0%, #00e3ae 100%)"
                        style={{ background: 'linear-gradient(to right, #9be15d 0%, #00e3ae 100%)' }}
                    >
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeLayout6Background('linear-gradient(to right, #b224ef 0%, #7579ff 100%)')}
                        className={layout6Background === 'linear-gradient(to right, #b224ef 0%, #7579ff 100%)' ? 'active' : ''}
                        data-value="linear-gradient(to right, #b224ef 0%, #7579ff 100%)"
                        style={{ background: 'linear-gradient(to right, #b224ef 0%, #7579ff 100%)' }}
                    >
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeLayout6Background('linear-gradient(to right, #0acffe 0%, #495aff 100%)')}
                        className={layout6Background === 'linear-gradient(to right, #0acffe 0%, #495aff 100%)' ? 'active' : ''}
                        data-value="linear-gradient(to right, #0acffe 0%, #495aff 100%)"
                        style={{ background: 'linear-gradient(to right, #0acffe 0%, #495aff 100%)' }}
                    >
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeLayout6Background('linear-gradient(to right, #01a9ac 0%, #01dbdf 100%)')}
                        className={layout6Background === 'linear-gradient(to right, #01a9ac 0%, #01dbdf 100%)' ? 'active' : ''}
                        data-value="linear-gradient(to right, #01a9ac 0%, #01dbdf 100%)"
                        style={{ background: 'linear-gradient(to right, #01a9ac 0%, #01dbdf 100%)' }}
                    >
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeLayout6Background('linear-gradient(to right, #fe5d70 0%, #fe909d 100%)')}
                        className={layout6Background === 'linear-gradient(to right, #fe5d70 0%, #fe909d 100%)' ? 'active' : ''}
                        data-value="linear-gradient(to right, #fe5d70 0%, #fe909d 100%)"
                        style={{ background: 'linear-gradient(to right, #fe5d70 0%, #fe909d 100%)' }}
                    >
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeLayout6Background('linear-gradient(to right, #0ac282 0%, #0df3a3 100%)')}
                        className={layout6Background === 'linear-gradient(to right, #0ac282 0%, #0df3a3 100%)' ? 'active' : ''}
                        data-value="linear-gradient(to right, #0ac282 0%, #0df3a3 100%)"
                        style={{ background: 'linear-gradient(to right, #0ac282 0%, #0df3a3 100%)' }}
                    >
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeLayout6Background('linear-gradient(to right, #fe9365 0%, #feb798 100%)')}
                        className={layout6Background === 'linear-gradient(to right, #fe9365 0%, #feb798 100%)' ? 'active' : ''}
                        data-value="linear-gradient(to right, #fe9365 0%, #feb798 100%)"
                        style={{ background: 'linear-gradient(to right, #fe9365 0%, #feb798 100%)' }}
                    >
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeLayout6Background('linear-gradient(to right, #A445B2 0%, #D41872 52%, #FF0066 100%)')}
                        className={layout6Background === 'linear-gradient(to right, #A445B2 0%, #D41872 52%, #FF0066 100%)' ? 'active' : ''}
                        data-value="linear-gradient(to right, #A445B2 0%, #D41872 52%, #FF0066 100%)"
                        style={{ background: 'linear-gradient(to right, #A445B2 0%, #D41872 52%, #FF0066 100%)' }}
                    >
                        <span />
                    </Link>
                </div>
                <h6>Background Image</h6>
                <hr />
                <div className="theme-color bg-images">
                    <Link
                        to="#"
                        onClick={() => onChangeLayout6Background(`url(${backImage1})`, 'cover')}
                        className={layout6Background === `url(${backImage1})` ? 'active' : ''}
                        style={{ backgroundImage: `url(${backImage1})` }}
                    >
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeLayout6Background(`url(${backImage3})`, 'cover')}
                        className={layout6Background === `url(${backImage3})` ? 'active' : ''}
                        style={{ backgroundImage: `url(${backImage3})` }}
                    >
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeLayout6Background(`url(${backImage4})`, 'cover')}
                        className={layout6Background === `url(${backImage4})` ? 'active' : ''}
                        style={{ backgroundImage: `url(${backImage4})` }}
                    >
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeLayout6Background(`url(${backImage5})`, 'cover')}
                        className={layout6Background === `url(${backImage5})` ? 'active' : ''}
                        style={{ backgroundImage: `url(${backImage5})` }}
                    >
                        <span />
                    </Link>
                </div>
                <h6>Background Pattern</h6>
                <hr />
                <div className="theme-color bg-images pattern">
                    <Link
                        to="#"
                        onClick={() => onChangeLayout6Background(`url(${patternImage1})`, 'auto')}
                        className={layout6Background === `url(${patternImage1})` ? 'active' : ''}
                        style={{ backgroundImage: `url(${patternImage1})` }}
                    >
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeLayout6Background(`url(${patternImage2})`, 'auto')}
                        className={layout6Background === `url(${patternImage2})` ? 'active' : ''}
                        style={{ backgroundImage: `url(${patternImage2})` }}
                    >
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeLayout6Background(`url(${patternImage3})`, 'auto')}
                        className={layout6Background === `url(${patternImage3})` ? 'active' : ''}
                        style={{ backgroundImage: `url(${patternImage3})` }}
                    >
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeLayout6Background(`url(${patternImage4})`, 'auto')}
                        className={layout6Background === `url(${patternImage4})` ? 'active' : ''}
                        style={{ backgroundImage: `url(${patternImage4})` }}
                    >
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeLayout6Background(`url(${patternImage5})`, 'auto')}
                        className={layout6Background === `url(${patternImage5})` ? 'active' : ''}
                        style={{ backgroundImage: `url(${patternImage5})` }}
                    >
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeLayout6Background(`url(${patternImage6})`, 'auto')}
                        className={layout6Background === `url(${patternImage6})` ? 'active' : ''}
                        style={{ backgroundImage: `url(${patternImage6})` }}
                    >
                        <span />
                    </Link>
                </div>
            </div>
        );
    } else {
        colorOptions = (
            <div>
                <h6>header background</h6>
                <div className="theme-color header-color">
                    <Link
                        to="#"
                        onClick={() => onChangeHeaderBackColor('header-default')}
                        className={headerBackColor === 'header-default' ? 'active' : ''}
                        data-value="header-default"
                    >
                        <span />
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeHeaderBackColor('header-blue')}
                        className={headerBackColor === 'header-blue' ? 'active' : ''}
                        data-value="header-blue"
                    >
                        <span />
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeHeaderBackColor('header-red')}
                        className={headerBackColor === 'header-red' ? 'active' : ''}
                        data-value="header-red"
                    >
                        <span />
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeHeaderBackColor('header-purple')}
                        className={headerBackColor === 'header-purple' ? 'active' : ''}
                        data-value="header-purple"
                    >
                        <span />
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeHeaderBackColor('header-lightblue')}
                        className={headerBackColor === 'header-lightblue' ? 'active' : ''}
                        data-value="header-lightblue"
                    >
                        <span />
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeHeaderBackColor('header-dark')}
                        className={headerBackColor === 'header-dark' ? 'active' : ''}
                        data-value="header-dark"
                    >
                        <span />
                        <span />
                    </Link>
                </div>
                <h6>Menu background</h6>
                <div className="theme-color navbar-color">
                    <Link
                        to="#"
                        onClick={() => onChangeNavBackColor('navbar-default')}
                        className={navBackColor === 'navbar-default' ? 'active' : ''}
                        data-value="navbar-default"
                    >
                        <span />
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeNavBackColor('navbar-blue')}
                        className={navBackColor === 'navbar-blue' ? 'active' : ''}
                        data-value="navbar-blue"
                    >
                        <span />
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeNavBackColor('navbar-red')}
                        className={navBackColor === 'navbar-red' ? 'active' : ''}
                        data-value="navbar-red"
                    >
                        <span />
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeNavBackColor('navbar-purple')}
                        className={navBackColor === 'navbar-purple' ? 'active' : ''}
                        data-value="navbar-purple"
                    >
                        <span />
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeNavBackColor('navbar-lightblue')}
                        className={navBackColor === 'navbar-lightblue' ? 'active' : ''}
                        data-value="navbar-lightblue"
                    >
                        <span />
                        <span />
                    </Link>
                    <Link
                        to="#"
                        onClick={() => onChangeNavBackColor('navbar-dark')}
                        className={navBackColor === 'navbar-dark' ? 'active' : ''}
                        data-value="navbar-dark"
                    >
                        <span />
                        <span />
                    </Link>
                </div>
                {colorOptionsWithoutHorizontal}
            </div>
        );
    }

    return (
        <React.Fragment>
            <div className="config-scroll">
                <PerfectScrollbar>{colorOptions}</PerfectScrollbar>
            </div>
        </React.Fragment>
    );
};

export default ColorOptions;

import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

import './assets/css/styles.scss';
import Breadcrumb from '../../layouts/AdminLayout/Breadcrumb';
import logo from '../../assets/images/logo-wide-light.svg';
import heroImage1 from './assets/images/app_hero_1.png';
import icon1 from './assets/images/icon1.png';
import icon2 from './assets/images/icon2.png';
import icon3 from './assets/images/icon3.png';
import iconfb from './assets/images/fb.png';
import icongoogle from './assets/images/google.svg';
import iconinstagram from './assets/images/instagram.png';
import iconlinkedin from './assets/images/linkedin.png';
import iconpinterest from './assets/images/pinterest.svg';
import iconsnapchat from './assets/images/snapchat.png';
import icontiktok from './assets/images/tiktok.png';
import iconyoutube from './assets/images/youtube.png';

import PrivacyPolicyPage from '../legal/PrivacyPolicy';
import TermsOfServicePage from '../legal/ToS';

const Landing = () => {
    const [isPrivacyPolicy, setPrivacyModal] = useState(false);
    const [isToS, setToSModal] = useState(false);

    useEffect(() => {
        // Check if URL contains "#"
        //alert(window.location.hash);
        if (window.location.hash && window.location.hash === '#privacy') {
            setPrivacyModal(true);
        } else if (window.location.hash && window.location.hash === '#tos') {
            setToSModal(true);
        }
    }, []);

    return (
        <React.Fragment>
            <Breadcrumb />
            <div className="wrapper">
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark navbar-default navbar-fixed-top past-main" role="navigation">
                        <div className="container">
                            <a className="navbar-brand page-scroll bg-transparent" href="#main">
                                <img src={logo} height="40px" alt="Link Clicks Ads Manager" />
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto" />
                                <ul className="navbar-nav my-2 my-lg-0 align-items-center">
                                    <li className="nav-item">
                                        <a className="nav-link page-scroll" href="#main">
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link page-scroll" href="#features">
                                            Features
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link page-scroll" href="/auth/signin">
                                            Launch App
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            rel="noreferrer"
                                            className="nav-link"
                                            href="https://www.linkedin.com/company/linkclicks"
                                            target="_blank"
                                        >
                                            <i className="fab fa-linkedin f-24"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="main" id="main">
                        <div className="hero-section app-hero">
                            <div className="container">
                                <div className="hero-content app-hero-content text-center">
                                    <div className="row justify-content-md-center">
                                        <div className="col-md-10">
                                            <h1 className="wow fadeInUp" data-wow-delay="0s">
                                                The biggest ad platforms. <br className="hidden-xs" />
                                                One simple dashboard.
                                            </h1>
                                            <div className="d-flex justify-content-center bd-highlight mb-3">
                                                <div className="p-2 bd-highlight">
                                                    <img src={iconfb} height="60" width="60" alt="Facebook Ads" />
                                                </div>

                                                <div className="p-2 bd-highlight">
                                                    <img src={icongoogle} height="60" width="60" alt="Google Ads" />
                                                </div>

                                                <div className="p-2 bd-highlight">
                                                    <img src={iconinstagram} height="60" width="60" alt="Instagram Ads" />
                                                </div>

                                                <div className="p-2 bd-highlight">
                                                    <img src={iconlinkedin} height="60" width="60" alt="LinkedIn Ads" />
                                                </div>

                                                <div className="p-2 bd-highlight">
                                                    <img src={iconpinterest} height="60" width="60" alt="Pinterest Ads" />
                                                </div>

                                                <div className="p-2 bd-highlight">
                                                    <img src={iconsnapchat} height="60" width="60" alt="Snapchat" />
                                                </div>

                                                <div className="p-2 bd-highlight">
                                                    <img src={icontiktok} height="60" width="60" alt="TikTok Ads" />
                                                </div>

                                                <div className="p-2 bd-highlight">
                                                    <img src={iconyoutube} height="60" width="60" alt="YouTube Ads" />
                                                </div>
                                            </div>
                                            <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                                                Manage ads, measure performance, and compare prices all in one spot.{' '}
                                                <br className="hidden-xs" /> Save time, reduce costs, and improve ROAS.
                                            </h2>

                                            {/* <button className="btn btn-success mr-1" data-wow-delay="0.2s">
                                                Try for Free
                                            </button>
                                            <button className="btn btn-primary btn-action" data-wow-delay="0.2s">
                                                Buy Now
                                            </button>*/}
                                        </div>
                                        <div className="col-md-12">
                                            <div className="hero-image">
                                                <img className="img-fluid" src={heroImage1} alt="App Hero 1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="services-section text-center" id="features">
                            <div className="container">
                                <div className="row  justify-content-md-center">
                                    <div className="col-md-10">
                                        <div className="services-content">
                                            <h1 className="wow fadeInUp" data-wow-delay="0s">
                                                Manage campaigns on all major platforms from just one spot
                                            </h1>
                                            <div className="col-md-12 text-center">
                                                <div className="services">
                                                    <div className="row">
                                                        <div className="col-sm-4 wow fadeInUp" data-wow-delay="0.2s">
                                                            <div className="services-icon">
                                                                <img src={icon1} height="60" width="60" alt="Service" />
                                                            </div>
                                                            <div className="services-description">
                                                                <h1>Launch Campaigns</h1>
                                                                <p>
                                                                    Launch ad campaigns on multiple platforms from a single interface. Save
                                                                    time and effort.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-4 wow fadeInUp" data-wow-delay="0.3s">
                                                            <div className="services-icon">
                                                                <img className="icon-2" src={icon2} height="60" width="60" alt="Service" />
                                                            </div>
                                                            <div className="services-description">
                                                                <h1>Measure Performance</h1>
                                                                <p>
                                                                    Compare performance across multiple networks to identify best performing
                                                                    ads quick & easy.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-4 wow fadeInUp" data-wow-delay="0.4s">
                                                            <div className="services-icon">
                                                                <img className="icon-3" src={icon3} height="60" width="60" alt="Service" />
                                                            </div>
                                                            <div className="services-description">
                                                                <h1>Manage Ads</h1>
                                                                <p>
                                                                    Modify, start, and stop ads in order to optimize your return on ad spend
                                                                    (ROAS).
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="footer">
                            <div className="container">
                                <div className="col-md-12 text-center">
                                    <img src={logo} alt="Link Clicks Ads Manager" />
                                    <ul className="footer-menu">
                                        <li>
                                            <Button
                                                variant="link"
                                                size="sm"
                                                className="mt-0 mb-0 mr-0 ml-0 text-white"
                                                onClick={() => setToSModal(true)}
                                            >
                                                Terms & Conditions
                                            </Button>
                                        </li>
                                        <li>
                                            <Button
                                                variant="link"
                                                size="sm"
                                                className="mt-0 mb-0 mr-0 ml-0 text-white"
                                                onClick={() => setPrivacyModal(true)}
                                            >
                                                Privacy Policy
                                            </Button>
                                        </li>
                                    </ul>
                                    <div className="footer-text">
                                        <p>Copyright © 2023 Link Clicks Inc.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Modal size="lg" show={isPrivacyPolicy} onHide={() => setPrivacyModal(false)}>
                            <Modal.Body>
                                <PrivacyPolicyPage />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setPrivacyModal(false)}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <Modal size="lg" show={isToS} onHide={() => setToSModal(false)}>
                            <Modal.Body>
                                <TermsOfServicePage />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setToSModal(false)}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <a id="back-top" className="back-to-top page-scroll" href="#main">
                            <i className="feather icon-arrow-up" />
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Landing;

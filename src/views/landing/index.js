import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './assets/css/styles.scss';
import Breadcrumb from '../../layouts/AdminLayout/Breadcrumb';

import logo from '../../assets/images/logo.png';
import heroImage1 from './assets/images/app_hero_1.png';
import icon1 from './assets/images/icon1.png';
import icon2 from './assets/images/icon2.png';
import icon3 from './assets/images/icon3.png';
import feature1 from './assets/images/feature_1.png';
import feature2 from './assets/images/feature_2.png';
import testimonial1 from './assets/images/testimonial1.jpg';
import testimonial2 from './assets/images/testimonial2.jpg';
import testimonial3 from './assets/images/testimonial3.jpg';
import featureBig from './assets/images/feature_big.png';
import featureIcon1 from './assets/images/feature_icon_1.png';
import featureIcon2 from './assets/images/feature_icon_2.png';
import featureIcon3 from './assets/images/feature_icon_3.png';
import backIphone from './assets/images/iphone_hand_1.jpg';
import cart1 from './assets/images/cart1.png';
import cart2 from './assets/images/cart2.png';
import logo1 from './assets/images/logo1.png';
import logo2 from './assets/images/logo2.png';
import logo3 from './assets/images/logo3.png';
import logo4 from './assets/images/logo4.png';
import logo6 from './assets/images/logo6.png';
import logo7 from './assets/images/logo7.png';

const Landing = () => {
    return (
        <React.Fragment>
            <Breadcrumb />
            <div className="wrapper">
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light navbar-default navbar-fixed-top past-main" role="navigation">
                        <div className="container">
                            <a className="navbar-brand page-scroll bg-transparent" href="#main">
                                <img src={logo} alt="Datta Able Logo" />
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
                                <ul className="navbar-nav my-2 my-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link page-scroll" href="#main">
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link page-scroll" href="#services">
                                            Important
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link
                                            className="nav-link dropdown-toggle"
                                            to="#"
                                            id="navbarDropdown"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Dropdown
                                        </Link>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link to="#" className="dropdown-item">
                                                Level 1
                                            </Link>
                                            <Link to="#" className="dropdown-item">
                                                Level 2
                                            </Link>
                                            <Link to="#" className="dropdown-item">
                                                Level 3
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link page-scroll" href="#features">
                                            Benefits
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link page-scroll" href="#reviews">
                                            Testimonials
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link page-scroll" href="#pricing">
                                            Pricing
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">
                                            Contact
                                        </Link>
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
                                                Datta Able React Admin Template
                                            </h1>
                                            <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                First ever React admin template with Flat UI Interface. <br className="hidden-xs" /> Its
                                                best choice for your any complex project.
                                            </p>
                                            <button className="btn btn-primary btn-action mr-1" data-wow-delay="0.2s">
                                                Live Preview
                                            </button>
                                            <button className="btn btn-primary btn-action" data-wow-delay="0.2s">
                                                Buy Now
                                            </button>
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
                        <div className="services-section text-center" id="services">
                            <div className="container">
                                <div className="row  justify-content-md-center">
                                    <div className="col-md-8">
                                        <div className="services-content">
                                            <h1 className="wow fadeInUp" data-wow-delay="0s">
                                                We take care our products for more feature rich
                                            </h1>
                                            <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                Datta Able is one of the finest Admin dashboard template in its category. Premium admin
                                                dashboard with high end feature rich possibilities.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <div className="services">
                                            <div className="row">
                                                <div className="col-sm-4 wow fadeInUp" data-wow-delay="0.2s">
                                                    <div className="services-icon">
                                                        <img src={icon1} height="60" width="60" alt="Service" />
                                                    </div>
                                                    <div className="services-description">
                                                        <h1>Mega feature rich</h1>
                                                        <p>
                                                            Datta Able is one of unique dashboard template which come with tons of ready to
                                                            use feature. We continuous working on it to provide latest updates in digital
                                                            market.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 wow fadeInUp" data-wow-delay="0.3s">
                                                    <div className="services-icon">
                                                        <img className="icon-2" src={icon2} height="60" width="60" alt="Service" />
                                                    </div>
                                                    <div className="services-description">
                                                        <h1>Fast and Robust</h1>
                                                        <p>
                                                            We are contantly working on Datta Able and improve its performance too. Your
                                                            definitely give higher rating to Datta Able for its performance.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 wow fadeInUp" data-wow-delay="0.4s">
                                                    <div className="services-icon">
                                                        <img className="icon-3" src={icon3} height="60" width="60" alt="Service" />
                                                    </div>
                                                    <div className="services-description">
                                                        <h1>FLAT UI-Interface</h1>
                                                        <p>
                                                            Datta Able is first ever admin dashboard template which release in Bootstrap 4
                                                            framework. Intuitive feature rich design concept and color combination.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-features" id="features">
                            <div className="container">
                                <div className="flex-split">
                                    <div className="f-left wow fadeInUp" data-wow-delay="0s">
                                        <div className="left-content">
                                            <img className="img-fluid" src={feature1} alt="Feature 1" />
                                        </div>
                                    </div>
                                    <div className="f-right wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="right-content">
                                            <h2>High performance and flexible code</h2>
                                            <p>
                                                Datta Able is full flexible solution for your entire project development. You can easily
                                                maintain all of its module/components.
                                            </p>
                                            <ul>
                                                <li>
                                                    <i className="feather icon-check-square" />
                                                    Neat n clean code structure.
                                                </li>
                                                <li>
                                                    <i className="feather icon-check-square" />
                                                    Flexible module structure
                                                </li>
                                                <li>
                                                    <i className="feather icon-check-square" />
                                                    Copy / Paste and Ready to use
                                                </li>
                                            </ul>
                                            <button className="btn btn-primary btn-action btn-fill">Learn More</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-split">
                                    <div className="f-right">
                                        <div className="right-content wow fadeInUp" data-wow-delay="0.2s">
                                            <h2>Included Software Dependencies</h2>
                                            <p>Bower - Grunt - Sass Dependencies for easy project flow management.</p>
                                            <ul>
                                                <li>
                                                    <i className="feather icon-check-square" />
                                                    Grunt - No need to update plugins manually
                                                </li>
                                                <li>
                                                    <i className="feather icon-check-square" />
                                                    Grunt - Less work you have to performance
                                                </li>
                                                <li>
                                                    <i className="feather icon-check-square" />
                                                    Sass - Most Powerful CSS extension language
                                                </li>
                                            </ul>
                                            <button className="btn btn-primary btn-action btn-fill">Learn More</button>
                                        </div>
                                    </div>
                                    <div className="f-left">
                                        <div className="left-content wow fadeInUp" data-wow-delay="0.3s">
                                            <img className="img-fluid" src={feature2} alt="Feature 2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-section" id="reviews">
                            <div className="container">
                                <div className="row text-center">
                                    <div className="col-md-12">
                                        <Carousel className="testimonials owl-carousel owl-theme">
                                            <Carousel.Item>
                                                <img className="img-circle" src={testimonial2} alt="Client Testimonoal" />
                                                <div className="testimonial-text wow fadeInUp" data-wow-delay="0.2s">
                                                    <p>
                                                        Totally flexible admin template. Easy to use and easy to manage all the elements in
                                                        entire theme. <br className="hidden-xs" /> Great support team behind this product.
                                                        Low turnaround time with exact support which i needed.
                                                    </p>
                                                    <h3>Code Quality</h3>
                                                    <h3> - amit1134 [Buyer - NZ]</h3>
                                                    <div className="mt-4 text-warning">
                                                        <i className="feather icon-star mr-1" />
                                                        <i className="feather icon-star mr-1" />
                                                        <i className="feather icon-star mr-1" />
                                                        <i className="feather icon-star mr-1" />
                                                        <i className="feather icon-star mr-1" />
                                                    </div>
                                                </div>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="img-circle" src={testimonial1} alt="Client Testimonoal" />
                                                <div className="testimonial-text">
                                                    <p>
                                                        The main reason for the Rating for Able pro admin template is that its is awesome
                                                        template with tons of ready to use features.
                                                        <br className="hidden-xs" /> - Top quality - Regular updates - PHP version - Clean n
                                                        Neat code - Saves lots of developing time
                                                    </p>
                                                    <h3>Flexibility</h3>
                                                    <h3>- vishalmg [Buyer -India]</h3>
                                                    <div className="mt-4 text-warning">
                                                        <i className="feather icon-star mr-1" />
                                                        <i className="feather icon-star mr-1" />
                                                        <i className="feather icon-star mr-1" />
                                                        <i className="feather icon-star mr-1" />
                                                        <i className="feather icon-star mr-1" />
                                                    </div>
                                                </div>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="img-circle" src={testimonial3} alt="Client Testimonoal" />
                                                <div className="testimonial-text">
                                                    <p>
                                                        5 stars are for the excellent support, that is brilliant! The design is very cool
                                                        and the quality of code is excellent. <br className="hidden-xs" />
                                                        Compliments!
                                                    </p>
                                                    <h3>Code Quality</h3>
                                                    <h3>- ab69aho [Buyer -Italy]</h3>
                                                    <div className="mt-4 text-warning">
                                                        <i className="feather icon-star mr-1" />
                                                        <i className="feather icon-star mr-1" />
                                                        <i className="feather icon-star mr-1" />
                                                        <i className="feather icon-star mr-1" />
                                                        <i className="feather icon-star mr-1" />
                                                    </div>
                                                </div>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="img-circle" src={testimonial2} alt="Client Testimonoal" />
                                                <div className="testimonial-text">
                                                    <p>
                                                        The product is high end and high-end specialized assistance in solving problems.{' '}
                                                        <br className="hidden-xs" />I would highly recommend.
                                                    </p>
                                                    <h3>Customer Support</h3>
                                                    <h3>- donpavulon [Buyer -US]</h3>
                                                    <div className="mt-4 text-warning">
                                                        <i className="feather icon-star mr-1" />
                                                        <i className="feather icon-star mr-1" />
                                                        <i className="feather icon-star mr-1" />
                                                        <i className="feather icon-star mr-1" />
                                                        <i className="feather icon-star mr-1" />
                                                    </div>
                                                </div>
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="feature_huge text-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <img
                                            className="img-fluid wow fadeInUp"
                                            data-wow-delay="0.1s"
                                            src={featureBig}
                                            alt="Feature Big"
                                            style={{ maxWidth: '100%' }}
                                        />
                                    </div>
                                    <div className="col-md-12 feature_list">
                                        <div className="row">
                                            <div className="col-sm-4 wow fadeInUp" data-wow-delay="0.2s">
                                                <img src={featureIcon1} alt="Feature" />
                                                <h1>Tursted Product</h1>
                                                <p>We increasingly grow our talent and skills in admin dashboard development.</p>
                                            </div>
                                            <div className="col-sm-4 wow fadeInUp" data-wow-delay="0.4s">
                                                <img src={featureIcon2} alt="Feature" />
                                                <h1>Online Documentation</h1>
                                                <p>Documentation helps you in every steps on your entire project.</p>
                                            </div>
                                            <div className="col-sm-4 wow fadeInUp" data-wow-delay="0.6s">
                                                <img src={featureIcon3} alt="Feature" />
                                                <h1>Free Updates & Support</h1>
                                                <p>Fast and accurate outline during support. Low turnaround time.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="counter-section">
                            <div className="container">
                                <div className="row text-center">
                                    <div className="col-6 col-md-3">
                                        <div className="counter-up">
                                            <div className="counter-icon">
                                                <i className="feather icon-download-cloud" />
                                            </div>
                                            <h3>
                                                <span className="counter">250</span>+
                                            </h3>
                                            <div className="counter-text">
                                                <h4>Pages</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <div className="counter-up">
                                            <div className="counter-icon">
                                                <i className="feather icon-package" />
                                            </div>
                                            <h3>
                                                <span className="counter">1000</span>+
                                            </h3>
                                            <div className="counter-text">
                                                <h4>UI Elements</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <div className="counter-up">
                                            <div className="counter-icon">
                                                <i className="feather icon-users" />
                                            </div>
                                            <h3>
                                                <span className="counter">500</span>+
                                            </h3>
                                            <div className="counter-text">
                                                <h4>Form Elements</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <div className="counter-up">
                                            <div className="counter-icon">
                                                <i className="feather icon-file-text" />
                                            </div>
                                            <h3>
                                                <span className="counter">80</span>+
                                            </h3>
                                            <div className="counter-text">
                                                <h4>Widgets</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="features-section">
                            <div className="f-left">
                                <div className="left-content wow fadeInLeft" data-wow-delay="0s">
                                    <h2 className="wow fadeInLeft" data-wow-delay="0.1s">
                                        We are available for custom work development
                                    </h2>
                                    <p className="wow fadeInLeft" data-wow-delay="0.2s">
                                        We at Datta Able available for custom work development with High end specialized developer.
                                    </p>
                                    <button className="btn btn-primary btn-action btn-fill wow fadeInLeft" data-wow-delay="0.2s">
                                        Click to send query
                                    </button>
                                </div>
                            </div>
                            <div
                                className="f-right"
                                style={{ backgroundImage: `url(${backIphone})`, backgroundPosition: '50% 50%', backgroundSize: 'cover' }}
                            ></div>
                        </div>
                        <div className="pricing-section no-color text-center" id="pricing">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 ">
                                        <div className="pricing-intro">
                                            <h1 className="wow fadeInUp" data-wow-delay="0s">
                                                Pricing Table
                                            </h1>
                                            <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                Loream ipsum dummy text loream ipsum dummy text loream ipsum dummy text{' '}
                                                <br className="hidden-xs" /> loream ipsum dummy text. Get the right plan that suits you.
                                            </p>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="table-left wow fadeInUp" data-wow-delay="0.4s">
                                                    <div className="icon">
                                                        <img src={cart2} alt="Icon" />
                                                    </div>
                                                    <div className="pricing-details">
                                                        <h2>Beginner Plan</h2>
                                                        <span>$5.90</span>
                                                        <p>
                                                            Pay little enjoy the product <br className="hidden-xs" /> for life time.
                                                        </p>
                                                        <ul>
                                                            <li>First basic feature </li>
                                                            <li>Second feature goes here</li>
                                                            <li>Any other third feature</li>
                                                            <li>And the last one goes here</li>
                                                        </ul>
                                                        <button className="btn btn-primary btn-action btn-fill">Get Plan</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 ">
                                                <div className="table-right wow fadeInUp" data-wow-delay="0.6s">
                                                    <div className="icon">
                                                        <img src={cart1} alt="Icon" />
                                                    </div>
                                                    <div className="pricing-details">
                                                        <h2>Premium Plan</h2>
                                                        <span>$19.99</span>
                                                        <p>
                                                            Pay only for what you use. Flexible <br className="hidden-xs" /> payment
                                                            options.
                                                        </p>
                                                        <ul>
                                                            <li>First premium feature </li>
                                                            <li>Second premium one goes here</li>
                                                            <li>Third premium feature here</li>
                                                            <li>Final premium feature</li>
                                                        </ul>
                                                        <button className="btn btn-primary btn-action btn-fill">Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="client-section">
                            <div className="container text-center">
                                <Carousel className="clients owl-carousel owl-theme" interval={1000}>
                                    <Carousel.Item className="single">
                                        <img src={logo1} alt="Brand 1" />
                                    </Carousel.Item>
                                    <Carousel.Item className="single">
                                        <img src={logo2} alt="Brand 2" />
                                    </Carousel.Item>
                                    <Carousel.Item className="single">
                                        <img src={logo3} alt="Brand 3" />
                                    </Carousel.Item>
                                    <Carousel.Item className="single">
                                        <img src={logo4} alt="Brand 4" />
                                    </Carousel.Item>
                                    <Carousel.Item className="single">
                                        <img src={logo6} alt="Brand 6" />
                                    </Carousel.Item>
                                    <Carousel.Item className="single">
                                        <img src={logo7} alt="Brand 7" />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                        <div className="cta-sub text-center no-color">
                            <div className="container">
                                <h1 className="wow fadeInUp" data-wow-delay="0s">
                                    New product notification subscription
                                </h1>
                                <p className="wow fadeInUp" data-wow-delay="0.2s">
                                    We sent you daily mail about product updates / releases / version change logs
                                    <br className="hidden-xs" />
                                    Please write accurate email address below.
                                </p>
                                <div className="form wow fadeInUp" data-wow-delay="0.3s">
                                    <form className="subscribe-form wow zoomIn">
                                        <input className="mail" type="email" name="email" placeholder="Email address" autoComplete="off" />
                                        <button className="submit-button" type="button">
                                            Subscribe
                                        </button>
                                    </form>
                                    <div className="success-message" />
                                    <div className="error-message" />
                                </div>
                            </div>
                        </div>
                        <div className="footer">
                            <div className="container">
                                <div className="col-md-12 text-center">
                                    <img src={logo} alt="Datta Able Logo" />
                                    <ul className="footer-menu">
                                        <li>
                                            <Link to="#">Site</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Support</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Terms</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Privacy</Link>
                                        </li>
                                    </ul>
                                    <div className="footer-text">
                                        <p>Copyright © 2019 React Datta Able. All Rights Reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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

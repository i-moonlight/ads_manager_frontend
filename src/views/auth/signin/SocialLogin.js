import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import axios from 'axios';

import './SocialLogin.scss';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const FACEBOOK_APP_ID = process.env.REACT_APP_FACEBOOK_APP_ID;
const FACEBOOK_STATE = process.env.REACT_APP_FACEBOOK_STATE;
const LINKEDIN_CLIENT_ID = process.env.REACT_APP_LINKEDIN_CLIENT_ID;
const LINKEDIN_STATE = process.env.REACT_APP_LINKEDIN_STATE;
const PINTEREST_CLIENT_ID = process.env.REACT_APP_PINTEREST_CLIENT_ID;
const PINTEREST_STATE = process.env.REACT_APP_PINTEREST_STATE;
const SNAPCHAT_CLIENT_ID = process.env.REACT_APP_SNAPCHAT_CLIENT_ID;
const TIKTOK_CLIENT_KEY = process.env.REACT_APP_TIKTOK_CLIENT_KEY;
const TIKTOK_STATE = process.env.REACT_APP_TIKTOK_STATE;


var _qs = require('qs');
const randomstring = require("randomstring");
const crypto = require("crypto");
const base64url = require("base64url");

const SocialLogin = () => {
    
	// FACEBOOK
   
    const facebookOAuth = () => {
        const redirectLink =
            'https://www.facebook.com/dialog/oauth?' +
            '&client_id=' +
            FACEBOOK_APP_ID +
            '&redirect_uri=' +
            window.location.origin +
            '/login/facebook' +
            '&state=' +
            FACEBOOK_STATE +
            '&scope=ads_management,public_profile,pages_show_list';
        window.location.replace(redirectLink);
    };

    // Google
   
    const googleOAuth = () => {
        const redirectLink =
            'https://accounts.google.com/o/oauth2/v2/auth?' +
            'scope=https%3A//www.googleapis.com/auth/adwords%20https%3A//www.googleapis.com/auth/userinfo.profile' +
            '&access_type=offline' +
            '&include_granted_scopes=true' +
            '&response_type=code' +
            '&state=state_parameter_passthrough_value' +
            '&redirect_uri=' +
            window.location.origin +
            '/login/google' +
            '&client_id=' +
            GOOGLE_CLIENT_ID;
        window.location.replace(redirectLink);
    };
   
   
    // LINKEDIN
    const linkedInOAuth = () => {
        const redirectLink =
            'https://www.linkedin.com/oauth/v2/authorization?response_type=code' +
            '&client_id=' +
            LINKEDIN_CLIENT_ID +
            '&redirect_uri=' +
            window.location.origin +
            '/login/linkedin' +
            '&state=' +
            LINKEDIN_STATE +
            '&scope=r_liteprofile%20r_emailaddress%20w_member_social%20rw_ads%20r_ads_reporting%20r_organization_social%20w_organization_social';
        window.location.replace(redirectLink);
    };

    
    // PINTEREST
    const pinterestOAuth = () => {
        const redirectLink =
            'https://www.pinterest.com/oauth/?response_type=code' +
            '&client_id=' +
            PINTEREST_CLIENT_ID +
            '&redirect_uri=' +
            window.location.origin +
            '/login/pinterest' +
            '&state=' +
            PINTEREST_STATE +
            '&scope=ads:read,ads:write,boards:read,boards:write,pins:read,pins:write,user_accounts:read';
        window.location.replace(redirectLink);
    };

    // SNAPCHAT
    const snapchatOAuth = () => {        
        const code_verifier = randomstring.generate(128);
        const base64Digest = crypto
        .createHash("sha256")
        .update(code_verifier)
        .digest("base64");
        const code_challenge = base64url.fromBase64(base64Digest);
        //
        const scopeList = [
            'https://auth.snapchat.com/oauth2/api/user.display_name',            
        ]
        const scope = scopeList.join(" ");
        const loginQS = {
            client_id: SNAPCHAT_CLIENT_ID,
            redirect_uri: window.location.origin + '/login/snapchat',
            response_type: "code",
            code_challenge: code_challenge,
            code_challenge_method: "S256",
            scope: scope,
            state: code_verifier,
        };
        const stringifyLoginQS = _qs.stringify(loginQS);
        const SNAP_ACCOUNTS_LOGIN_URL = 'https://accounts.snapchat.com/accounts/oauth2/auth';
        const redirectLink = SNAP_ACCOUNTS_LOGIN_URL + '?' + stringifyLoginQS;
        window.location.replace(redirectLink);
        // // window.open(redirectLink, '_blank');        
    };

    // TIKTOK
    const tiktokOAuth = () => {
        const redirectLink =
            'https://www.tiktok.com/auth/authorize/?response_type=code' +
            '&client_key=' +
            TIKTOK_CLIENT_KEY +
            '&redirect_uri=' +
            window.location.origin +
            '/login/tiktok' +
            '&state=' +
            TIKTOK_STATE +
            '&scope=user.info.basic';
		window.location.replace(redirectLink);
    };

    return (
        <React.Fragment>
            <h4 className="mb-4">Or log in with</h4>
            <Row>
                {/*  
                <Col md="4">
                    <GoogleLogin
                        clientId={GOOGLE_CLIENT_ID}
                        onSuccess={googleSuccessResponse}
                        onFailure={googleFailureResponse}
                        render={(renderProps) => (
                            <Button
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                variant={'outline-secondary'}
                                className="text-capitalize"
                                block
                            >
                                <i className="fab fa-google" />
                                Google
                            </Button>
                        )}
                    /> 
                    
                </Col>  */}
                <Col md="4">
					<Button block onClick={googleOAuth} variant={'outline-secondary'} className="text-capitalize">
                        <i className="fab fa-google" />
                        Google
                    </Button>
                </Col>
                <Col md="4">
					<Button block onClick={facebookOAuth} variant={'outline-secondary'} className="text-capitalize">
                        <i className="fab fa-facebook-f" />
                        Facebook
                    </Button>
                </Col>
                <Col md="4">
                    <Button onClick={linkedInOAuth} variant={'outline-secondary'} className="text-capitalize" block>
                        <i className="fab fa-linkedin" />
                        LinkedIn
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Button onClick={pinterestOAuth} variant={'outline-secondary'} className="text-capitalize" block>
                        <i className="fab fa-pinterest" />
                        Pinterest
                    </Button>
                </Col>
                <Col md="4">
                    <Button onClick={snapchatOAuth} variant={'outline-secondary'} className="text-capitalize" block>
                        <i className="fab fa-snapchat-ghost" />
                        Snapchat
                    </Button>
                </Col>
                <Col md="4">
                    <Button onClick={tiktokOAuth} variant={'outline-secondary'} className="text-capitalize" block>
                        <i className="fab fa-tiktok" />
                        TikTok
                    </Button>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default SocialLogin;

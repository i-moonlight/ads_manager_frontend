import React, { useState } from 'react';
import { Card, Modal, Button} from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';

import SocialLogin from './SocialLogin';
import EmailLinkLogin from './EmailLinkLogin';
import PrivacyPolicyPage from '../../legal/PrivacyPolicy'
import TermsOfServicePage from '../../legal/ToS'

const Signin1 = () => {
	const [isPrivacyPolicy, setPrivacyModal] = useState(false);
	const [isToS, setToSModal] = useState(false);
    return (
        <React.Fragment>
            <Breadcrumb />
            <div className="auth-wrapper">
                <div className="auth-content">
                    <div className="auth-bg">
                        <span className="r" />
                        <span className="r s" />
                        <span className="r s" />
                        <span className="r" />
                    </div>
                    <Card className="borderless text-center" style={{ width: '440px' }}>
						<Card.Body>
							<EmailLinkLogin />
							<br />
							<br />

							<SocialLogin />      	
							<br />
							<Button variant="link" size="sm" className="mt-0 mb-0 mr-0 ml-0 text-muted"  href="/" >
								Home
							</Button> -
							<Button variant="link" size="sm" className="mt-0 mb-0 mr-0 ml-0 text-muted"  onClick={() => setToSModal(true)}>
								Terms & Conditions
							</Button> -
							<Button variant="link" size="sm" className="mt-0 mb-0 mr-0 ml-0 text-muted" onClick={() => setPrivacyModal(true)}>
								Privacy Policy
							</Button>
							<br />
							<Button variant="link" size="sm" className="mt-0 mb-0 mr-0 ml-0 text-muted"  href="/" >
							Copyright © 2023 Link Clicks Inc.
							</Button>
							                       
                        </Card.Body>
                    </Card>
					
					<Modal size="lg" show={isPrivacyPolicy} onHide={() => setPrivacyModal(false)}>
						<Modal.Body><PrivacyPolicyPage /></Modal.Body>
						<Modal.Footer>
								<Button variant="secondary" onClick={() => setPrivacyModal(false)}>Close</Button>
						</Modal.Footer>   
					</Modal>
					<Modal size="lg" show={isToS} onHide={() => setToSModal(false)}>
						<Modal.Body><TermsOfServicePage /></Modal.Body>
						<Modal.Footer>
							<Button variant="secondary"  onClick={() => setToSModal(false)}>Close</Button>
						</Modal.Footer>
					</Modal>
                </div>
            </div>
			
        </React.Fragment>
    );
};

export default Signin1;

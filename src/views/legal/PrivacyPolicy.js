import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const PrivacyPolicyPage = () => {
    return (
        <React.Fragment>
            <Row>
                <Col>
					<Card title="Link Clicks Inc. Privacy Policy">
						<Card.Header>
                            <Card.Title as="h5">Link Clicks Inc. Privacy Policy</Card.Title>
                        </Card.Header>
                        <Card.Body>
							
							<Card.Text>
								At Link Clicks Inc., we take the privacy of our users seriously. This privacy policy applies to the Link Clicks Inc. Ads Manager (the "Service"), which is a software as a service (SaaS) platform that allows advertisers to manage ad campaigns across multiple platforms from a single dashboard.
							</Card.Text>
							<Card.Text>
								By using the Service, you agree to the collection, use, and sharing of your personal data as described in this privacy policy. If you do not agree with our policies and practices, do not use the Service.
							</Card.Text>
							

							<Card.Title as="h5">1. Personal data we collect</Card.Title>
							<Card.Text>	
								We may collect the following personal data when you use the Service:
							</Card.Text>
							<ul>
								<li>
									Contact information, such as your name, email address, and phone number
								</li>
							
								<li>
									Account login information, such as your username and password
								</li>
								<li>
									Ad campaign data, such as the ad content, target audience, and budget
								</li>
								<li>
									Usage data, such as the features and pages you access within the Service, and the time and duration of your usage
								</li>
								<li>
									Device and browser information, such as your IP address, device type, and browser type
								</li>
							</ul>

							<Card.Title as="h5">2. How we use your personal data</Card.Title>
								
								
							<Card.Text>
								We use your personal data to:
							</Card.Text>
							<ul>
								<li>Provide, maintain, and improve the Service
								</li>
								<li>
									Process and fulfill your requests, such as setting up and managing your ad campaigns
								</li>
								<li>
									Communicate with you, such as to send you updates or newsletters
								</li>
								<li>
									Analyze and improve the Service, such as by tracking usage patterns and identifying areas for improvement
								</li>
								<li>
									Protect the security and integrity of the Service, such as by detecting and preventing fraud or abuse
								</li>
							</ul>

							<Card.Title as="h5">3. Sharing of personal data</Card.Title>
							<Card.Text>
								We may share your personal data with:
							</Card.Text>
							<ul>
								<li>
									Advertisers and advertising networks, to help them deliver and track the performance of your ad campaigns
								</li>
								<li>
									Legal or regulatory authorities, if we are required to do so by law or if it is necessary to protect the rights, property, or safety of Link Clicks Inc. or others
								</li>
							</ul>
							

							<Card.Title as="h5">4. Data retention</Card.Title>
								
								
							<Card.Text>
								We will retain your personal data for as long as your account is active or as needed to provide the Service to you. We will also retain and use your personal data as necessary to comply with legal obligations, resolve disputes, and enforce our agreements.
							</Card.Text>
							
							<Card.Title as="h5">5. Data security</Card.Title>

																
							<Card.Text>
								We have implemented appropriate technical and organizational measures to protect your personal data from unauthorized access, use, or disclosure. However, no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee the absolute security of your personal data.
							</Card.Text>
							
							<Card.Title as="h5">6. Data subject rights</Card.Title>

							<Card.Text>
								You have the following rights with respect to your personal data:
							</Card.Text>
							<ul>
              					<li>The right to access and receive a copy of your personal data</li>
              					<li>The right to rectify any inaccuracies in your personal data</li>
             					 <li>The right to erase your personal data, subject to certain exceptions</li>
								<li>The right to restrict or object to the processing of your personal data</li>
								<li>The right to data portability, which allows you to obtain a copy of your personal data in a commonly used format</li>
							</ul>
							
							<Card.Text>
								
								To exercise any of these rights, please contact us at privacy@linkclicks.com.
							</Card.Text>

							<Card.Title as="h5">7. Account Deletion</Card.Title>
								
							<Card.Text>
								You may delete your account at any time using the delete button located on your account screen. When you choose to delete your account, we will remove all your personal data associated with your account from our systems, as outlined in our Data Retention policy. We will also take reasonable steps to delete your personal data from our backups within a reasonable period. Please note that deletion of an account is permanent and irreversible, and you will lose access to all your account information and content.
							</Card.Text>

							<Card.Title as="h5">8. Changes to this privacy policy</Card.Title>
								
							<Card.Text>
								We may update this privacy policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will post any updates on this page and encourage you to review the policy periodically for the most up-to-date information.
							</Card.Text>
							<Card.Title as="h5">9. Contact us</Card.Title>
							<Card.Text>
								If you have any questions about this privacy policy please contact us at privacy@linkclicks.com.
							</Card.Text>
						</Card.Body>
                    </Card>
                    
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default PrivacyPolicyPage;

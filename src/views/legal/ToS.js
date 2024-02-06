import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TermsofServicePage = () => {
    return (
        <React.Fragment>
            <Row>
                <Col>
					<Card title="Link Clicks Inc. Terms of Service">
						<Card.Header>
                            <Card.Title as="h5">Link Clicks Inc. Terms of Service</Card.Title>
                        </Card.Header>
                        <Card.Body>
							
							
							<Card.Text>
								Welcome to Link Clicks Inc. Ads Manager! By using our Services, you are agreeing to these terms. Please read them carefully.
							</Card.Text>
							
							<ol>
								<li>
									<b>Our Services:</b> Link Clicks Inc. Ads Manager is a software as a service (SaaS) ads manager that allows Advertisers to manage ad campaigns across multiple platforms from a single dashboard. Logins are secured by email or social media login. Advertisers are responsible for their own ad content, creatives, and ad spending. Link Clicks Inc. is not responsible for mis-use resulting in poor ad performance or over spending. The Ads Manager is a tool and it is the responsibility of the Advertiser to use it responsibly.<br /><br />

								</li>
								<li>
									<b>Advertiser Responsibility:</b> Advertisers must not violate any laws, rights of any third party, or use for fraudulent purposes. Advertisers are solely responsible for the content of their ads and must ensure that it complies with all applicable laws and regulations.<br /><br />
								</li>
								<li>
									<b>Changes to the Services:</b> Link Clicks Inc. reserves the right to make changes to or discontinue the Services for any reason without notice. Link Clicks Inc. has no liability for doing so.<br /><br />
								</li>
								<li>
									<b>Privacy:</b> Link Clicks Inc.’s <Link to="/privacy">privacy policy</Link> explains how we treat your personal data and protect your privacy when you use our Services. By using our Services, you agree that Link Clicks Inc. can use such data in accordance with our <Link to="/privacy">privacy policy</Link>.<br /><br />
								</li>
								<li>
									<b>Disclaimer of Warranties:</b> The Services are provided on an "as is" and "as available" basis. Link Clicks Inc. makes no representations or warranties of any kind, express or implied, as to the operation of the Services or the information, content, materials, or products included on the Services.<br /><br />
								</li>
								<li>
									<b>Limitation of Liability:</b> Link Clicks Inc. will not be liable for any damages of any kind arising from the use of the Services, including but not limited to direct, indirect, incidental, punitive, and consequential damages.<br /><br />
								</li>
								<li>
									<b>Termination:</b> Link Clicks Inc. reserves the right to terminate your access to the Services at any time, without notice, for any reason.<br /><br />
								</li>
							</ol>
							<Card.Text>
								By using the Link Clicks Inc. Ads Manager, you agree to be bound by these terms and conditions. If you do not agree to these terms, please do not use the Services.<br /><br />
							</Card.Text>					
							
						</Card.Body>
                    </Card>
                    
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default TermsofServicePage;

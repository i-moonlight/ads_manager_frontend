import React, { useState, useEffect, lazy } from 'react';
import { Row, Col, Card, Button, Form, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import {
    closeModal,
    openModal,
    selectPlatformAccounts,
    selectAdPlatform,
    selectShowForm,
    selectAdAccounts,
    selectAdAccountsRequested,
    selectAdAccountSubmitted,
    selectAccountsLoader
} from '../../store/slices/ad-accounts';
import {
    useGetAccountAdsAllQuery,
    useGoogleAuthenticateMutation,
    useGoogleAuthenticateStartQuery,
    useLinkedinAuthenticateMutation,
    useLinkedinAuthenticateStartQuery,
    useMetaAuthenticateMutation,
    useMetaAuthenticateStartQuery,
    usePinterestAuthenticateMutation,
    usePinterestAuthenticateStartQuery,
    useSnapchatAuthenticateMutation,
    useSnapchatAuthenticateStartQuery,
    useSubmitAdsMutation,
    useTiktokAuthenticateMutation,
    useTiktokAuthenticateStartQuery
} from '../../apis/ad-accounts-api-slice';
import { w3cwebsocket as WebSocket } from 'websocket';
import PNotify from 'pnotify/dist/es/PNotify';
import LoadingModal from '../../components/Modal/LoadingModal';

const AlertDisableAdAccountModel = lazy(() => import('./AlertDisableAdAccountModel'));

const client = new WebSocket('ws://localhost:8000/ws/ad-accounts/');

const AdsEnable = () => {
    const [formME, setFormME] = useState({
        showButton: true
    });

    const dispatch = useDispatch();
    let location = useLocation();
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormME((prev) => ({ ...prev, [name]: value, showButton: false }));
    };

    const platform_accounts = useSelector(selectPlatformAccounts);
    const ad_platform = useSelector(selectAdPlatform);
    const show_form = useSelector(selectShowForm);
    const ad_accounts = useSelector(selectAdAccounts);
    const ad_accounts_requested = useSelector(selectAdAccountsRequested);
    const ad_account_submitted = useSelector(selectAdAccountSubmitted);
    const accounts_loader = useSelector(selectAccountsLoader);

    const [isShow_AlertDisableAdAccountModal, setIsShow_AlertDisableAdAccountModal] = useState(false);
    const [platformName, setPlatformName] = useState('');

    const [googleAuthenticateStart, setGoogleAuthenticateStart] = useState(false);
    const [linkedinAuthenticateStart, setLinkedinAuthenticateStart] = useState(false);
    const [metaAuthenticateStart, setMetaAuthenticateStart] = useState(false);
    const [pinterestAuthenticateStart, setPinterestAuthenticateStart] = useState(false);
    const [snapchatAuthenticateStart, setSnapchatAuthenticateStart] = useState(false);
    const [tiktokAuthenticateStart, setTiktokAuthenticateStart] = useState(false);

    useGetAccountAdsAllQuery();
    useGoogleAuthenticateStartQuery(undefined, { skip: !googleAuthenticateStart });
    useLinkedinAuthenticateStartQuery(undefined, { skip: !linkedinAuthenticateStart });
    useMetaAuthenticateStartQuery(undefined, { skip: !metaAuthenticateStart });
    usePinterestAuthenticateStartQuery(undefined, { skip: !pinterestAuthenticateStart });
    useSnapchatAuthenticateStartQuery(undefined, { skip: !snapchatAuthenticateStart });
    useTiktokAuthenticateStartQuery(undefined, { skip: !tiktokAuthenticateStart });

    const [submitAds] = useSubmitAdsMutation();
    const [googleAuthenticate] = useGoogleAuthenticateMutation();
    const [linkedinAuthenticate] = useLinkedinAuthenticateMutation();
    const [metaAuthenticate] = useMetaAuthenticateMutation();
    const [pinterestAuthenticate] = usePinterestAuthenticateMutation();
    const [snapchatAuthenticate] = useSnapchatAuthenticateMutation();
    const [tiktokAuthenticate] = useTiktokAuthenticateMutation();

    const [isImporting, setIsImporting] = useState({ platform: '', status: false });
    const [taskId, setTaskId] = useState();

    const handleClose = () => {
        dispatch(closeModal());
    };

    useEffect(() => {
        if (!ad_account_submitted && !ad_accounts_requested && ad_platform) {
            dispatch(openModal());
        }
    }, [dispatch, ad_account_submitted, ad_accounts_requested, ad_platform]);

    useEffect(() => {
        const values = queryString.parse(location.search);
        const google_state = values.state ? values.state : null;
        const code = values.code ? values.code : null;

        if (ad_platform === 'google_ads' && !ad_accounts.google_ads && !ad_account_submitted && !show_form && !ad_accounts_requested) {
            googleAuthenticate({ state: google_state, code });
        } else if (ad_platform === 'linkedin' && !ad_accounts.linkedin && !ad_account_submitted && !show_form && !ad_accounts_requested) {
            linkedinAuthenticate({ code });
        } else if (ad_platform === 'meta_ads' && !ad_accounts.meta_ads && !ad_account_submitted && !show_form && !ad_accounts_requested) {
            metaAuthenticate({ code });
        } else if (ad_platform === 'pinterest' && !ad_accounts.pinterest && !ad_account_submitted && !show_form && !ad_accounts_requested) {
            pinterestAuthenticate({ code });
        } else if (ad_platform === 'snapchat' && !ad_accounts.snapchat && !ad_account_submitted && !show_form && !ad_accounts_requested) {
            snapchatAuthenticate({ code });
        } else if (ad_platform === 'tiktok' && !ad_accounts.tiktok && !ad_account_submitted && !show_form && !ad_accounts_requested) {
            tiktokAuthenticate({ code });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    useEffect(() => {
        client.onmessage = (message) => {
            const messageData = JSON.parse(message.data);

            if (messageData?.ad_platform.length) {
                setIsImporting({ platform: messageData.ad_platform, status: messageData.is_importing });
            }

            if (messageData?.message?.length) {
                const notice = PNotify.success({
                    title: false,
                    text: messageData.message,
                    icon: true,
                    modules: {
                        Buttons: {
                            closer: true,
                            sticker: false
                        }
                    }
                });
                notice.on('click', function () {
                    notice.close();
                });
            }

            if (messageData?.task_id) {
                setTaskId(messageData.task_id);
            }
        };
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const selectedOption = JSON.parse(formME.account);
        const account_id = selectedOption.account_id;
        const account_name = selectedOption.account_name;

        submitAds({ account_id, account_name, ad_platform });
        handleClose();
        history.push('/ad-accounts');
    };

    const continueWithGoogle = async () => {
        setGoogleAuthenticateStart(true);
    };
    const disableGoogle = () => {
        setPlatformName('Google');
        setIsShow_AlertDisableAdAccountModal(true);
    };
    const continueWithLinkedin = async () => {
        setLinkedinAuthenticateStart(true);
    };
    const disableLinkedin = () => {
        setPlatformName('LinkedIn');
        setIsShow_AlertDisableAdAccountModal(true);
    };
    const continueWithMeta = async () => {
        setMetaAuthenticateStart(true);
    };
    const disableMeta = () => {
        setPlatformName('meta_ads');
        setIsShow_AlertDisableAdAccountModal(true);
    };
    const continueWithPinterest = async () => {
        setPinterestAuthenticateStart(true);
    };
    const disablePinterest = () => {
        setPlatformName('Pinterest');
        setIsShow_AlertDisableAdAccountModal(true);
    };
    const continueWithSnapchat = async () => {
        setSnapchatAuthenticateStart(true);
    };
    const disableSnapchat = () => {
        setPlatformName('Snapchat');
        setIsShow_AlertDisableAdAccountModal(true);
    };
    const continueWithTiktok = async () => {
        setTiktokAuthenticateStart(true);
    };
    const disableTiktok = () => {
        setPlatformName('Tiktok');
        setIsShow_AlertDisableAdAccountModal(true);
    };
    let all_ads = Array.isArray(platform_accounts);
    console.log('ad_accounts: ', ad_accounts);
    return (
        <React.Fragment>
            <h3>Connected Ad Accounts</h3>
            <Row>
                <Col md={4} xl={4}>
                    <Card>
                        <Card.Body className="border-bottom">
                            <h4 className="mb-4">
                                <i className="fab fa-google text-c-red f-24"></i> <i className="fab fa-youtube text-c-red f-24"></i> -
                                Google Ads{' '}
                            </h4>
                            <div className="align-items-center">
                                {isImporting.platform === 'google_ads' && isImporting.status ? (
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={<Tooltip id={isImporting.platform}>This may take some time to complete.</Tooltip>}
                                    >
                                        <Button
                                            onClick={() => disableGoogle()}
                                            aria-controls="basic-collapse"
                                            aria-expanded={show_form}
                                            variant="primary"
                                        >
                                            <span className="spinner-border spinner-grow-sm mr-2" role="status" />
                                            Importing Ad Campaigns
                                        </Button>
                                    </OverlayTrigger>
                                ) : ad_accounts.google_ads ? (
                                    <>
                                        <Button
                                            onClick={() => disableGoogle()}
                                            aria-controls="basic-collapse"
                                            aria-expanded={show_form}
                                            variant="success"
                                        >
                                            <i className="fas fa-check-circle"></i>
                                            Enabled
                                        </Button>

                                        <div className="pt-2">Account: {ad_accounts.google_ads}</div>
                                    </>
                                ) : (
                                    <>
                                        <Button
                                            onClick={() => {
                                                continueWithGoogle();
                                            }}
                                            aria-controls="basic-collapse"
                                            aria-expanded={show_form}
                                            variant="danger"
                                        >
                                            <i className="fas fa-exclamation-triangle"></i>
                                            Enable Google Ads
                                        </Button>
                                    </>
                                )}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} xl={4}>
                    <Card>
                        <Card.Body className="border-bottom">
                            <h4 className="mb-4">
                                <i className="fab fa-linkedin text-primary f-24"></i> - LinkedIn Ads{' '}
                            </h4>
                            <div className="align-items-center">
                                {isImporting.platform === 'linkedin' && isImporting.status ? (
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={<Tooltip id={isImporting.platform}>This may take some time to complete.</Tooltip>}
                                    >
                                        <Button
                                            onClick={() => disableLinkedin()}
                                            aria-controls="basic-collapse"
                                            aria-expanded={show_form}
                                            variant="primary"
                                        >
                                            <span className="spinner-border spinner-grow-sm mr-2" role="status" />
                                            Importing Ad Campaigns
                                        </Button>
                                    </OverlayTrigger>
                                ) : ad_accounts.linkedin ? (
                                    <>
                                        <Button
                                            onClick={() => disableLinkedin()}
                                            aria-controls="basic-collapse"
                                            aria-expanded={show_form}
                                            variant="success"
                                        >
                                            <i className="fas fa-check-circle"></i>
                                            Enabled
                                        </Button>

                                        <div className="pt-2">Account: {ad_accounts.linkedin}</div>
                                    </>
                                ) : (
                                    <>
                                        <Button
                                            onClick={() => {
                                                continueWithLinkedin();
                                            }}
                                            aria-controls="basic-collapse"
                                            aria-expanded={show_form}
                                            variant="danger"
                                        >
                                            <i className="fas fa-exclamation-triangle"></i>
                                            Enable LinkedIn Ads
                                        </Button>
                                    </>
                                )}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} xl={4}>
                    <Card>
                        <Card.Body className="border-bottom">
                            <h4 className="mb-4">
                                <i className="fab fa-meta text-primary f-24"></i> <i className="fab fa-facebook-f text-primary f-24"></i>{' '}
                                <i className="fab fa-facebook-messenger text-primary f-24"></i>{' '}
                                <i className="fab fa-instagram text-c-purple f-24"></i> - Meta Ads{' '}
                            </h4>
                            <div className="align-items-center">
                                {isImporting.platform === 'meta_ads' && isImporting.status ? (
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={<Tooltip id={isImporting.platform}>This may take some time to complete.</Tooltip>}
                                    >
                                        <Button
                                            onClick={() => disableMeta()}
                                            aria-controls="basic-collapse"
                                            aria-expanded={show_form}
                                            variant="primary"
                                        >
                                            <span className="spinner-border spinner-grow-sm mr-2" role="status" />
                                            Importing Ad Campaigns
                                        </Button>
                                    </OverlayTrigger>
                                ) : ad_accounts.meta_ads ? (
                                    <>
                                        <Button
                                            onClick={() => disableMeta()}
                                            aria-controls="basic-collapse"
                                            aria-expanded={show_form}
                                            variant="success"
                                        >
                                            <i className="fas fa-check-circle"></i>
                                            Enabled
                                        </Button>

                                        <div className="pt-2">Account: {ad_accounts.meta_ads}</div>
                                    </>
                                ) : (
                                    <>
                                        <Button
                                            onClick={() => {
                                                continueWithMeta();
                                            }}
                                            aria-controls="basic-collapse"
                                            aria-expanded={show_form}
                                            variant="danger"
                                        >
                                            <i className="fas fa-exclamation-triangle"></i>
                                            Enable Meta Ads
                                        </Button>
                                    </>
                                )}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} xl={4}>
                    <Card>
                        <Card.Body className="border-bottom">
                            <h4 className="mb-4">
                                <i className="fab fa-pinterest text-c-red f-24"></i> - Pinterest Ads{' '}
                            </h4>
                            <div className="align-items-center">
                            { isImporting.platform === 'tiktok' && isImporting.status ? (
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={<Tooltip id={isImporting.platform}>This may take some time to complete.</Tooltip>}
                                    >
                                        <Button
                                            onClick={() => disableLinkedin()}
                                            aria-controls="basic-collapse"
                                            aria-expanded={show_form}
                                            variant="primary"
                                        >
                                            <span className="spinner-border spinner-grow-sm mr-2" role="status" />
                                            Importing Ad Campaigns
                                        </Button>
                                    </OverlayTrigger>
                                ) : ad_accounts.pinterest ? (
                                    <>
                                        <Button
                                            onClick={() => disablePinterest()}
                                            aria-controls="basic-collapse"
                                            aria-expanded={show_form}
                                            variant="success"
                                        >
                                            <i className="fas fa-check-circle"></i>
                                            Enabled
                                        </Button>

                                        <div className="pt-2">Account: {ad_accounts.pinterest}</div>
                                    </>
                                ) : (
                                    <>
                                        <Button
                                            onClick={() => {
                                                continueWithPinterest();
                                            }}
                                            aria-controls="basic-collapse"
                                            aria-expanded={show_form}
                                            variant="danger"
                                        >
                                            <i className="fas fa-exclamation-triangle"></i>
                                            Enable Pinterest Ads
                                        </Button>
                                    </>
                                )}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} xl={4}>
                    <Card>
                        <Card.Body className="border-bottom">
                            <h4 className="mb-4">
                                <i
                                    className="fab fa-snapchat f-24"
                                    style={{ color: 'yellow', textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black' }}
                                ></i>{' '}
                                - Snapchat Ads{' '}
                            </h4>
                            <div className="align-items-center">
                                { isImporting.platform === 'snapchat' && isImporting.status ? (
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={<Tooltip id={isImporting.platform}>This may take some time to complete.</Tooltip>}
                                    >
                                        <Button
                                            onClick={() => disableLinkedin()}
                                            aria-controls="basic-collapse"
                                            aria-expanded={show_form}
                                            variant="primary"
                                        >
                                            <span className="spinner-border spinner-grow-sm mr-2" role="status" />
                                            Importing Ad Campaigns
                                        </Button>
                                    </OverlayTrigger>
                                ) : ad_accounts.snapchat ? (
                                    <>
                                        <Button
                                            onClick={() => disableSnapchat()}
                                            aria-controls="basic-collapse"
                                            aria-expanded={show_form}
                                            variant="success"
                                        >
                                            <i className="fas fa-check-circle"></i>
                                            Enabled
                                        </Button>

                                        <div className="pt-2">Account: {ad_accounts.snapchat}</div>
                                    </>
                                ) : (
                                    <>
                                        <Button
                                            onClick={() => {
                                                continueWithSnapchat();
                                            }}
                                            aria-controls="basic-collapse"
                                            aria-expanded={show_form}
                                            variant="danger"
                                        >
                                            <i className="fas fa-exclamation-triangle"></i>
                                            Enable Snapchat Ads
                                        </Button>
                                    </>
                                )}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} xl={4}>
                    <Card>
                        <Card.Body className="border-bottom">
                            <h4 className="mb-4">
                                <i
                                    className="fab fa-tiktok f-24"
                                    style={{ color: 'black', textShadow: '-1.2px -1.2px 0 #28ffff, 1.2px 1.2px 0 #ff0050' }}
                                ></i>{' '}
                                - TikTok Ads{' '}
                            </h4>
                            <div className="align-items-center">
                                {isImporting.platform === 'tiktok' && isImporting.status ? (
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={<Tooltip id={isImporting.platform}>This may take some time to complete.</Tooltip>}
                                    >
                                        <Button
                                            onClick={() => disableLinkedin()}
                                            aria-controls="basic-collapse"
                                            aria-expanded={show_form}
                                            variant="primary"
                                        >
                                            <span className="spinner-border spinner-grow-sm mr-2" role="status" />
                                            Importing Ad Campaigns
                                        </Button>
                                    </OverlayTrigger>
                                ) : ad_accounts.tiktok ? (
                                    <>
                                        <Button
                                            onClick={() => disableTiktok()}
                                            aria-controls="basic-collapse"
                                            aria-expanded={show_form}
                                            variant="success"
                                        >
                                            <i className="fas fa-check-circle"></i>
                                            Enabled
                                        </Button>

                                        <div className="pt-2">Account: {ad_accounts.tiktok}</div>
                                    </>
                                ) : (
                                    <>
                                        <Button
                                            onClick={() => {
                                                continueWithTiktok();
                                            }}
                                            aria-controls="basic-collapse"
                                            aria-expanded={show_form}
                                            variant="danger"
                                        >
                                            <i className="fas fa-exclamation-triangle"></i>
                                            Enable Tiktok Ads
                                        </Button>
                                    </>
                                )}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <LoadingModal show={accounts_loader} onHide={handleClose} />

                <Modal
                    show={show_form && !ad_account_submitted}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Authorize Advertising Account</Form.Label>
                                <Form.Control as="select" name="account" onChange={handleChange} value={formME?.account || ''}>
                                    <option value={''} disabled>
                                        Select account
                                    </option>
                                    {all_ads
                                        ? platform_accounts?.map((acc, index) => {
                                              return (
                                                  <option key={index} value={JSON.stringify(acc)}>
                                                      {acc.account_name}
                                                  </option>
                                              );
                                          })
                                        : null}
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="success"
                            onClick={(e) => {
                                handleSubmit(e);
                            }}
                            disabled={formME.showButton}
                        >
                            Authorize
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Decline
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Row>
            {!!isShow_AlertDisableAdAccountModal && (
                <AlertDisableAdAccountModel
                    show={isShow_AlertDisableAdAccountModal}
                    hideModal={() => setIsShow_AlertDisableAdAccountModal(false)}
                    platformName={platformName}
                    taskId={taskId}
                />
            )}
        </React.Fragment>
    );
};

export default AdsEnable;

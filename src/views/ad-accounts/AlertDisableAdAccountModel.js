import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import {
    useGoogleDisableAdsMutation,
    useLinkedinDisableAdsMutation,
    useMetaDisableAdsMutation,
    usePinterestDisableAdsMutation,
    useSnapchatDisableAdsMutation,
    useTiktokDisableAdsMutation
} from '../../apis/ad-accounts-api-slice';

const AlertDisableAdAccountModel = (props) => {
    const platform_name = props.platformName;
    const [googleDisableAds] = useGoogleDisableAdsMutation();
    const [linkedinDisableAds] = useLinkedinDisableAdsMutation();
    const [metaDisableAds] = useMetaDisableAdsMutation();
    const [pinterestDisableAds] = usePinterestDisableAdsMutation();
    const [snapchatDisableAds] = useSnapchatDisableAdsMutation();
    const [tiktokDisableAds] = useTiktokDisableAdsMutation();

    const handleAgreeDisableAdAccount = () => {
        let _platform_name = platform_name.toLowerCase();
        if (_platform_name === 'google') {
            googleDisableAds(props.taskId);
        } else if (_platform_name === 'linkedin') {
            linkedinDisableAds(props.taskId);
        } else if (_platform_name === 'meta_ads') {
            metaDisableAds(props.taskId);
        } else if (_platform_name === 'pinterest') {
            pinterestDisableAds();
        } else if (_platform_name === 'snapchat') {
            snapchatDisableAds();
        } else if (_platform_name === 'tiktok') {
            tiktokDisableAds();
        }
        props.hideModal(false);
    };

    return (
        <>
            <Modal show={props.show} onHide={props.hideModal} scrollable={false} size="md" backdrop="static">
                <Modal.Header>
                    <Modal.Title as="h5">Attention</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Are you sure you want to disable {platform_name} Ads? You will no longer be able to manage your {platform_name} Ads
                        if you do so and all {platform_name} Ads data will be removed.
                    </p>
                </Modal.Body>
                <Modal.Footer className="flex justify-content-between align-items-center">
                    <Button variant="secondary" onClick={() => props.hideModal(false)}>
                        Cancel
                    </Button>
                    <div></div>
                    <Button onClick={() => handleAgreeDisableAdAccount()} variant="primary">
                        Agree
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AlertDisableAdAccountModel;

import React, { lazy } from 'react';
import { Modal, Tabs, Tab } from 'react-bootstrap';

import { useAdsManagerLibraryConsumer } from '../../common/AdsManagerLibraryContext';

const CampaignCreateNew = lazy(() => import('./CampaignCreateNew'));
const CampaignCreateAndEditExisting = lazy(() => import('./CampaignCreateAndEditExisting'));

const CampaignCreateAndEditModal = (props) => {
    const { state_AdsManagerLC } = useAdsManagerLibraryConsumer();
    const { amIsVisibilityCampaignCreateAndEditModal, amIsShowCampaignCreateAndEditModal } = state_AdsManagerLC;
    //

    return (
        <>
            <Modal
                style={{ visibility: amIsVisibilityCampaignCreateAndEditModal }}
                id="modalCampaignCreateAndEditModal"
                show={amIsShowCampaignCreateAndEditModal}
                onHide={props.hideModal}
                scrollable={false}
                size="md"
                backdrop="static"
            >
                <Modal.Body>
                    <Tabs defaultActiveKey="campaign_existing" justify>
                        <Tab eventKey="campaign_new" title="CREATE NEW CAMPAIGN">
                            <CampaignCreateNew />
                        </Tab>
                        <Tab eventKey="campaign_existing" title="USE EXISTING CAMPAIGN." style={{ height: '718px' }}>
                            <CampaignCreateAndEditExisting />
                        </Tab>
                    </Tabs>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default CampaignCreateAndEditModal;

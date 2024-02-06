import React, { lazy } from 'react';
import { Modal } from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap';

import { useAdsManagerLibraryConsumer } from '../../common/AdsManagerLibraryContext';
import { useSelector } from 'react-redux';
import { selectCurrentTab } from '../../../../store/slices/ads-manager';
import { adsManagerTabs } from '../../../../config/constant';
import useGetAdsManagerData from '../../../../hooks/useGetAdsManagerData';

const CampaignCreateNew = lazy(() => import('./CampaignCreateNew'));
const CampaignCreateExisting = lazy(() => import('./CampaignCreateExisting'));

const CampaignCreateModal = (props) => {
    const { state_AdsManagerLC } = useAdsManagerLibraryConsumer();
    const { amIsVisibilityCampaignCreateModal, amIsShowCampaignCreateModal, amIsShowTabUseExistingCampaign } = state_AdsManagerLC;
    const currentTab = useSelector(selectCurrentTab);

    const { data: adsManagerData } = useGetAdsManagerData();

    return (
        <>
            <Modal
                style={{ visibility: amIsVisibilityCampaignCreateModal }}
                show={amIsShowCampaignCreateModal}
                onHide={props.hideModal}
                scrollable={false}
                size="md mt-0"
                backdrop="static"
            >
                <Modal.Body>
                    <Tabs
                        defaultActiveKey={
                            currentTab !== adsManagerTabs.campaign && adsManagerData.campaigns.length ? 'campaign_existing' : 'campaign_new'
                        }
                        justify
                    >
                        <Tab eventKey="campaign_new" title="CREATE NEW CAMPAIGN">
                            <CampaignCreateNew />
                        </Tab>
                        {amIsShowTabUseExistingCampaign && (
                            <Tab eventKey="campaign_existing" title="USE EXISTING CAMPAIGN">
                                <CampaignCreateExisting />
                            </Tab>
                        )}
                    </Tabs>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default CampaignCreateModal;

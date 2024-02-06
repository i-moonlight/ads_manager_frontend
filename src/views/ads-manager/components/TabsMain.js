import React, { lazy, useState } from 'react';
import { Tabs, Tab, Badge, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

import { MultiSelect } from 'primereact/multiselect';
import { useAdsManagerLibraryConsumer } from '../common/AdsManagerLibraryContext';
import * as actions_AdsManagerLAT from '../common/AdsManagerLibraryActionType';

import './TabsMain.scss';

import { useExtraLibraryConsumer } from '../../../contexts/extra/ExtraLibraryContext';
import * as actions_ExtraLAT from '../../../contexts/extra/ExtraLibraryActionType';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectCurrentTab,
    selectIsGroupPlatforms,
    selectIsHideEmptyRows,
    toggleIsGroupPlatforms,
    toggleIsHideEmptyRows,
    updateCurrentTab
} from '../../../store/slices/ads-manager';
import { adsManagerTabs } from '../../../config/constant';

const CampaignList = lazy(() => import('./campaign/CampaignList'));
const AdSetList = lazy(() => import('./adset/AdSetList'));
const AdsList = lazy(() => import('./ads/AdsList'));
//
const CampaignUnGroupList = lazy(() => import('./campaign/CampaignUnGroupList'));
const AdSetUnGroupList = lazy(() => import('./adset/AdSetUnGroupList'));
const AdsUnGroupList = lazy(() => import('./ads/AdsUnGroupList'));

const TabsMain = () => {
    const { dispatch_AdsManagerLC } = useAdsManagerLibraryConsumer();

    const { state_ExtraLC, dispatch_ExtraLC } = useExtraLibraryConsumer();
    const {
        extra_amViewBy,
        extra_amSelectedCampaignList,
        extra_amSelectedAdSetList,
        extra_amSelectedAdsList,
        extra_amSelectedCampaignPlatformList,
        extra_amSelectedAdSetPlatformList,
        extra_amSelectedAdsPlatformList
    } = state_ExtraLC;

    const isGroupPlatforms = useSelector(selectIsGroupPlatforms);
    const isHideEmptyRows = useSelector(selectIsHideEmptyRows);
    const currentTab = useSelector(selectCurrentTab);

    const [viewBy, setViewBy] = useState(extra_amViewBy);

    const dispatch = useDispatch();

    const viewByItems = [
        // { label: 'Select all', value: 'Select all,' },
        { label: 'Impressions', value: 'Impressions,' },
        { label: 'Clicks', value: 'Clicks,' },
        { label: 'CTR', value: 'CTR,' },
        { label: 'CPC', value: 'CPC,' },
        { label: 'CPM', value: 'CPM,' },
        // { label: 'CPA', value: 'CPA,' },
        { label: 'Spent', value: 'Spent,' }
        // { label: 'ROAS', value: 'ROAS,' }
    ];

    const handleChangeViewBy = (value) => {
        localStorage.setItem(actions_ExtraLAT.LOCAL_STORAGE_ADS_MANAGER_VIEW_BY, JSON.stringify(value));
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_VIEW_BY,
            payload: value
        });
        dispatch_ExtraLC({
            type: actions_ExtraLAT.AT_SET_EXTRA_ADS_MANAGER_VIEW_BY,
            payload: value
        });
        setViewBy(value);
    };

    const handleSelect = (eventKey) => {
        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_ADS_MANAGER_KEY_TAB_LIST,
            payload: eventKey
        });
        dispatch(updateCurrentTab(eventKey));

        dispatch_AdsManagerLC({
            type: actions_AdsManagerLAT.AT_SET_IS_REFRESH_BY_USER,
            payload: false
        });
    };

    const handleChangeGroupPlatforms = (event) => {
        dispatch(toggleIsGroupPlatforms());
    };

    return (
        <Tabs fill defaultActiveKey={currentTab} onSelect={handleSelect}>
            <Tab
                eventKey={adsManagerTabs.campaign}
                title={
                    <>
                        <div>
                            <i className="fas fa-folder-open"></i> Campaigns
                        </div>
                        <div>
                            {isGroupPlatforms && extra_amSelectedCampaignList && extra_amSelectedCampaignList.length > 0 && (
                                <Badge variant="primary" className="ml-1">
                                    {String(extra_amSelectedCampaignList.length)} selected
                                </Badge>
                            )}
                            {!isGroupPlatforms &&
                                extra_amSelectedCampaignPlatformList &&
                                extra_amSelectedCampaignPlatformList.length > 0 && (
                                    <Badge variant="primary" className="ml-1">
                                        {String(extra_amSelectedCampaignPlatformList.length)} selected
                                    </Badge>
                                )}
                        </div>
                    </>
                }
                tabClassName="tab_item"
            >
                {isGroupPlatforms ? <CampaignList /> : <CampaignUnGroupList />}
            </Tab>
            <Tab
                eventKey={adsManagerTabs.adSet}
                title={
                    <>
                        <div>
                            <i className="feather icon-grid"></i> Ad sets{' '}
                            {isGroupPlatforms && extra_amSelectedCampaignList && extra_amSelectedCampaignList.length > 0 && (
                                <>for {String(extra_amSelectedCampaignList.length)} Campaigns</>
                            )}
                            {!isGroupPlatforms &&
                                extra_amSelectedCampaignPlatformList &&
                                extra_amSelectedCampaignPlatformList.length > 0 && (
                                    <>for {String(extra_amSelectedCampaignPlatformList.length)} Campaigns</>
                                )}
                        </div>
                        <div>
                            {isGroupPlatforms && extra_amSelectedAdSetList && extra_amSelectedAdSetList.length > 0 && (
                                <Badge variant="primary" className="ml-1">
                                    {String(extra_amSelectedAdSetList.length)} selected
                                </Badge>
                            )}
                            {!isGroupPlatforms && extra_amSelectedAdSetPlatformList && extra_amSelectedAdSetPlatformList.length > 0 && (
                                <Badge variant="primary" className="ml-1">
                                    {String(extra_amSelectedAdSetPlatformList.length)} selected
                                </Badge>
                            )}
                        </div>
                    </>
                }
                tabClassName="tab_item"
            >
                {isGroupPlatforms ? <AdSetList /> : <AdSetUnGroupList />}
            </Tab>
            <Tab
                eventKey={adsManagerTabs.ad}
                title={
                    <>
                        <div>
                            <i className="fas fa-bullhorn"></i> Ads{' '}
                            {isGroupPlatforms && extra_amSelectedAdSetList && extra_amSelectedAdSetList.length > 0 ? (
                                <>for {String(extra_amSelectedAdSetList.length)} Ad sets</>
                            ) : (
                                <>
                                    {isGroupPlatforms && extra_amSelectedCampaignList && extra_amSelectedCampaignList.length > 0 && (
                                        <>for {String(extra_amSelectedCampaignList.length)} Campaigns</>
                                    )}
                                </>
                            )}
                            {!isGroupPlatforms && extra_amSelectedAdSetPlatformList && extra_amSelectedAdSetPlatformList.length > 0 ? (
                                <>for {String(extra_amSelectedAdSetPlatformList.length)} Ad sets</>
                            ) : (
                                <>
                                    {!isGroupPlatforms &&
                                        extra_amSelectedCampaignPlatformList &&
                                        extra_amSelectedCampaignPlatformList.length > 0 && (
                                            <>for {String(extra_amSelectedCampaignPlatformList.length)} Campaigns</>
                                        )}
                                </>
                            )}
                        </div>
                        <div>
                            {isGroupPlatforms && extra_amSelectedAdsList && extra_amSelectedAdsList.length > 0 && (
                                <Badge variant="primary" className="ml-1">
                                    {String(extra_amSelectedAdsList.length)} selected
                                </Badge>
                            )}
                            {!isGroupPlatforms && extra_amSelectedAdsPlatformList && extra_amSelectedAdsPlatformList.length > 0 && (
                                <Badge variant="primary" className="ml-1">
                                    {String(extra_amSelectedAdsPlatformList.length)} selected
                                </Badge>
                            )}
                        </div>
                    </>
                }
                tabClassName="tab_item"
            >
                {isGroupPlatforms ? <AdsList /> : <AdsUnGroupList />}
            </Tab>
            <Tab
                tabClassName="lastTab"
                title={
                    <>
                        <div className="right_buttons">
                            <OverlayTrigger
                                placement="left"
                                overlay={
                                    <Tooltip id={`tooltip-empty-rows`}>{isHideEmptyRows ? 'Empty Rows Hidden' : 'Hide Empty Rows'}</Tooltip>
                                }
                            >
                                <Button
                                    size="sm"
                                    style={{ paddingRight: 4, marginBottom: '0px' }}
                                    variant={isHideEmptyRows ? 'secondary' : 'success'}
                                    onClick={() => dispatch(toggleIsHideEmptyRows())}
                                >
                                    {isHideEmptyRows ? (
                                        <i className="fas fa-eye-slash" title="Empty Rows Hidden" />
                                    ) : (
                                        <i className="fas fa-eye" />
                                    )}
                                </Button>
                            </OverlayTrigger>

                            <OverlayTrigger
                                placement="bottom"
                                overlay={
                                    <Tooltip id={`tooltip-group`}>{isGroupPlatforms ? 'Ungroup Platforms' : 'Group Platforms'}</Tooltip>
                                }
                            >
                                <Button
                                    size="sm"
                                    style={{ paddingRight: 4, marginBottom: '0px' }}
                                    variant={isGroupPlatforms ? 'success' : 'secondary'}
                                    onClick={handleChangeGroupPlatforms}
                                >
                                    {isGroupPlatforms ? (
                                        <i className="fa fa-layer-group" title="Platforms Grouped" />
                                    ) : (
                                        <i className="fa fa-layer-group" style={{ color: 'success' }} title="Group Platforms" />
                                    )}
                                </Button>
                            </OverlayTrigger>

                            <MultiSelect
                                value={viewBy}
                                options={viewByItems}
                                onChange={(e) => handleChangeViewBy(e.value)}
                                placeholder="View by"
                                maxSelectedLabels={3}
                            />
                        </div>
                    </>
                }
            ></Tab>
        </Tabs>
    );
};

export default TabsMain;

import React, { useContext } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import LayoutOptions from './LayoutOptions';
import ColorOptions from './ColorOptions';
import MenuOptions from './MenuOptions';

import { ConfigContext } from '../../../../contexts/ConfigContext';

const TabConfig = () => {
    const configContext = useContext(ConfigContext);
    const { layout, subLayout } = configContext.state;

    let layoutTab, colorTab;
    let defaultActive;
    if (layout !== 'horizontal') {
        layoutTab = (
            <Tab eventKey="layout" title="LAYOUT">
                <LayoutOptions />
            </Tab>
        );
    }

    if (subLayout !== 'layout-8') {
        defaultActive = 'color';
        colorTab = (
            <Tab eventKey="color" title="COLOR">
                <ColorOptions />
            </Tab>
        );
    } else {
        defaultActive = 'extra';
    }

    return (
        <React.Fragment>
            <Tabs variant="pills" defaultActiveKey={defaultActive} id="pills-custom-tab" className="mb-2">
                {colorTab}
                {layoutTab}
                <Tab eventKey="extra" title="EXTRA">
                    <MenuOptions />
                </Tab>
            </Tabs>
        </React.Fragment>
    );
};

export default TabConfig;

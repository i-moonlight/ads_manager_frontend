import React from 'react';

import NavCollapse from '../NavCollapse';
import NavItem from '../NavItem';

const NavGroup = ({ layout, group }) => {
    let navItems = '';

    if (group.children) {
        const groups = group.children;
        navItems = Object.keys(groups).map((item) => {
            item = groups[item];
            switch (item.type) {
                case 'collapse':
                    return <NavCollapse key={item.id} collapse={item} type="main" />;
                case 'item':
                    return <NavItem layout={layout} key={item.id} item={item} />;
                default:
                    return false;
            }
        });
    }

    return (
        <React.Fragment>
            {navItems}
        </React.Fragment>
    );
};

export default NavGroup;

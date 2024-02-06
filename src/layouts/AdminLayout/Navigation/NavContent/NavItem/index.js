import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector} from 'react-redux';

import NavIcon from '../NavIcon';
import NavBadge from '../NavBadge';

import { ConfigContext } from '../../../../../contexts/ConfigContext';
import * as actionType from '../../../../../store/actions';
import useWindowSize from '../../../../../hooks/useWindowSize';
import { API_SERVER } from '../../../../../config/constant';
import { logout, selectToken } from '../../../../../store/slices/account';

const NavItem = ({ layout, item }) => {
    const windowSize = useWindowSize();
    const configContext = useContext(ConfigContext);
    const { dispatch } = configContext;
    const token = useSelector(selectToken)
    const dispatcher = useDispatch();

    const handleLogout = () => {
        axios
            .post(API_SERVER + 'users/logout', {}, { headers: { Authorization: `${token}` } })
            .then(function (response) {
                // Force the LOGOUT
                dispatcher(logout());
            })
            .catch(function (error) {
                console.log('error - ', error);
				dispatcher(logout());
            });
    };
    let itemTitle = item.title;
    if (item.icon) {
        itemTitle = <span className="pcoded-mtext">{item.title}</span>;
    }

    let itemTarget = '';
    if (item.target) {
        itemTarget = '_blank';
    }

    let subContent;
    if (item.external) {
        subContent = (
            <a href={item.url} target="_blank" rel="noopener noreferrer">
                <NavIcon items={item} />
                {itemTitle}
                <NavBadge items={item} />
            </a>
        );
    } else {
        subContent = (
			<NavLink to={item.url} className="nav-link"
				exact={true}
				target={itemTarget}
				onClick={() => {
					if (item.url === '/logout') {
						console.log('logging out');
						handleLogout();
					}
				}}
			>
                <NavIcon items={item} />
                {itemTitle}
                <NavBadge items={item} />
            </NavLink>
        );
    }
    let mainContent = '';
    if (layout === 'horizontal') {
        mainContent = (
            <ListGroup.Item as="li" bsPrefix=" " onClick={() => dispatch({ type: actionType.NAV_CONTENT_LEAVE })}>
                {subContent}
            </ListGroup.Item>
        );
    } else {
        if (windowSize.width < 992) {
            mainContent = (
                <ListGroup.Item as="li" bsPrefix=" " className={item.classes} onClick={() => dispatch({ type: actionType.COLLAPSE_MENU })}>
                    {subContent}
                </ListGroup.Item>
            );
        } else {
            mainContent = (
                <ListGroup.Item as="li" bsPrefix=" " className={item.classes}>
                    {subContent}
                </ListGroup.Item>
            );
        }
    }

    return <React.Fragment>{mainContent}</React.Fragment>;
};

export default NavItem;

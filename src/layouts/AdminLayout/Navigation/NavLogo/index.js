import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ConfigContext } from '../../../../contexts/ConfigContext';
import * as actionType from '../../../../store/actions';

import logo from '../../../../assets/images/logo-wide-light.svg';

const NavLogo = () => {
    const configContext = useContext(ConfigContext);
    const { collapseMenu } = configContext.state;
    const { dispatch } = configContext;

    let toggleClass = ['mobile-menu'];
    if (collapseMenu) {
        toggleClass = [...toggleClass, 'on'];
    }

    return (
        <React.Fragment>
            <div className="navbar-brand header-logo">
                <Link to="#" className="b-brand">
                    <div className="b-bg">
                        <i className="feather icon-menu" />
                    </div>
                   
                </Link>
				<div>
					<img src={logo} alt="Link Clicks Inc." style={{ maxWidth: '100%', textAlign: 'left', paddingRight: '0px', marginLeft: '-80px' }} />
                </div>
                <Link
                    to="#"
                    className={toggleClass.join(' ')}
                    id="mobile-collapse"
                    onClick={() => dispatch({ type: actionType.COLLAPSE_MENU })}
                >
                    <i id="pinner" className="feather icon-x" />
                </Link>
            </div>
        </React.Fragment>
    );
};

export default NavLogo;

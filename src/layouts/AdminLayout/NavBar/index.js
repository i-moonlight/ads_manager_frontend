import React, { useContext } from 'react';
import { Link } from 'react-router-dom';


//import NavRight from './NavRight';

import { ConfigContext } from '../../../contexts/ConfigContext';
import * as actionType from '../../../store/actions';

import logo from '../../../assets/images/logo-wide-light.svg';

const NavBar = () => {
    //const [moreToggle, setMoreToggle] = useState(false);
    const configContext = useContext(ConfigContext);
    const { collapseMenu, headerBackColor, headerFixedLayout, layout, subLayout } = configContext.state;
    const { dispatch } = configContext;

    let headerClass = ['navbar', 'pcoded-header', 'navbar-expand-lg', headerBackColor];
    if (headerFixedLayout && layout === 'vertical') {
        headerClass = [...headerClass, 'headerpos-fixed'];
    }

    let toggleClass = ['mobile-menu'];
    if (collapseMenu) {
        toggleClass = [...toggleClass, 'on'];
        document.getElementById('pinner').className = 'fas fa-thumbtack';
		document.getElementById('pinner').style.transform = 'rotate(45deg)';
    } else {
        if (document.getElementById('pinner')) {
            document.getElementById('pinner').className = 'feather icon-x';
			document.getElementById('pinner').style.transform = 'rotate(0deg)';
			
        }
    }

    const navToggleHandler = () => {
		
        dispatch({ type: actionType.COLLAPSE_MENU });
    };

    //let collapseClass = ['collapse navbar-collapse'];

    let navBar = (
        <React.Fragment>
            <div className="m-header">
                <Link to="#" className={toggleClass.join(' ')} id="mobile-collapse" onClick={navToggleHandler}>
                    <span />
                </Link>
                <Link to="#" className="b-brand">
					<div>
						<img src={logo} alt="Link Clicks Inc." style={{ width: '170px' }} />
					</div>
                </Link>
                {/* <Link to='#' className={moreClass.join(' ')} onClick={() => setMoreToggle(!moreToggle)}>
                    <i className="feather icon-more-vertical"/>
                </Link> */}
            </div>
           {/* 
            <div className={collapseClass.join(' ')}>
                 <NavRight />
            </div>
			*/}
        </React.Fragment>
    );

    if (layout === 'horizontal' && subLayout === 'horizontal-2') {
        navBar = <div className="container">{navBar}</div>;
    }

    return (
        <React.Fragment>
            <header className={headerClass.join(' ')}>{navBar}</header>
        </React.Fragment>
    );
};

export default NavBar;

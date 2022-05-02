// @flow
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import { useSelector } from 'react-redux';
//import classNames from 'classnames';
// components
import AppMenu from './Menu';

import logoSm from '../assets/images/logo_sm.png';
import logoDark from '../assets/images/logo-dark.png';
import logoDarkSm from '../assets/images/logo_sm_dark.png';
import logo from '../assets/images/logo.png';

//import helpBoxImage from '../assets/images/help-icon.svg';
//import profileImg from '../assets/images/users/avatar-1.jpg';

type SideBarContentProps = {
    hideUserProfile: boolean,
};

/* sidebar content */
const SideBarContent = ({ hideUserProfile }: SideBarContentProps) => {
    const user = useSelector((state) => state.Auth.user);

    const [menuitems, setState] = useState([]);
    useEffect(() => {
        if (user) {
            setState(user.menu);
        }
    }, [user]);
    //console.log('menu', menu);
    return (
        <>
            <div className="side-nav">
                <Link to="/">
                    <span className="side-nav-title side-nav-item">Ménu Principal</span>
                </Link>
            </div>
            <div className="clearfix" />
            <AppMenu menuItems={menuitems} />
            <div className="clearfix" />
        </>
    );
};

type LeftSidebarProps = {
    hideLogo: boolean,
    hideUserProfile: boolean,
    isLight: boolean,
    isCondensed: boolean,
};

const LeftSidebar = ({ isCondensed, isLight, hideLogo, hideUserProfile }: LeftSidebarProps): React$Element<any> => {
    const menuNodeRef: any = useRef(null);

    /**
     * Handle the click anywhere in doc
     */
    const handleOtherClick = (e: any) => {
        if (menuNodeRef && menuNodeRef.current && menuNodeRef.current.contains(e.target)) return;
        // else hide the menubar
        if (document.body) {
            document.body.classList.remove('sidebar-enable');
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOtherClick, false);

        return () => {
            document.removeEventListener('mousedown', handleOtherClick, false);
        };
    }, []);

    return (
        <React.Fragment>
            <div className="leftside-menu" ref={menuNodeRef}>
                <React.Fragment>
                    <Link to="/" className="logo text-center logo-light">
                        <span className="logo-lg">
                            <img src={isLight ? logoDark : logo} alt="logo" height="16" />
                        </span>
                        <span className="logo-sm">
                            <img src={isLight ? logoSm : logoDarkSm} alt="logo" height="16" />
                        </span>
                    </Link>

                    <Link to="/" className="logo text-center logo-dark">
                        <span className="logo-lg">
                            <img src={isLight ? logoDark : logo} alt="logo" height="16" />
                        </span>
                        <span className="logo-sm">
                            <img src={isLight ? logoSm : logoDarkSm} alt="logo" height="16" />
                        </span>
                    </Link>
                </React.Fragment>

                <SimpleBar style={{ maxHeight: '100%' }} timeout={500} scrollbarMaxSize={320}>
                    <SideBarContent menuClickHandler={() => {}} isLight={isLight} hideUserProfile={hideUserProfile} />
                </SimpleBar>

                {isCondensed && <SideBarContent isLight={isLight} hideUserProfile={hideUserProfile} />}
            </div>
        </React.Fragment>
    );
};

LeftSidebar.defaultProps = {
    hideLogo: false,
    hideUserProfile: false,
    isLight: false,
    isCondensed: false,
};

export default LeftSidebar;

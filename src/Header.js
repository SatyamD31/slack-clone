import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import { AccessTime, Search, HelpOutline } from '@material-ui/icons';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ user }] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
                <AccessTime />
            </div>       

            <div className="header__search">
                <input placeholder="Search IOT 2019-20" />
                <Search />
            </div>       

            <div className="header__right">
                <HelpOutline />
                <Avatar className="header__avatar" src={user?.photoURL} alt={user?.displayName} variant="rounded" />
            </div>       
        </div>
    )
}

export default Header

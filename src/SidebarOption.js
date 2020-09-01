import React from 'react';
import './SidebarOption.css';
import { useHistory } from 'react-router-dom';
import db from './firebase';

function SidebarOption({ Icon, title, id, addChannelOption }) {
    const history = useHistory();

    const selectChannel = () => {
        if(id) {                           // that is, the channel is from database
            history.push(`/room/${id}`);
        }   
        else {
            history.push(title);
        }
    };

    const addChannel = () => {
        const channelName = prompt("Please enter a channel name")
        if(channelName) {
            db.collection('rooms').add({
                name: channelName
            })
        }
    };

    return (
        <div className="sidebar-option" onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon className="sidebar-option__icon" />}
            {Icon ? (
                <h3>{title}</h3>
            ): (
                <h3 className="sidebar-option__channel"><span className="sidebar-option__hash">#</span> {title}</h3>
            )}
        </div>
    )
}

export default SidebarOption

import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { Add, InsertComment, ArrowDropDown, FiberManualRecord, Create, FileCopy, ExpandMore, AlternateEmail, BookmarkBorder, PeopleAlt, Apps } from '@material-ui/icons';
import SidebarOption from './SidebarOption';
import db from './firebase';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{ user }] = useStateValue();
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection('rooms').onSnapshot((snapshot) => (
            setChannels(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.data().name,
                }))
            )
        ));
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>IOT 2019-20</h2>
                    <h3>
                        <FiberManualRecord />
                        {user?.displayName}
                    </h3>
                </div>
                <Create />
            </div>
            <SidebarOption Icon={InsertComment} title="Threads" />
            <SidebarOption Icon={AlternateEmail} title="Mentions & Reactions" />
            <SidebarOption Icon={BookmarkBorder} title="Saved Items" />
            <SidebarOption Icon={PeopleAlt} title="People & User groups" />
            <SidebarOption Icon={Apps} title="Apps" />
            <SidebarOption Icon={FileCopy} title="File Browser" />
            <SidebarOption Icon={ExpandMore} title="Show More" />
            <hr />
            <SidebarOption Icon={ArrowDropDown} title="Channels" />
            <hr />
            <SidebarOption Icon={Add} title="Add a Channel" addChannelOption />
            {channels.map((channel) => (
                <SidebarOption title={channel.name} id={channel.id} />
            ))}
        </div>
    )
}

export default Sidebar

import React, { useState, useEffect } from 'react';
import './Chat.css';
import { useParams } from 'react-router-dom'
import { StarBorderOutlined, InfoOutlined } from '@material-ui/icons';
import db from './firebase';
import Message from './Message';
import ChatInput from './ChatInput';

function Chat() {
    // to get data from URL => useParams
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);

    useEffect(() => {
        if(roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (         // at this point, useState is needed to store the roomId that is shown in the URL, in order to fetch the room name from db
                setRoomDetails(snapshot.data())
            ));
        }

        db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => (
            setRoomMessages(snapshot.docs.map(doc => doc.data()))
        ));

    }, [roomId])

    return (
        <div className="chat">
            {/* <h2>You are in the {roomId} room</h2> */}
            <div className="chat__header">
                
                <div className="chat__header-left">
                    <h4 className="chat__channel-name">
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutlined />
                    </h4>
                </div>    

                <div className="chat__header-right">
                    <p><InfoOutlined /> Details</p>
                </div>

            </div>

            <div className="chat__messages">
                {roomMessages.map(({ message, timestamp, user, userImage }) => (
                    <Message 
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}
                    />
                ))}
            </div>

            <ChatInput channelName={roomDetails?.name} channelId={roomId} />
        </div>
    )
}

export default Chat

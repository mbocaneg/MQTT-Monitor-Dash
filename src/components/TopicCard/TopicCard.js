import React, { useState, useEffect } from 'react';
import './TopicCard.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose, faCog } from "@fortawesome/free-solid-svg-icons";


export default function TopicCard({topic, client, removeTopic}) {

    const [data, setData] = useState({});

    const closeCard = (e) => {
        client.unsubscribe(topic);
        removeTopic(topic);
    }

    useEffect(() => {
            let isMounted = true;

            client.subscribe(topic);
            console.log("subscribing to " + topic);
            client.on('message', function (_topic, _message, _packet) {
                if(_topic === topic){
                    let recv = JSON.parse(_message.toString());
                    if(isMounted){
                        setData(recv);
                        console.log( recv);
                    }
                }
            });

            return () => {
                isMounted = false;
                client.unsubscribe(topic);
            }
    }, [client, topic]);

    return (
        <div className="topic-card">

            <div className="window-btns">
                <FontAwesomeIcon className="settings" icon={faCog} />
                <FontAwesomeIcon className="close" icon={faWindowClose} onClick={closeCard}/>
            </div>

            <p className="sensor-id">Topic: {topic}</p>

            <p className="sensor-name">{data.name}</p>

            <div className="sensor-data">
                <p className="sensor-value">{data.value || "00.00" }</p>
                <p className="sensor-units"> &nbsp;{data.units}</p>
            </div>
 
        </div>
    );
};

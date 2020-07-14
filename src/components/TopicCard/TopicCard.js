import React, { useState, Fragment, useEffect } from 'react';
import './TopicCard.scss'


export default function TopicCard({sub, client}) {

    const [data, setData] = useState({});

    useEffect(() => {
            client.subscribe(sub);
            console.log("subscribing to " + sub);
            client.on('message', function (topic, message, packet) {
                if(topic === sub){
                    let recv = JSON.parse(message.toString());
                    setData(recv);
                    console.log( recv);
                }
            });
    }, []);

    return (
        <div className="topic-card">

            <p className="sensor-id">Topic: {sub}</p>

            <p className="sensor-name">{data.name}</p>

            <div className="sensor-data">
                <p className="sensor-value">{data.value || "00.00" }</p>
                <p className="sensor-units"> &nbsp;{data.units}</p>
            </div>
 
        </div>
    );
};

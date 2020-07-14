import React, { useState, Fragment, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';

import Client from 'mqtt';

import TopicCard from './components/TopicCard/TopicCard';
import AddTopic from './components/AddTopic/AddTopic';
import {HOST, OPTIONS} from './MQTTConfig';

let client = Client.connect(HOST, OPTIONS);
client.on('connect', () => {
  console.log(`mqtt client connected`);
});

function App() {

  const [topics, setTopics] = useState([]);

  const addTopic = (topic) => {
    setTopics(topics => [...topics, <TopicCard sub={topic} client={client} />]);
  };

  useEffect(()=> {

  }, []);
  
  return (
    <div className="App">
        <AddTopic addTopic={addTopic} />
        {topics.map((item, index) => 
          item
        )}
    </div>
  );
}

export default App;

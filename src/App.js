import React, { useState } from 'react';
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
    setTopics(topics => [...topics, 
      {
        topic: topic, 

        card: 
        <TopicCard 
          key={topic} 
          topic={topic} 
          client={client} 
          removeTopic={removeTopic} /> 
      } ]);
  };

  const removeTopic = (topicName) => {
    console.log("removing: " + topicName);
    setTopics(topics => topics.filter(item => item.topic !== topicName));
  };
  
  return (
    <div className="App">
        <AddTopic addTopic={addTopic} />
        {topics.map((item, index) => 
          item.card
        )}
    </div>
  );
}

export default App;

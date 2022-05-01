import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Activity } from '../models/activity';
import { List } from 'semantic-ui-react';
import NavBar from './NavBar';


function App() {

  const[activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      setActivities(response.data);
    })
  }, [])

  return (
    <div>
      <NavBar />

        <List>
          {activities.map(activity => (
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          ))}
        </List>
    </div>
  );
}

export default App;

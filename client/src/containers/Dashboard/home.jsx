import React, {useEffect, useState} from 'react';
import axios from 'axios';
import instance from '../../http-common';

//const http = 'https://us-central1-kfir-portfolio.cloudfunctions.net/app/entries';

function Home() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    instance.get('/entries').then((response) => {
      setBackendData(response.data);
    });
  }, []);

  console.log(backendData);

  return (
    <div className="DashboardHome">
      <p>This is A Dashboard</p>

      <div className="data">
        {backendData.map((demo, index) => (
          <div>{demo.text}</div>
        ))}
      </div>
    </div>
  );
}

export default Home;

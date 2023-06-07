import React, { useEffect, useState } from 'react';
import axios from 'axios';
import instance from '../../http-common';

//const http = 'http://localhost:8080/api';

function Home() {
  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    instance.get('/').then((response) => {
      setBackendData(response.data);
    });
  }, []);

  return (
    <div className="DashboardHome">
      <p>This is A Dashboard</p>

      <div className="data">Test</div>
    </div>
  );
}

export default Home;

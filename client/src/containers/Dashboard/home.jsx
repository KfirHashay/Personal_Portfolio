import React, {useEffect, useState} from 'react';

import instance from '../../http-common';
import {Loader} from '../../components';

function Home() {
  const [backendData, setBackendData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setLoading(true);

    instance
      .get('/entries', {signal: signal})
      .then((response) => {
        setBackendData(response.data);
      })
      .then(
        setTimeout(() => {
          setLoading(false);
        }, 1500)
      )
      .catch((err) => {
        console.log(err);
      });

    return () => {
      setLoading(false);
      controller.abort();
    };
  }, []);

  // console.log(getData);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="DashboardHome">
          <p>This is A Dashboard</p>

          <div className="data">
            {backendData.map((demo) => (
              <div key={demo.id}>
                <hr />
                <p className="p-text"> {demo.title}</p>

                <p className="p-text"> {demo.text}</p>
                <hr />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Home;

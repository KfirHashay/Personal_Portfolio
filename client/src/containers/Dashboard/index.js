//import { useEffect, useState } from "react";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import Home from './home';
//import Login from "../Login/Login";
import { DashboardWrap } from '../../wrapper';

const Dashboard = () => {
  //   const [user, setUser] = useState(null);
  //   const auth = getAuth();

  //   useEffect(() => {
  //     onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         setUser(user);
  //       } else {
  //         setUser(null);
  //       }
  //     });
  //   }, [auth]);

  return (
    <div className="app__container">
      <div className="app__wrapper app__flex">
        {/* {user ? <Home /> : <Login />} */}

        <Home />
      </div>
    </div>
  );
};

export default DashboardWrap(Dashboard, 'dashboard');

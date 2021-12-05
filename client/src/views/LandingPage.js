import React, { useState, useEffect } from "react";
import Landing1 from "../components/Landing1";
import Landing2 from "../components/Landing2";
import Landing3 from "../components/Landing3";
import Navbar from "../components/Bar/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

function LandingPage(props) {
  const user = useSelector((state) => state.user.userData);
  const [currentUser, setCurrentUser] = useState(user);
  useEffect(() => {
    const load = async () => {
      try {
        if (user !== undefined) {
          setCurrentUser(user);
        }
      } catch (error) {}
    };
    load();
  }, [user]);
  return (
    <div className="landing-page">
      <Navbar currentUser={currentUser} />
      <Landing1 currentUser={currentUser} />
      <Landing2 currentUser={currentUser} />
      <Landing3 currentUser={currentUser} />
      <Footer />
    </div>
  );
}

export default LandingPage;

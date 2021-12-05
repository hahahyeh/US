import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Bar/Navbar";
import Calendar from "../components/Calendar";

function DiaryPage() {
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
    <div>
      <Navbar currentUser={currentUser} />
      <Calendar currentUser={currentUser} />
    </div>
  );
}

export default DiaryPage;

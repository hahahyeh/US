import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Bar/Navbar";
import Chat from "../components/Chat";

function ChatPage() {
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
    <div className="Chat-page">
      <Navbar currentUser={currentUser} />
      <Chat currentUser={currentUser} />
    </div>
  );
}

export default ChatPage;

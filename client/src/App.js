import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import ChatPage from "./views/ChatPage";
import DiaryPage from "./views/DiaryPage";
import SharePage from "./views/SharePage";

import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./App.css";
import auth from "./hoc/auth";
import login from "./hoc/login";

//in-folder component

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={auth(LandingPage, null)} />
          <Route exact path="/check" component={login()} />
          <Route exact path="/chat" component={auth(ChatPage, null)} />
          <Route exact path="/diary" component={auth(DiaryPage, null)} />
          <Route exact path="/share" component={auth(SharePage, null)} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

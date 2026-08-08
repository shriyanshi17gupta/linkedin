import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import "./Header/header.css";
import Home from "./Home/Home";
import MyNetwork from "./MyNetwork/MyNetwork";
import Jobs from "./Jobs/Jobs";
import Messaging from "./Messaging/Messaging";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notifications from "./Notifications/Notifications";
import Store from "./LInkedStore/Store";
import Loginpage from "./Login/Loginpage";
import LodingPage from "./Login/LodingPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/lodingPage" element={<LodingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mynetwork" element={<MyNetwork />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/messaging" element={<Messaging />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </>
);

reportWebVitals();

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./pages/Layout/Layout";
import CreateNewUser from "./pages/NewUser/CreateNewUser";
import WorkPage from "./pages/WorkPage/WorkPage";
import FriendsPage from "./pages/FriendsPage/FriendsPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SignIn />} />
          <Route path="/resume/:id" element={<HomePage />} />
          <Route path="/work/:id" element={<WorkPage />} />
          <Route path="/friends/:id" element={<FriendsPage />} />
          <Route path="/CreateUser" element={<CreateNewUser />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

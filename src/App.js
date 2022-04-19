import React from "react";
import "./stylesheets/main.scss";
import Posts from "./pages/PostsPage.js";
import Post from "./pages/PostPage.js";
import MembersPage from "./pages/MembersPage.js";
import MemberPage from "./pages/MemberPage.js";
import Container from "@mui/material/Container";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Container>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/infos-utiles" exact element={<Posts />} />
            <Route path="/infos-utiles/:slug" element={<Post />} />
            <Route path="/liste-des-membres" exact element={<MembersPage />} />
            <Route path="/member/:id" exact element={<MemberPage />} />
          </Routes>
        </Router>
      </div>
    </Container>
  );
}

export default App;

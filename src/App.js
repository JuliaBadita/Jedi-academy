import React from "react";
import "./stylesheets/main.scss";
import Posts from "./pages/PostsPage.js";
import Post from "./pages/PostPage.js";
import Members from "./components/Members.js";
import Member from "./components/Member.js";
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
            <Route path="/liste-des-membres" exact element={<Members />} />
            <Route path="/member/:id" exact element={<Member />} />
          </Routes>
        </Router>
      </div>
    </Container>
  );
}

export default App;

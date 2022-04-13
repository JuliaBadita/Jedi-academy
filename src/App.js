import React from 'react';
import './stylesheets/main.css';
import Posts from './pages/PostsPage.js'
import Post from './pages/PostPage.js'
import Container from '@mui/material/Container';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Container>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" exact element={<div>Accueil</div>} />
            <Route path="/infos-utiles" exact element={<Posts />} />
            <Route path="/infos-utiles/:slug" element={<Post />} />
          </Routes>
        </Router>
      </div>
    </Container>
  );
}

export default App;

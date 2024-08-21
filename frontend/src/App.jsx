import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Story from './pages/Story/Story';
import Impact from './pages/Impact/Impact';
import Blog from './pages/Blog/Blog';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/story' element={<Story />} />
        <Route path='/impact' element={<Impact/>} />
        <Route path='/blog' element={<Blog/>} />
      </Routes>
    </Router>
  );
}

export default App;

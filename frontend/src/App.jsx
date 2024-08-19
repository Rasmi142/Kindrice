import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Story from './pages/Story/Story';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/story' element={<Story />} />
      </Routes>
    </Router>
  );
}

export default App;

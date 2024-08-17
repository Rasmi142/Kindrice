import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';




function App() {
  return (
    <Router>
      <Home/>
      <main>
        <Routes>
          <Route exact path='/' component={Home} />
        </Routes>
      </main>
    
    </Router>
  );
}

export default App;

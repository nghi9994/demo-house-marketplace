import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navbar } from './components';
import { Explore, Offers, SignIn, SignUp } from './pages';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/profile" element={<SignIn />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <Navbar />
      </Router>
    </>
  );
}

export default App;

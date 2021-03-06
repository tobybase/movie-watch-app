import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Watchlist } from './components/Watchlist';
import { Watched } from './components/Watched';
import { Add } from './components/Add';
import './lib/font-awesome/css/all.min.css';
import { GloblalProvider } from './context/GlobalState';

function App() {
  return (
    <GloblalProvider>
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Watchlist />} />

          <Route path='/watched' element={<Watched />} />

          <Route path='/add' element={<Add />} />
        </Routes>
      </Router>
    </GloblalProvider>
  );
}

export default App;

import './App.css';
import React, {useState} from 'react';
import Home from './pages/Home';
import MemList from './pages/MemList';
import MemWrite from './pages/MemWrite';
import MemView from './pages/MemView';
import MList from './pages/MList';

// 페이지 분기
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/MList' element={<MList/>}/>
        <Route path='/MemList' element={<MemList/>}/>
        <Route path='/MemWrite' element={<MemWrite/>}/>
        <Route path='/MemView/:id' element={<MemView/>}/>
      </Routes>
      </>
    </Router>
  )
}

export default App;


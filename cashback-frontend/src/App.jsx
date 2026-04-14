import { useState } from 'react'
import './App.css'
import Top_menu from './components/top_menu'
import New_purchase from './pages/new_purchase'
import History from './pages/history'
import Home from './pages/home'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Top_menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/newPurchase" element={<New_purchase />} />
      </Routes>
    </div>
  );
}

export default App

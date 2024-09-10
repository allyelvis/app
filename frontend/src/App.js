import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategorySelect from './components/CategorySelect';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CategorySelect />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;

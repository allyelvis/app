import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategorySelect from './components/CategorySelect';
import BusinessForm from './components/BusinessForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CategorySelect />} />
        <Route path="/add-business" element={<BusinessForm />} />
      </Routes>
    </Router>
  );
}

export default App;

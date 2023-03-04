import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import HomePage from './pages/HomePage';
import BudgetListPage from './pages/BudgetListPage';
import BudgetPage from './pages/BudgetPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/orcamentos" element={<BudgetListPage />} />
          <Route path="/orcamentos/:id" element={<BudgetPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}



export default App;


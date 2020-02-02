import React from 'react';
import './App.css';
import Package from './components/Packages/Package';
import PackageDetail from './components/PackageDetail/PackageDetail';

function App() {
  return (
    <div className="App">
      <Package />
      <PackageDetail />
    </div>
  );
}

export default App;

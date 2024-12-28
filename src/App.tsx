import React from 'react';
import Dashboard from './components/Dashboard';  // Removido as chaves {}

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Dashboard />
    </div>
  );
};

export default App;
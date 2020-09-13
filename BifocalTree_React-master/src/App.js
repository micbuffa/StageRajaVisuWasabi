import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskTree from './components/TaskTree';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TaskTree></TaskTree>
      </header>
    </div>
  );
}

export default App;

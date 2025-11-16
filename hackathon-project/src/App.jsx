import WordGenerator from './Components.jsx';
import { PaintCanvas } from './DrawingCanvas.jsx'
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="WebPage">
      <div className="App">
        <Routes>
          <Route path="/" element={<WordGenerator />} />
          <Route path="/canvas" element={<PaintCanvas />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
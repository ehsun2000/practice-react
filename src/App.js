import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
// import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/material" element={<HomePage />} />
        <Route path="/materialDialog" element={<HomePage />} />
        <Route path="/bootstrap" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ExplanationPage } from './pages/ExplanationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explicacion" element={<ExplanationPage />} />
      </Routes>
    </Router>
  );
}

export default App;

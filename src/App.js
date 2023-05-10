// import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from "./components/Navigation";
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <Routes>
         <Route path="/" element={<HomePage />} />
        <Route path="care guides" element={<CareGuidesPage />} />
        <Route path="articles" element={<ArticlesPage />} /> 
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CadastroFornecedor from  './pages/CadastroFornecedor';
import CadastroUsuario from './pages/CadastroUsuario';

function App() {
  return (
    <Router> 
      <div>
        <Header />
        <Routes> {/* Usando Routes ao invés de Switch */}
          <Route path="/" element={<Home />} /> 
          <Route path="/cadastro-fornecedor" element={<CadastroFornecedor />} />
          <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;

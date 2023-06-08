import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import { Login } from './containers/pages/Login';
import { Header } from './components/Header';
import { NotFound } from './containers/errors/NotFound';
import { Footer } from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

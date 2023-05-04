import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import AccountPage from './pages/AccountPage/AccountPage';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/catalog' element={<CatalogPage /> } />
          <Route path='/account' element={<AccountPage /> } />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;

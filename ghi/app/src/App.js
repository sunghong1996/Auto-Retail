import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import CustomerForm from './CustomerForm';
import SaleList from './SaleListForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="sale">
            <Route path="" element={<SaleList />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

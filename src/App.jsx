import './App.css'
import { Route, Routes } from 'react-router-dom';
import MainContainer from './Layouts/MainContainer';
import Home from './pages/Home';
import ProductDetail from './components/ProductDetail';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import NotFound from './pages/404';
function App() {

  return (
    <>
      <Routes>
        <Route element={<MainContainer />}>
          <Route path='/' index element={<Home />} />
          <Route path='/product/:id' index element={<ProductDetail />} />
          <Route path='/faq' index element={<Faq />} />
          <Route path='/contact' index element={<Contact />} />
          <Route path='*' index element={<NotFound />} />
        </Route>
      </Routes>

    </>
  )
}

export default App

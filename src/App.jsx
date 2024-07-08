import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Moto from './components/Moto';
import Discover from './components/Discover';
import Products from './components/Products';
import Category from './components/Category';
import Offer from './components/Offer';
import Separator from './components/Separator';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <main className='mx-auto relative overflow-x-hidden'>
        <Navbar />
        <section className='max-w-[1440px] mx-auto'>
          <Hero />
          <Moto />
          <Discover />
          <Products />
          <Category />
          <Offer />
          <Separator />
          <Footer />
        </section>
      </main>
    </>
  )
}

export default App

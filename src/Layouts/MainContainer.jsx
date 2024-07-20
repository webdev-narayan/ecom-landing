import { Outlet } from "react-router-dom"
import Navbar from './../components/Navbar';
import Footer from '../components/Footer';
const MainContainer = () => {
  return (
    <main className='mx-auto relative overflow-x-hidden'>
      <Navbar />
      <section className="max-w-[1440px] mx-auto">
        <Outlet />
      </section>
      <Footer />
    </main>
  )
}

export default MainContainer

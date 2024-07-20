import Category from "../components/Category"
import Discover from "../components/Discover"
import Hero from "../components/Hero"
import Moto from "../components/Moto"
import Offer from "../components/Offer"
import Products from "../components/Products"
import Separator from "../components/Separator"

const Home = () => {
    return (
        <section className='max-w-[1440px] mx-auto'>
            <Hero />
            <Moto />
            <Discover />
            <Products />
            <Category />
            <Offer />
            <Separator />
        </section>
    )
}

export default Home

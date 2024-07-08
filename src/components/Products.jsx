import { useState } from "react"
import ProductCard from './ProductCard';
import { products } from "../data/data";

const Products = () => {
    const [activeTab, setActiveTab] = useState(1)

    return (
        <div className="min-h-[1211px] my-24 md:my-0 px-6 md:mx-0">
            <div className="mx-auto w-fit flex flex-col gap-8">
                <span className="md:text-[40px] text-2xl text-center font-semibold text-black/90">
                    New Arrivals For <span className="text-black/60 block md:inline-block">Man & Women Cloth</span>
                </span>
                <div className="flex soft-shadow  p-5 gap-4 border rounded-lg mx-auto md:justify-around w-full flex-wrap">
                    {["All", "Men", "Women", "ON Sale", "New"].map((item, i) => {
                        return <span
                            key={i}
                            className={`px-8 py-3 border rounded-md text-base cursor-pointer ${activeTab === i ? 'bg-black/90 text-white' : ''}`}
                            onClick={() => setActiveTab(i)}
                        >{item}</span>
                    })}
                </div>
            </div>
            <div className="grid md:grid-cols-4 gap-8 mt-16">
                {products.map((item, i) => {
                    return <ProductCard key={i} data={item} />
                })}
            </div>
        </div>
    )
}

export default Products

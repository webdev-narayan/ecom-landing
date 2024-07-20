import { useState } from "react"
import ProductCard from './ProductCard';
import { products as allProducts } from "../data/data";
import { motion } from "framer-motion";

const Products = () => {
    const [activeTab, setActiveTab] = useState("All")
    const [products, setProducts] = useState(allProducts)

    const handlFilter = (tag) => {
        setActiveTab(tag)
        console.log(tag)
        if (tag === "All") {
            setProducts(allProducts)
        } else {
            setProducts(allProducts.filter((item) => item.category.includes(tag)))
        }
    }

    return (
        <div className="md:max-h-[1211px] my-24 md:my-0 px-6 md:mx-0">
            <div className="mx-auto w-fit flex flex-col gap-8">
                <span className="md:text-[40px] text-2xl text-center font-semibold text-black/90">
                    New Arrivals For <span className="text-black/60 block md:inline-block">Man & Women Cloth</span>
                </span>
                <div className="flex soft-shadow  p-5 gap-4 border rounded-lg mx-auto md:justify-around w-full flex-wrap">
                    {["All", "Men", "Women", "ON Sale", "New"].map((item, i) => {
                        return <span
                            key={i}
                            className={`px-8 py-3 border rounded-md text-base cursor-pointer ${activeTab === item ? 'bg-black/90 text-white' : ''}`}
                            onClick={() => handlFilter(item)}
                        >{item}</span>
                    })}
                </div>
            </div>
            <div className="grid md:grid-cols-4 gap-8 mt-16">
                {products.map((item, i) => {
                    return <motion.div key={i}
                        initial={{ opacity: 0, }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1 }}
                    >
                        <ProductCard data={item} />
                    </motion.div>
                })}
            </div>
        </div>
    )
}

export default Products

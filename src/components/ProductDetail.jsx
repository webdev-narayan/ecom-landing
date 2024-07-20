import { useParams } from "react-router-dom"
import { products } from "../data/data"
import { useEffect, useState } from "react";
import Button from './ui/Button';
import { CiHeart } from 'react-icons/ci';


const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState()
    const [showDesc, setShowDesc] = useState(false)
    console.log(product)
    useEffect(() => {
        setProduct(...products.filter((p) => p.id === +id))
    }, [])
    return (
        <div className="w-full min-h-[600px] my-20">
            {product && <div className="h-[500px] w-full flex gap-8">
                <img src={product.image} className="flex-1" width={"500px"} />

                <div className="flex-1 flex flex-col gap-6 items-start justify-start relative ">
                    <div className="p-2 rounded-full bg-red-200 text-white absolute top-0 right-0">
                        <CiHeart className={"size-7"} />
                    </div>
                    <h3 className="font-medium text-2xl">{product.name}</h3>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, rem! adipisicing elit. Ea neque cum, quia rem porro corporis dolores nesciunt beatae voluptatum nisi!</p>
                    <div className="flex gap-3 flex-col">
                        <div>
                            Color <br />
                            <div className="flex gap-1">
                                {["bg-red-400", "bg-blue-400", "bg-black/70", "bg-slate-400", "bg-orange-400"].map((item) => {
                                    return <span key={item} className={`size-5 rounded-full ${item} cursor-pointer block shadow border border-white`}></span>
                                })}
                            </div>
                        </div>
                        <div>
                            Size <br />
                            <div className="flex gap-3">
                                {["S", "M", "L", "XL", "2XL"].map((item) => {
                                    return <span key={item} className={`shadow-sm min-w-6 text-center cursor-pointer`}>{item}</span>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <Button title={"Add To Cart"} />
                        <Button title={"Buy Now"} className={"bg-slate-500"} />
                    </div>
                    <div
                        className="space-y-3 mt-5 overflow-hidden border-b"
                        onClick={() => setShowDesc(!showDesc)}
                    >
                        <h4 className="cursor-pointer pb-2 flex items-center justify-between text-lg text-gray-700 font-medium">
                            Description
                            {
                                showDesc ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                )
                            }
                        </h4>
                        <div
                            className="duration-300 p-0"
                            style={showDesc ? { height: '100px' } : { height: '0px' }}>
                            <div>
                                <p className="text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptas voluptates deleniti perspiciatis, qui est provident laudantium natus eum laborum!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptas voluptates deleniti perspiciatis, qui est provident laudantium natus eum laborum!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default ProductDetail

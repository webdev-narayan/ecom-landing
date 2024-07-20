/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"
import Button from './ui/Button';
import { CiHeart } from 'react-icons/ci';


const ProductCard = ({ data }) => {
    // console.log(data)
    return (
        <Link to={`product/${data?.id}`}
            style={{ boxShadow: "0px 6px 24px 0px #A9A9A940" }}
            className="w-full rounded-xl flex flex-col gap-2 relative"
        >
            <img src={data?.image} className="w-full" />
            <div className="p-6">
                <div className="flex gap-1 flex-col">
                    <div className="flex gap-1">
                        {data?.colors?.map((item, i) => {
                            return <span key={i} style={{ background: item }} className={`${i === 0 ? "border border-black" : ""} size-4 rounded-full block`}></span>
                        })}
                    </div>
                    <p className="text-base font-medium">{data?.name}</p>
                    <p className="text-[10px]">{data?.solds}</p>
                </div>
                <div className="flex justify-end gap-4 items-center my-2">
                    <CiHeart className={"size-8"} />
                    <Button title={"Add To Cart"} className={"bg-black/30 text-black/90 border"} />
                    <Button title={"Buy now"} className={""} />
                </div>
            </div>
            {data.discount && <span className="text-sm bg-[#95BF47] w-fit rounded-2xl text-white px-2 absolute top-8 left-8">{data.discount}</span>}
            <span className="bg-white rounded-full absolute top-8 right-8 size-6 block text-center border">{data.size}</span>
        </Link>
    )
}

export default ProductCard

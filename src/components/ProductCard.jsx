/* eslint-disable react/prop-types */


const ProductCard = ({ data }) => {
    return (
        <div style={{ boxShadow: "0px 6px 24px 0px #A9A9A940" }}
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
                <div className="flex justify-between items-center">
                    <button className="text-gray-500 text-sm">Review</button>
                    <p className="px-4 py-2 font-semibold text-base border-2 border-black/70 rounded-md">${data.price}</p>
                </div>
            </div>
            {data.discount && <span className="text-sm bg-[#95BF47] w-fit rounded-2xl text-white px-2 absolute top-8 left-8">{data.discount}</span>}
            <span className="bg-white rounded-full absolute top-8 right-8 size-6 block text-center border">{data.size}</span>
        </div>
    )
}

export default ProductCard

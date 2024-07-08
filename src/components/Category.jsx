import { categories } from "../data/data"

const Category = () => {
    return (
        <div className="min-h-[567px] mx-auto w-full flex flex-col justify-center gap-10 px-6 md:px-0 ">

            <span className="md:text-[42px] text-2xl font-semibold text-center">Featured Categories</span>

            <div className="grid-cols-2 grid md:grid-cols-5 gap-10">
                {categories.map((item, i) => {
                    return <div
                        key={i}
                        className="flex flex-col gap-4 items-center flex-1"
                    >
                        <div style={{ background: item.color }} className="md:w-[210px] md:h-[226px] w-full h-full rounded-xl grid place-items-center">
                            <img src={item.image} />
                        </div>
                        <span className="block text-center font-bold text-black/80 md:text-xl">{item.name}</span>
                    </div>
                })}
            </div>

        </div>
    )
}

export default Category

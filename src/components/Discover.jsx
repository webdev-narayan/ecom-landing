import bag from "../../public/bag.png";
import watch from "../../public/watch.png";
import modelImage from "../../public/model.png";
import Button from './ui/Button';
const items = [
    {
        title: "Fashionable  beg Collection",
        description: "Get free shipping on orders over $99.00",
        image: bag,
        color: "#EFF6FF"
    },
    {
        title: "Apple Watch Series 4 Black",
        description: "Get free shipping on orders over $99.00",
        image: watch,
        color: "#FEF2F2"
    }
]

const Discover = () => {
    return (
        <div
            className="min-h-[940px] flex flex-col gap-6 justify-center px-4 md:px-0">
            <span className="capitalize md:text-5xl text-2xl text-center md:text-start leading-snug text-black/90">
                Discover more. Good things <br />
                <span className="font-bold">are waiting for you</span>
            </span>
            <div className="mt-16">
                <div className="grid gap-6 md:grid-cols-2 md:grid-rows-2">
                    <div className="flex md:gap-6 gap-4 p-6 flex-col grid-cols-1 row-span-2 items-center md:items-start  relative md:h-[500px] rounded-3xl bg-[#FFFCF3]">
                        <p className="text-2xl">Lifestyle Collection</p>
                        <span className="md:text-6xl text-3xl font-bold">MEN</span>
                        <p className="uppercase text-2xl font-medium">sale up to <span className="text-red-600">30% off</span></p>
                        <p className="capitalize">Get free shipping on orders <br />over $99.00</p>
                        <Button title={"Shop now"} className={"md:text-2xl md:mt-16"} />
                        <img src={modelImage} className="absolute right-0 bottom-0 hidden md:block" />
                    </div>
                    {
                        items.map((item) => {
                            return <div key={item.name} style={{ backgroundColor: item.color }} className="rounded-3xl flex justify-around md:p-0 p-4">
                                <div className="flex flex-col justify-around px-4">
                                    <div className="flex flex-col gap-2">
                                        <span className="md:text-lg text-sm font-medium">{item.title}</span>
                                        <p className="md:text-sm text-[9px]">{item.description}</p>
                                    </div>
                                    <Button title={"Shop now"} className={"shadow-lg shadow-blue-100 text-[10px] md:text-base"} />
                                </div>
                                <img src={item.image} alt="" className="size-48" />
                            </div>
                        })
                    }
                </div>
                <div className="flex-1">

                </div>
            </div>
        </div>
    )
}

export default Discover
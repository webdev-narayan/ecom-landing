import vector from "../assets/Vector.png"
import vector1 from "../assets/Vector-1.png"
import vector2 from "../assets/Vector-2.png"
import vector3 from "../assets/Vector-3.png"
import vector4 from "../assets/Vector-4.png"
import vector5 from "../assets/Vector-5.png"

import t1 from "../assets/t1.png"
import t2 from "../assets/t2.png"
import t3 from "../assets/t3.png"

import Button from './ui/Button';

const Offer = () => {
    return (
        <section className='md:h-[820px] h-[400px] flex items-center'>

            <div className='md:h-[556px] min-h-[270px]  w-full bg-[#FEFCE8] flex items-center rounded-3xl relative'>

                <div className="flex-1">
                    <div className="flex flex-col gap-6 md:ml-20 items-center md:items-start ">
                        <p className="md:text-[20px] text-base tracking-widest uppercase font-light">Limited Time</p>
                        <span className="md:text-5xl text-2xl text-center md:text-start">30 % Off <br />
                            <span className="font-semibold">
                                With Promo Code
                            </span>
                        </span>
                        <Button title={"Shop now"} className={"md:text-2xl text-sm"} />
                    </div>
                </div>
                <div className="relative flex-1 hidden md:block">
                    <img src={t3} className="mx-auto -mt-16 " />
                    <img src={t1} className="absolute top-[15%] left-[7%]" />
                    <img src={t2} className="absolute top-[15%] right-[7%]" />
                </div>

                <img src={vector} className=" absolute w-8 md:w-auto bottom-5 left-6" />
                <img src={vector2} className="absolute w-8 md:w-auto bottom-[10%] md:left-[40%] right-[10%]" />
                <img src={vector1} className="absolute w-3 md:w-auto top-[10%] left-[40%]" />
                <img src={vector3} className="absolute w-3 md:w-auto top-[8%] left-[45%]" />
                <img src={vector4} className="absolute w-8 md:w-auto top-0 left-[10%]" />
                <img src={vector5} className="absolute w-8 md:w-auto top-0 right-[20%]" />

            </div>

        </section>
    )
}

export default Offer

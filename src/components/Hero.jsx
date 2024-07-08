
import Button from './ui/Button';
import svg1 from "../../public/1.svg";
import svg2 from "../../public/2.svg";
import svg3 from "../../public/3.svg";
import svg4 from "../../public/4.svg";
import svg5 from "../../public/5.svg";
import svg6 from "../../public/6.svg";
import user from "../../public/user.png"
const items = [
    {
        position: "bottom-0 -right-10",
        src: user
    },
    {
        position: "md:scale-100 scale-75 left-[60%] top-[5-%]",
        src: svg1
    },
    {
        position: "md:scale-100 scale-75 bottom-10 left-[40%]",
        src: svg2
    },
    {
        position: "md:scale-100 scale-75 top-[20%] md:left-[50%] left-4",
        src: svg3
    },
    {
        position: "md:scale-100 scale-75 hidden md:block md:top-50 md:left-[50%]",
        src: svg4
    },
    {
        position: "md:scale-100 scale-75 top-0 right-0",
        src: svg5
    },
    {
        position: "md:scale-100 scale-75 bottom-0 left-0",
        src: svg6
    },

]
const Hero = () => {
    return (
        <div className='bg-[#FEFFE3] rounded-2xl px-12 w-full mt-8 md:h-[450px] h-[300px] mx-auto relative flex flex-col pt-6 md:pt-0 md:justify-center'>
            <div className='flex flex-col gap-4'>
                <span>
                    In this season, find the best 🔥
                </span>
                <h2 className='md:text-5xl text-2xl font-semibold'>
                    Exclusive collection <br />for everyone
                </h2>
                <Button title={"Explore Now"} />
            </div>
            <div>
                {
                    items.map((item) => {
                        return <img key={item} src={item.src} alt="" className={`absolute ${item.position}`} />
                    })
                }

            </div>
        </div>
    )
}

export default Hero
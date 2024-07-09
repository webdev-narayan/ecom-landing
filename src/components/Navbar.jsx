
import { useState } from "react";
import { CiHeart, CiUser, CiShoppingCart, CiSearch, CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const navLinks = [
    {
        name: "men", route: "men",
        duration: "duration-[.4s]"
    },
    {
        name: "women", route: "women",
        duration: "duration-[.5s]"
    },
    {
        name: "feature", route: "feature",
        duration: "duration-[.6s]"
    },
    {
        name: "blog", route: "blog",
        duration: "duration-[.7s]"
    },
    {
        name: "FAQ", route: "faq",
        duration: "duration-[.8s]"
    },
    {
        name: "contact", route: "contact",
        duration: "duration-[.9s]"
    },
]
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <>

            <nav style={{ boxShadow: "0px 2px 8px 0px #9F9F9F33" }} className=' w-full h-[88px]  overflow-hidden flex justify-center items-center'>
                <div className="max-w-[1440px] w-full py-10 px-4 md:px-0 flex items-center justify-between mx-auto dura">
                    <div>
                        <img src="logo.png" alt="" />
                    </div>
                    {/* desktop menu  */}
                    <div className='gap-8 hidden md:flex'>
                        {navLinks.map((item) => {
                            return <span
                                className='cursor-pointer capitalize text-base'
                                key={item.name}>{item.name}</span>
                        })}
                    </div>
                    <div className='hidden md:flex gap-4 text-black/70'>
                        <CiSearch className="cursor-pointer size-[32px]" />
                        <CiUser className="cursor-pointer size-[32px]" />
                        <CiHeart className="cursor-pointer size-[32px]" />
                        <CiShoppingCart className="cursor-pointer size-[32px]" />
                    </div>
                    {/* desktop menu end */}
                    {/* mobile menu */}
                    <CiMenuFries onClick={() => setShowMenu(true)} className="size-8 md:hidden" />
                    <div className={`md:hidden ${showMenu ? "right-0" : "-right-full"} flex transition-all duration-200 flex-col  absolute top-0  bg-white z-30 h-screen w-screen `}>
                        <IoCloseOutline onClick={() => setShowMenu(false)} className="size-8 mr-auto ml-10 mt-6 mb-8" />
                        <div className='gap-8 flex flex-col ml-10'>
                            {navLinks.map((item, i) => {
                                return <span
                                    className={`cursor-pointer capitalize text-base ${showMenu ? "ml-0" : "ml-40"} transition-all ${item.duration}`}
                                    key={i}>{item.name}</span>
                            })}
                        </div>
                        <div className='flex text-black/70 mt-10 justify-center gap-8'>
                            <CiSearch className="cursor-pointer size-[32px]" />
                            <CiUser className="cursor-pointer size-[32px]" />
                            <CiHeart className="cursor-pointer size-[32px]" />
                            <CiShoppingCart className="cursor-pointer size-[32px]" />
                        </div>
                    </div>
                    {/* mobile menu end */}
                </div>
            </nav>
        </>
    )

}

export default Navbar
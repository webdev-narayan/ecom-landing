import logo from "../../public/logo.png";
import playstore from "../assets/playstore.png"
import Button from './ui/Button';
import footerPay from "../assets/footerpay.png"
const menus = [
    {
        heading: "Men",
        links: ["Women", "Downloads", "Address"]
    },
    {
        heading: "Information",
        links: ["FAQ", "Blog", "Support"]
    },
    {
        heading: 'New Arival',
        links: ['About Us', 'Careers', 'Contact Us']
    }
]

const Footer = () => {
    return (
        <footer className="min-h-[423px] py-8 md:py-0 max-w-[1440px] mx-auto">
            <div className="flex flex-col gap-16">
                <div className="flex justify-between flex-col md:flex-row md:gap-0 gap-6">
                    <div className="flex-1 flex md:gap-6 gap-3 flex-col md:items-start items-center">
                        <img src={logo} className="w-[100px]" />
                        <span className="text-[18px]">DOWNLOAD OUR APP</span>
                        <p className="text-[12px]">Fast & Convenient Access</p>
                        <img src={playstore} className="w-[246px]" />
                    </div>
                    <div className="flex md:justify-between flex-1 justify-around">
                        {menus.map((item) => {
                            return <div key={item.heading} className="flex flex-col md:gap-4 gap-2 text-sm md:text-base">
                                <span className="font-semibold cursor-pointer">{item.heading}</span>
                                <div className="flex flex-col md:gap-4 gap-2">
                                    {item.links.map((mLink) => {
                                        return <span key={mLink} className="cursor-pointer">{mLink}</span>
                                    })}
                                </div>
                            </div>
                        })}
                    </div>
                    <div className="flex-1 flex md:justify-end ">
                        <div className="flex flex-col gap-6 mx-auto md:m-0">
                            <h3 className="text-xl font-medium">Newsletter</h3>
                            <div className="border border-black flex items-center md:w-full md:flex-row md:ml-auto pl-4 rounded justify-between">
                                <input type="email" placeholder="Your Email" className="outline-none text-sm w-32 md:w-full" />
                                <Button title={"Subscribe"} className={"text-[10px] rounded-l-none rounded-r-sm py-3"} />
                            </div>
                            <img src={footerPay} />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="flex items-center justify-between flex-col md:flex-row gap-4 text-sm md:text-base">
                    <p>© 2024 All rights reserved</p>
                    <div className="flex md:text-[14px] gap-8">
                        <span>Terms</span>
                        <span>Privacy</span>
                        <span>Cookies</span>
                    </div>
                    <span>Developed With ❤️ By <a href="tel:8349988146" className="font-medium">Narayan Patel</a></span>
                </div>
            </div>
        </footer>
    )
}

export default Footer

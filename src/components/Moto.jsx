import truck from "../../public/Delivery.svg"
import money from "../../public/Money.svg"
import timex27 from "../../public/24x7.svg"
import payment from "../../public/Payment.svg"

const Moto = () => {
    const items = [
        {
            title: "Fast Delivery",
            sub_title: "Start From $10",
            icon: truck,
            color: "#EFF9FF"
        },
        {
            title: "Money Guarantee",
            sub_title: "7 Days Back",
            icon: money,
            color: "#FBF3FB"
        },
        {
            title: "360 Days",
            sub_title: "For Free Return",
            icon: timex27,
            color: "#FEFCE8"
        },
        {
            title: "Payment",
            sub_title: "Secure System",
            icon: payment,
            color: "#F7F0EA"
        },
    ]
    return (
        <>
            <div className="py-8 mt-8 mb-16 md:flex justify-between md:flex-wrap md:gap-14 gap-4 items-center md:h-[192px] grid grid-cols-2 px-3 md:px-0">
                {items.map((item) => {
                    return <div key={item.title} style={{ background: item.color, boxShadow: "0px 4px 8px 0px #4B4B4B26" }} className={`shadow-md md:p-8 p-3 flex-1 rounded-lg flex md:gap-4 gap-2`}>
                        <img src={item.icon} alt="" className="md:size-10" />
                        <div className="flex flex-col">
                            <span className="md:text-base text-[10px] font-semibold">{item.title}</span>
                            <p className="md:text-sm text-[8px]">{item.sub_title}</p>
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}

export default Moto

import { CiMail, CiPhone, CiUser } from 'react-icons/ci';
import { BsFacebook, BsGithub, BsInstagram, BsTwitch } from "react-icons/bs"
import Button from './../components/ui/Button';
const Contact = () => {
    return (
        <section className="min-h-[800px] grid place-items-center">
            <div className="p-12 shadow-xl flex items-center border ml-[200px]">
                <div className="bg-black/80 px-8 text-white flex justify-center flex-col h-[350px] -ml-[200px] mr-10 gap-8">
                    <h3 className='text-2xl text-center'>Contact Info</h3>
                    <div className='flex flex-col gap-4'>
                        <span className='flex items-center gap-4 text-xl text-white/70'><CiUser className={"text-white size-8"} />somwhere near the nature</span>
                        <span className='flex items-center gap-4 text-xl text-white/70'><CiMail className={"text-white size-8"} /><a href='mailto:webdevnarayan@gmai.com'>webdevnarayan@gmai.com</a></span>
                        <span className='flex items-center gap-4 text-xl text-white/70'><CiPhone className={"text-white size-8"} />+91 9131201205</span>
                    </div>
                    <div className='flex gap-6 text-2xl justify-center'>
                        <BsInstagram />
                        <BsFacebook />
                        <BsTwitch />
                        <BsGithub />
                    </div>
                </div>
                <div  >
                    <h3 className='text-2xl mb-8'>Send a Message</h3>
                    <div className='flex flex-col gap-8'>
                        <div className='flex gap-4'>
                            <div className='flex flex-col'>
                                <label htmlFor="firstName" className='text-xs'>First Name</label>
                                <input type="text" id='firstName' className='outline-none border-b' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="lastName" className='text-xs'>Last Name</label>
                                <input type="text" id='lastName' className='outline-none border-b' />
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div className='flex flex-col'>
                                <label htmlFor="email" className='text-xs'>Email</label>
                                <input type="email" id='email' className='outline-none border-b' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="mobile" className='text-xs'>Mobile</label>
                                <input type="phone" id='mobile' className='outline-none border-b' />
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="message" className='text-xs'>Enter your message here</label>
                                <textarea id="message" className='resize-none outline-none border-b w-full'></textarea>
                            </div>
                        </div>
                    </div>
                    <Button className={"rounded-none px-8 bg-black/80 mt-8"} title={"Send"} />
                </div>
            </div>
        </section>
    )
}

export default Contact

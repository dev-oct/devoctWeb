import cpic from '../assets/cpic.png';
import '../styles/contact.css'

const Contact = () => {
    return (
        <div className="contact flex flex-row justify-around p-5">
            <div className='flex flex-col gap-3'>
                <div className="flex flex-col gap-3">
                    <p className="text-center text-3xl">GET IN <span className="font-bold"> TOUCH! </span></p>
                    <p>24/7 We will answer your questions and problems</p>
                </div>
                <div className="cform">
                    <div className="flex flex-col gap-5">
                        <input type="text" placeholder="Your Name" className=" rounded-md px-5 py-2 outline outline-[#37474F]" />
                        <input type="text" placeholder="Email" className=" rounded-md px-5 py-2 outline outline-[#37474F]" />
                        <input type="text" placeholder="Phone" className=" rounded-md px-5 py-2 outline outline-[#37474F]" />
                        <textarea rows={4} cols={30} placeholder="Describe your issue" className=" rounded-md outline outline-[#37474F] px-5 py-2" />
                        <button className="btn bg-[#FC6300F0] px-2 py-2 font-bold rounded-lg">SEND</button>
                    </div>
                </div>
            </div>
            <div className="items-center">
                <img src={cpic} className="img" alt="contact us" />
            </div>
        </div>
    );
}

export default Contact;

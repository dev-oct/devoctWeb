import cpic from '../assets/cpic.png';
import '../styles/contact.css'
import { AiOutlineMail } from 'react-icons/ai';
import { GiCharacter } from 'react-icons/gi';
import { MdPhoneAndroid } from 'react-icons/md';

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
                        <div className='flex outline outline-2 outline-[#37474F] rounded-md'>
                            <span className='infont'><AiOutlineMail className="inline-block" /></span>
                            <input type="text" placeholder="Your Name" className="px-5 mx-5 py-2 focus:border-none" />
                        </div>
                        <div className='flex outline outline-2 outline-[#37474F] rounded-md'>
                            <span className='infont'><GiCharacter className="inline-block" /></span>
                            <input type="text" placeholder="Email" className="px-5 py-2 mx-5" />
                        </div>
                        <div className='flex outline outline-2 outline-[#37474F] rounded-md'>
                            <span className='infont'><MdPhoneAndroid className="inline-block" /></span>
                            <input type="text" placeholder="Phone" className="px-5 py-2 mx-5" />
                        </div>
                        <textarea rows={4} cols={30} placeholder="Describe your issue" className=" rounded-md  outline  outline-2 outline-[#37474F] px-5 py-2" />
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

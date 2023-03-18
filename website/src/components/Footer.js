import '../styles/footer.css';
import { FaLinkedinIn, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer relative flex flex-col mt-3 p-5 bg-[#263238]">
            <div className='flex flex-wrap data flex-row justify-around mt-2'>
                <div className="flex mphone justify-start flex-col items-center mt-2">
                    <p className="hover:opacity-50">contact@devoct.com</p>
                    <p className="hover:opacity-50 mt-2">(123) 456-7890</p>
                </div>
                <div className='flex fcontent justify-center flex-wrap mt-2 gap-16'>
                    <div className='flex flex-col'>
                        <p className="text-lg hover:opacity-50 font-semibold">Products</p>
                        <div className="mt-2">
                            <p className="hover:opacity-50">Browse</p>
                            <p className="hover:opacity-50 mt-1">Build</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <p className="text-lg font-semibold hover:opacity-50">Resources</p>
                        <div className="mt-2">
                            <p className="hover:opacity-50">Academy</p>
                            <p className="hover:opacity-50 mt-1">DeFi 101</p>
                            <p className="hover:opacity-50 mt-1">Blog</p>
                            <p className="hover:opacity-50 mt-1">FAQ</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <p className="text-lg font-semibold hover:opacity-50">Company</p>
                        <div className="mt-2">
                            <p className="hover:opacity-50">Careers</p>
                            <p className="hover:opacity-50 mt-1">Contact</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex ff flex-row justify-around p-3 border-t border-b mt-20">
                <div className="quotes flex flex-row justify-center gap-5">
                    <p>Terms and Conditions</p>
                    <ul className='flex list-disc flex-row gap-5'>
                        <li>Privacy Policy</li>
                        <li className='pa'>Partner Agreement</li>
                    </ul>
                </div>
                <div className="links flex flex-row gap-3 items-center justify-center">
                    <p>Follow Us</p>
                    <div className='flex flex-row gap-3'>
                        <FaLinkedinIn className='outline hover:text-[#FC63007D] hover:border-white rounded-xl hover:bg-white outline-1 p-1 text-2xl' />
                        <FaInstagram className='outline hover:text-[#FC63007D] hover:border-white hover:bg-white rounded-xl outline-1 p-1 text-2xl' />
                        <FaTwitter className='outline hover:text-[#FC63007D] hover:border-white hover:bg-white outline-1 p-1 rounded-xl text-2xl' />
                        <FaFacebook className='outline hover:text-[#FC63007D] hover:border-white hover:bg-white outline-1 p-1 text-2xl rounded-xl' />
                    </div>
                </div>
            </div>
            <div>
                <p>© 2023 Devoct All rights reserved.</p>
            </div>
        </div >

    );
}

export default Footer;
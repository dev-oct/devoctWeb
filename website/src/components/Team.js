import m1 from '../assets/m1.png'
import m2 from '../assets/m2.png'
import m3 from '../assets/m3.png'
import '../styles/team.css'

const Team = () => {
    return (
        <div className="flex w-auto flex-col team">
            <div className="flex justify-center mt-3">
                <h1 className='font-bold text-3xl'>Our Team</h1>
            </div>
            <div className="flex px-10 py-5 my-5 gap-5 justify-center bg-[#FC63003B]">
                <div className="sec px-5 py-2 flex w-72 gap-5 rounded-lg bg-white">
                    <img src={m1} className="h-14 w-14" alt="m1" />
                    <div className='flex mx-2 flex-col'>
                        <h4>Olivia Mary</h4>
                        <p>Full Stack Developer</p>
                    </div>
                </div>
                <div className="sec px-5 py-2 w-72 gap-5 flex rounded-lg bg-white">
                    <img src={m2} className="h-14 w-14" alt="m2" />
                    <div className='flex flex-col'>
                        <h4>Ethan Mason</h4>
                        <p>Web Developer</p>
                    </div>
                </div>
                <div className="sec px-5 py-2 flex w-72 gap-5 rounded-lg bg-white">
                    <img src={m3} className="h-14 w-14" alt="m3" />
                    <div className='flex flex-col'>
                        <h4>Milton Grayson</h4>
                        <p>UI & UX DESIGNER</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
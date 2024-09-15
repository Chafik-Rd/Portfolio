// font icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

// Image
import iconKMITL from '../img/iconKMITL.png'
import iconDC from '../img/iconDC.jpg'

// ref page scroll
import { Element } from 'react-scroll';

const Education = () =>{
    return(
        <Element name='education'>
            <div className='bg-[#fbe9d0] font-sans min-h-screen pb-8'>
                <h1 className='pt-6 text-center text-4xl font-bold mb-20 text-black'><FontAwesomeIcon icon={faGraduationCap} /> My <span className='text-[#e64833]'>Education</span></h1>
                <div className='grid justify-items-center my-auto'>
                    <div className='block lg:flex bg-white lg:h-56 w-4/5 2xl:w-3/5 mx-10 drop-shadow-lg hover:shadow-xl rounded mb-5 hover:scale-[101%]'>
                        <div className='w-1/2 xl:w-2/6 py-2 xl:py-0 mx-auto lg:mx-0'>
                            <img src={iconKMITL} className='lg:h-52 xl:h-56 mx-auto'/>
                        </div>
                        <div className='mt-5 ms-5 sm:ms-8 lg:ms-0'>
                            <h1 className='text-2xl xl:text-3xl font-semibold mb-2 text-[#012970] tracking-tight'>Bachelor of Engineering in Electronics Engineering</h1>
                            <p className='mb-2'>King Mongkut's Institute of Technology Ladkrabang | KMITL</p>
                            <p className='text-xl font-medium text-[#874f41]'>2018-2022</p>
                        </div>
                    </div>
                    <div className='block lg:flex bg-white lg:h-56 w-4/5 2xl:w-3/5 mx-10 drop-shadow-lg hover:shadow-xl rounded mb-5 hover:scale-[101%]'>
                        <div className='w-1/3 md:w-1/4 lg:w-1/2 xl:w-2/6 py-2 xl:py-0 mx-auto lg:mx-0'>
                            <img src={iconDC} className='lg:h-52 xl:h-56 mx-auto'/>
                        </div>
                        <div className='mt-5 ms-5 sm:ms-8 lg:ms-0'>
                            <h1 className='text-2xl xl:text-3xl font-semibold mb-2 text-[#012970] tracking-tight'>Science-Mathematics</h1>
                            <p className='mb-2'>Dechapattanayanukul School | DC</p>
                            <p className='text-xl font-medium text-[#874f41]'>2013-2018</p>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
        
    )
}

export default Education
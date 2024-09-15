// Image
import imgChafik from '../img/fik1.png'

// font icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'

// ref page scroll
import { Link,Element } from 'react-scroll';

const Home = () => {

    return(
        <Element name="home">
            <div className='bg-[#244855] text-[#fbe9d0] min-h-screen font-sans pb-8 pt-60'>
                <div className='block xl:flex justify-around items-center ps-20 w-full'>
                    <div>
                        <h1 className='text-4xl lg:text-6xl mb-5 font-bold'>Hi There,</h1>
                        <h1 className='text-4xl lg:text-6xl mb-5 font-bold'>I'm Chafik <span className='block sm:inline'>Raden-ahmad</span></h1>
                        <div className='block sm:flex mb-10'>
                            <div className='me-2'>
                                <p className='text-xl xl:text-2xl font-bold'>I AM into </p>
                            </div>
                            <div className="w-max mt-2 sm:mt-0">
                                <p className='text-[#e64833] text-xl lg:text-2xl animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-[#e64833] pr-5 text-[#e64833] font-bold'>Frontend Developer</p>
                            </div>
                            
                        </div>
                        <Link to="about" smooth={true} duration={500}
                            className="cursor-pointer animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-[#e64833] mt-3 px-4 py-2 rounded-lg tracking-wide text-white">
                            <span className="ml-2">About Me <FontAwesomeIcon icon={faCircleArrowDown} /></span>
                        </Link>
                    </div>
                    <img src={imgChafik} className=' w-52 h-52 sm:w-80 sm:h-80 xl:w-96 xl:h-96 mt-20 xl:mt-0 rounded-full hover:shadow-xl hover:skew-y-3'/>
                </div>
            </div>
        </Element>
        
    )
}

export default Home
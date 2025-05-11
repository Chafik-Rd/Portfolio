// Image
import imgChafik from "../img/fik2.jpg";

// font icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAnglesRight } from "@fortawesome/free-solid-svg-icons";

// ref page scroll
import { Element } from "react-scroll";
const About = () => {
  return (
    <Element name='about'>
      <div className='bg-[#90aead] font-sans min-h-screen pb-8 text-black'>
        <h1 className='pt-6 text-center text-4xl font-bold mb-5 lg:mb-20'>
          <FontAwesomeIcon icon={faUser} /> About{" "}
          <span className='text-[#e64833]'>Me</span>
        </h1>
        <div className='block xl:flex items-center my-auto'>
          <img
            src={imgChafik}
            className=' hover:scale-110 mx-auto mb-10 lg:mb-0 h-80 sm:h-96 xl:h-80 rounded-xl shadow-lg hover:shadow-xl grayscale-0 xl:grayscale hover:grayscale-0'
          />
          <div className='w-3/4 xl:w-1/3 mx-auto xl:me-80 mt-20 xl:mt-0'>
            <h1 className='text-3xl font-bold'>I'm Chafik</h1>
            <p className='capitalize mb-5'>frontend developer</p>
            <p className='mb-5'>
              I am an engineer based in Bangkok, Thailand, with a Bachelor's
              degree in Electronic Engineering from KMITL. I am passionate about
              improving my coding skills and developing websites. I build
              websites using React and am continuously working on enhancing my
              skills to become a frontend developer.
            </p>
            <p className='capitalize mb-5 text-[#fbe9d0] font-medium'>
              email :{" "}
              <span className='normal-case text-black font-normal'>
                chafikraden@gmail.com
              </span>
            </p>
            <p className='capitalize mb-5 text-[#fbe9d0] font-medium'>
              place :{" "}
              <span className='text-black font-normal'>Bangkok, Thailand</span>
            </p>
            <a
              href='https://drive.google.com/file/d/1wAa1detuG2mxpkNnbjcnCIV6VneZmNJJ/view?usp=sharing'
              target='_blank'
              className='inline-flex text-md font-medium bg-[#244855] mt-3 px-4 py-2 rounded-lg tracking-wide text-white shadow-md hover:scale-110'
            >
              <span className='ml-2 animate-pulse'>
                Resume <FontAwesomeIcon icon={faAnglesRight} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;

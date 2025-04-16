// ref page scroll
import { Element, Link } from "react-scroll";

// font icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faPhone,
  faEnvelope,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";

// Image icon
import iconTelegram from "../img/iconsTelegram.svg";
import iconTelegramBlack from "../img/iconsTelegram_black.svg";
import iconGithub from "../img/iconsGithub.svg";
import iconGithubBlack from "../img/iconsGithub_black.svg";
import iconLinkedin from "../img/iconsLinkedin.svg";
import iconLinkedinBlack from "../img/iconsLinkedin_black.svg";
import { useState } from "react";

const Contact = () => {
  const [imageGithub, setImageGithub] = useState(iconGithub);
  const [imageTelegram, setImageTelegram] = useState(iconTelegram);
  const [imageLinkedin, setImageLinkedin] = useState(iconLinkedin);
  return (
    <Element name='contact'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-[#244855] text-[#fbe9d0] font-sans pb-8 pt-7'>
        <div className='w-1/3 mx-auto sm:ms-20'>
          <h1 className='text-2xl font-medium mb-2'>Chafik's Portfolio</h1>
          <p>
            Thank you for visiting my personal portfolio website. Connect with
            me over socials.
          </p>
        </div>
        <div className='w-1/3 mx-auto  mt-10 sm:mt-0 sm:ms-10'>
          <h1 className='text-2xl mb-2 font-medium'>Quick Links</h1>
          <ul>
            <li>
              <Link to='home' smooth={true} duration={500}>
                <p className='group hover:scale-[103%] cursor-pointer w-fit'>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className='w-3 h-3 bg-[#fbe9d0] text-black rounded-full group-hover:bg-[#e64833] group-hover:text-white'
                  />{" "}
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link to='about' smooth={true} duration={500}>
                <p className='group hover:scale-[103%] cursor-pointer w-fit'>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className='w-3 h-3 bg-[#fbe9d0] text-black rounded-full group-hover:bg-[#e64833] group-hover:text-white'
                  />{" "}
                  About
                </p>
              </Link>
            </li>
            <li>
              <Link to='skills' smooth={true} duration={500}>
                <p className='group hover:scale-[103%] cursor-pointer w-fit'>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className='w-3 h-3 bg-[#fbe9d0] text-black rounded-full group-hover:bg-[#e64833] group-hover:text-white'
                  />{" "}
                  Skills
                </p>
              </Link>
            </li>
            <li>
              <Link to='education' smooth={true} duration={500}>
                <p className='group hover:scale-[103%] cursor-pointer w-fit'>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className='w-3 h-3 bg-[#fbe9d0] text-black rounded-full group-hover:bg-[#e64833] group-hover:text-white'
                  />{" "}
                  Education
                </p>
              </Link>
            </li>
            <li>
              <Link to='work' smooth={true} duration={500}>
                <p className='group hover:scale-[103%] cursor-pointer w-fit'>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className='w-3 h-3 bg-[#fbe9d0] text-black rounded-full group-hover:bg-[#e64833] group-hover:text-white'
                  />{" "}
                  Work
                </p>
              </Link>
            </li>
            <li>
              <Link to='experience' smooth={true} duration={500}>
                <p className='group hover:scale-[103%] cursor-pointer w-fit'>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className='w-3 h-3 bg-[#fbe9d0] text-black rounded-full group-hover:bg-[#e64833] group-hover:text-white'
                  />{" "}
                  Experience
                </p>
              </Link>
            </li>
          </ul>
        </div>
        <div className='mx-auto sm:ms-20 lg:ms-10 mt-10 lg:mt-0'>
          <h1 className='text-2xl mb-2 font-medium'>contact info</h1>
          <ul className='mb-4'>
            <li className='mb-2'>
              <span className='me-3'>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              099-3108320
            </li>
            <li className='mb-2'>
              <a
                href='https://mail.google.com/mail/?view=cm&fs=1&to=chafikraden@gmail.com'
                target='_blank'
              >
                <span className='me-3'>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                chafikraden@gmail.com
              </a>
            </li>
            <li className='mb-2'>
              <a
                href='https://www.google.com/maps/place/Bangkok/@13.7237248,99.9736399,9z/data=!3m1!4b1!4m6!3m5!1s0x311d6032280d61f3:0x10100b25de24820!8m2!3d13.7563309!4d100.5017651!16zL20vMGZuMmc?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D'
                target='_blank'
              >
                <span className='me-3'>
                  <FontAwesomeIcon icon={faMapLocationDot} />
                </span>
                Bangkok, Thailand
              </a>
            </li>
          </ul>
          <div className='flex space-x-4'>
            <a href='https://t.me/ChafikRd' target='_blank'>
              <img
                onMouseEnter={() => setImageTelegram(iconTelegramBlack)}
                onMouseLeave={() => setImageTelegram(iconTelegram)}
                src={imageTelegram}
                className='h-8 mx-auto mb-2 hover:scale-110'
              />
            </a>
            <a href='https://github.com/Chafik-Rd' target='_blank'>
              <img
                onMouseEnter={() => setImageGithub(iconGithubBlack)}
                onMouseLeave={() => setImageGithub(iconGithub)}
                src={imageGithub}
                className='h-8 mx-auto mb-2 hover:scale-110'
              />
            </a>
            <a href='http://linkedin.com/in/chafik-rd' target='_blank'>
              <img
                onMouseEnter={() => setImageLinkedin(iconLinkedinBlack)}
                onMouseLeave={() => setImageLinkedin(iconLinkedin)}
                src={imageLinkedin}
                className='h-8 mx-auto mb-2 hover:scale-110'
              />
            </a>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;

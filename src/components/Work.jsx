// ref page scroll
import { Element } from "react-scroll";

// font icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faCode, faEye } from "@fortawesome/free-solid-svg-icons";

import portfolio from "../img/webPortfolio.png";
import pokemon from "../img/webPokemon.png";

const Work = () => {
  const data = [
    {
      id: 1,
      img: portfolio,
      header: "Portfolio Website",
      details:
        "       This website showcases information and the background about me. It was created using React, which helped me practice and improve my skills with the framework.",
      view: "https://portfolio-chafik.netlify.app/",
      code: "https://github.com/Chafik-Rd/Portfolio?tab=readme-ov-file",
    },
    {
      id: 2,
      img: pokemon,
      header: "Pokemon card",
      details:
        "  This website displays detailed information about the abilities of each Pokemon. It was created to practice using APIs to fetch and display data on the web page.",
      view: "https://pokemon-chafik.netlify.app/",
      code: "https://github.com/Chafik-Rd/Personal-Project-Pokemon/tree/main",
    },
  ];

  return (
    <Element name='work'>
      <div className='bg-[#90aead] font-sans min-h-screen pb-8 '>
        <h1 className='pt-6 text-center text-4xl font-bold mb-20 text-white'>
          <FontAwesomeIcon icon={faLaptopCode} /> Personal{" "}
          <span className='text-[#e64833]'> Project</span>
        </h1>
        <div className='grid justify-items-center'>
          {data.map((element) => {
            return (
              <div
                className='block my-10 relative w-[300px] lg:w-[800px] h-72 bg-cover bg-red-300 overflow-hidden group rounded-md shadow-xl'
                style={{ backgroundImage: `url(${element.img})` }}
                key={element.id}
              >
                <div
                  className={`absolute h-60 w-full bottom-0 translate-y-52 group-hover:translate-y-1 transition-transform ease duration-700`}
                >
                  <h1 className='ps-5 h-10 text-2xl font-bold bg-[#fbe9d0]'>
                    {element.header}
                  </h1>
                  <div className='bg-white h-full pb-5'>
                    <p className='p-2'>{element.details}</p>
                    <div className='flex text-white text-md font-medium justify-around mt-6'>
                      <a href={element.view} target='_blank'>
                        <div className='bg-[#080750] w-20 h-10 text-center py-2 rounded hover:scale-110'>
                          <FontAwesomeIcon icon={faEye} />
                          View
                        </div>
                      </a>
                      <a href={element.code} target='_blank'>
                        <div className='bg-[#080750] w-20 h-10 text-center py-2 rounded hover:scale-110'>
                          Code
                          <FontAwesomeIcon icon={faCode} />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Element>
  );
};

export default Work;

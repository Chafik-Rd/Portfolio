// font icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

// Image icon
import iconReact from "../img/iconReact.png";
import iconTailwind from "../img/iconTailwindCSS.svg";
import iconBootstrap from "../img/iconBootstrap.png";
import iconHTML from "../img/iconHTML.png";
import iconCSS from "../img/iconCSS.png";
import iconJavaScript from "../img/iconJavaScript.png";
import iconFigma from "../img/iconFigma.png";
import iconGithub from "../img/icongithub.png";

// ref page scroll
import { Element } from "react-scroll";
const Skills = () => {
  const data = [
    { id: 1, img: iconReact, name: "ReactJS" },
    { id: 2, img: iconTailwind, name: "TailwindCSS" },
    { id: 3, img: iconBootstrap, name: "Bootstrap" },
    { id: 4, img: iconHTML, name: "HTML5" },
    { id: 5, img: iconCSS, name: "CSS3" },
    { id: 6, img: iconJavaScript, name: "JavaScript" },
    { id: 7, img: iconFigma, name: "Figma" },
    { id: 8, img: iconGithub, name: "GitHub" },
  ];

  return (
    <Element name='skills'>
      <div className='bg-[#874f41] font-sans min-h-screen pb-8'>
        <h1 className='pt-6 text-center text-4xl font-bold mb-20 text-white'>
          <FontAwesomeIcon icon={faLaptopCode} /> Skills &{" "}
          <span className='text-[#e64833]'>Abilities</span>
        </h1>
        <div className='bg-[#fbe9d0] w11/12 lg:w-4/5 mx-5 lg:mx-auto'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-x-0 md:gap-x-10 justify-items-center content-around'>
            {data.map((element) => {
              return (
                <div
                  className='items-center bg-black text-white w-36 h-36 lg:w-40 lg:h-40 p-5 rounded-md m-2 md:m-20 shadow-xl hover:scale-110'
                  key={element.id}
                >
                  <img
                    src={element.img}
                    className='w-14 lg:w-20 mx-auto mb-2'
                  />
                  <p className='text-xl lg:text-2xl font-medium text-center'>
                    {element.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Skills;

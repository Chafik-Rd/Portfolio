// ref page scroll
import { Element } from "react-scroll";
import { useState, useEffect } from "react";

// font icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  const data = [
    {
      id: 1,
      toppic: "Self Employed",
      job: "Engineer",
      period: "Oct 2021 - present",
    },
    {
      id: 2,
      toppic: "Self Employed",
      job: "Engineer",
      period: "May 2021 - June 2021",
    },
    {
      id: 3,
      toppic: "Self Employed",
      job: "IOT | Internship",
      period: "May 2021 - June 2021",
    },
    {
      id: 4,
      toppic: "Self Employed",
      job: "IOT | Internship",
      period: "May 2021 - June 2021",
    },
  ];

  // Get size Screen
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Element name='experience'>
      <div className='bg-[#e2e2e2] font-sans min-h-screen pb-8'>
        <h1 className='pt-6 text-center text-4xl font-bold mb-20 text-black'>
          <FontAwesomeIcon icon={faBriefcase} /> Experience
        </h1>

        {data.map((element) => {
          return (
            // check id add data left/right
            width > 768 ? (
              element.id % 2 === 0 ? (
                <div
                  className='relative grid grid-cols-9 px-20 md:px-32 lg:px-56 xl:px-[300px]'
                  key={element.id}
                >
                  {/* Left side */}
                  <div className='col-span-4 w-full h-full'>
                    <div className='p-4 rounded-md mb-10'></div>
                  </div>
                  {/* Timeline */}
                  <div className='col-span-1 flex flex-col items-center'>
                    <div className='w-2 bg-blue-900 h-full relative'>
                      <div className='flex justify-center'>
                        <div className='absolute top-1/4  w-7 h-7 rounded-full bg-white border-2 border-blue-900 -mt-3 text-center'>
                          <FontAwesomeIcon icon={faBriefcase} />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Right side */}
                  <div className='col-span-4 w-full h-full'>
                    <div className='relative bg-[#874f41] p-4 rounded-md shadow-md mb-10 text-white'>
                      <h3 className='font-bold text-xl'>{element.toppic}</h3>
                      <p>{element.job}</p>
                      <p>{element.period}</p>
                      <div className='absolute top-1/4 left-0 transform -translate-x-full -translate-y-1/2 w-0 h-0 border-r-[20px] border-r-[#874f41] border-y-[10px] border-y-transparent'></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className='relative grid grid-cols-9 px-20 md:px-32 lg:px-56 xl:px-[300px]'
                  key={element.id}
                >
                  {/* Left side */}
                  <div className='col-span-4 w-full h-full'>
                    <div className='relative bg-[#874f41] p-4 rounded-md shadow-md mb-10 text-white'>
                      <h3 className='font-bold text-xl'>{element.toppic}</h3>
                      <p>{element.job}</p>
                      <p>{element.period}</p>
                      <div className='absolute top-1/4 right-0 transform translate-x-full -translate-y-1/2 w-0 h-0 border-l-[20px] border-l-[#874f41] border-y-[10px] border-y-transparent'></div>
                    </div>
                  </div>
                  {/* Timeline */}
                  <div className='col-span-1 flex flex-col items-center'>
                    <div className='w-2 bg-blue-900 h-full relative'>
                      <div className='flex justify-center'>
                        <div className='absolute top-1/4  w-7 h-7 rounded-full bg-white border-2 border-blue-900 -mt-3 text-center'>
                          <FontAwesomeIcon icon={faBriefcase} />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Right side */}
                  <div className='col-span-4 w-full h-full'>
                    <div className='p-4mb-10'></div>
                  </div>
                </div>
              )
            ) : (
              <div className='relative grid grid-cols-6 px-5 ' key={element.id}>
                {/* Timeline */}
                <div className='col-span-1 flex flex-col items-center'>
                  <div className='w-2 bg-blue-900 h-full relative'>
                    <div className='flex justify-center'>
                      <div className='absolute top-1/4  w-7 h-7 rounded-full bg-white border-2 border-blue-900 -mt-3 text-center'>
                        <FontAwesomeIcon icon={faBriefcase} />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right side */}
                <div className='col-span-4 w-full h-full'>
                  <div className='relative bg-[#874f41] p-4 rounded-md shadow-md mb-10 text-white'>
                    <h3 className='font-bold text-lg'>{element.toppic}</h3>
                    <p>{element.job}</p>
                    <p>{element.period}</p>
                    <div className='absolute top-1/4 left-0 transform -translate-x-full -translate-y-1/2 w-0 h-0 border-r-[20px] border-r-[#874f41] border-y-[10px] border-y-transparent'></div>
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
    </Element>
  );
};

export default Experience;

import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import Draggable from "react-draggable";

import imagemExemplo1 from "../../assets/img/Exemplo1.jpg";
import imagemExemplo2 from "../../assets/img/Exemplo2.jpeg";
import imagemExemplo3 from "../../assets/img/Exemplo3.jpeg";
import imagemExemplo4 from "../../assets/img/Exemplo4.jpeg";
import imagemExemplo5 from "../../assets/img/Exemplo5.jpg";
import imagemExemplo6 from "../../assets/img/Exemplo6.jpeg";
import imagemExemplo7 from "../../assets/img/Exemplo7.jpeg";
import imagemExemplo8 from "../../assets/img/Exemplo8.jpeg";
// import imagemExemplo9 from "../../assets/img/Exemplo9.jpeg";
// import imagemExemplo10 from "../../assets/img/Exemplo10.jpeg";
// import imagemExemplo11 from "../../assets/img/Exemplo11.jpeg";

const Slides = () => {
  const slides = [
    {
      url: imagemExemplo1,
    },
    {
      url: imagemExemplo2,
    },
    {
      url: imagemExemplo3,
    },
    {
      url: imagemExemplo4,
    },
    {
      url: imagemExemplo5,
    },
    {
      url: imagemExemplo6,
    },
    {
      url: imagemExemplo7,
    },
    {
      url: imagemExemplo8,
    },
    // {
    //   url: imagemExemplo9,
    // },
    // {
    //   url: imagemExemplo10,
    // },
    // {
    //   url: imagemExemplo11,
    // },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // const goToSlide = (slideIndex) => {
  //   setCurrentIndex(slideIndex);
  // };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="max-w-[1200px] h-[780px] 2-full m-auto py-16 px-4 relative group slides">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/*Left Arrow*/}
      <div className="lg:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2-l rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/*Right Arrow*/}
      <div className="lg:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2-l rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-black rounded-full ${
                currentIndex === i ? "p-2" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slides;

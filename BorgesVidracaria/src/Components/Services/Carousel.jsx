// import PropTypes from "prop-types";
// import { useEffect, useState } from "react";
// import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

// export default function Carousel({
//   children: slides,
//   autoSlide = false,
//   autoSlideInterval = 3000,
// }) {
//   const [curr, setCurr] = useState(0);

//   const prev = () =>
//     setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
//   const next = () =>
//     setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

//   useEffect(() => {
//     if (!autoSlide) return;
//     const slideInterval = setInterval(next, autoSlideInterval);
//     return () => clearInterval(slideInterval);
//   }, []);

//   return (
//     <section>
//       {" "}
//       <h1 className="text-center">Serviços</h1>
//       <div className="overflow-hidden relative">
//         <div
//           className="flex transition-transform ease-out duration-500"
//           style={{ transform: `translateX(-${curr * 100}%)` }}
//         >
//           {" "}
//           {slides}
//         </div>
//         <div className="absolute inset-0 flex items-center justify-between p-4">
//           <button
//             onClick={prev}
//             className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
//           >
//             {" "}
//             <BsChevronLeft size={40} />
//           </button>
//           <button
//             onClick={next}
//             className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
//           >
//             {" "}
//             <BsChevronRight size={40} />
//           </button>
//         </div>
//         <div className="absolute bottom-4 right-0 left-0">
//           <div className="flex items-center justify-center gap-2">
//             {slides.map((_, i) => (
//               <div
//                 key={i}
//                 className={`transition-all w-3 h-3 bg-white rounded-full ${
//                   curr === i ? "p-2" : "bg-opacity-50"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// Carousel.propTypes = {
//   children: PropTypes.node.isRequired,
//   autoSlide: PropTypes.node.isRequired,
//   autoSlideInterval: PropTypes.node.isRequired,
// };
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { GiWindow } from "react-icons/gi";
import videoExemplo1 from "../../assets/Videos/Cobertura com vidros laminado 10mm habitat  com tecnologia  térmica.mp4";
import videoExemplo2 from "../../assets/Videos/Decoração com espelhos bisotê painel mosaico e guarda corpo com bottons em  inox.mp4";
import videoExemplo3 from "../../assets/Videos/Porta 03 folhas deslizantes com trilhos embutido linha suprema tubular.mp4";
import videoExemplo4 from "../../assets/Videos/Portão automático deslizante com motor de frenagem Rapida e lenta.mp4";

const Carousel = () => {
  const slides = [
    {
      type: "video",
      url: videoExemplo1,
      caption:
        "Cobertura com vidros laminados 10mm Habitat com tecnologia térmica.",
    },
    {
      type: "video",
      url: videoExemplo2,
      caption:
        "Decoração com espelhos bisotê, painel mosaico e guarda-corpo com bottons em inox.",
    },
    {
      type: "video",
      url: videoExemplo3,
      caption:
        "Porta de 03 folhas deslizantes com trilhos embutidos, linha suprema tubular.",
    },
    {
      type: "video",
      url: videoExemplo4,
      caption:
        "Portão automático deslizante com motor de frenagem rápida e lenta.",
    },
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
    <section>
      <div className="max-w-[1200px] h-[780px] w-full m-auto py-16 px-4 relative group slides">
        {slides[currentIndex].type === "image" ? (
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          ></div>
        ) : (
          <div className="relative w-full h-full rounded-2xl bg-center bg-cover duration-500">
            <video
              src={slides[currentIndex].url}
              className="w-full h-full rounded-2xl bg-center bg-cover"
              autoPlay
              muted
              loop
              preload="auto"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            ></video>
            <div className="text-cyan-50 absolute bottom-0 rounded-lg left-0 right-0 bg-black bg-opacity-30 text-white p-4">
              <h3 className="text-xl font-bold ">
                <GiWindow
                  className="mr-2   inline-block"
                  style={{ marginTop: "-0.25rem" }}
                  size={20}
                />{" "}
                {slides[currentIndex].caption}
              </h3>
              <p className="text-base">
                {/* Se desejar, adicione mais detalhes aqui */}
              </p>
            </div>
          </div>
        )}
        {/*Left Arrow*/}
        <div className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2-l rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/*Right Arrow*/}
        <div className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2-l rounded-full p-2 bg-black/20 text-white cursor-pointer">
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
    </section>
  );
};

export default Carousel;

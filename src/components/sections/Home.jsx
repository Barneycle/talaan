import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";
import pms1 from "../../assets/pms1.png";
import pms2 from "../../assets/pms2.png";
import pms3 from "../../assets/pms3.png";
import Villarin from "../../assets/Villarin.jpg";
import Sarte from "../../assets/Sarte.jpg";
import Bruzo from "../../assets/Bruzo.jpg";
import Sales from "../../assets/Sales.jpg";
import Campana from "../../assets/Campana.png";



export const Home = () => {

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [pms1, pms2, pms3];

  const openImage = (imgSrc, index) => {
    setSelectedImage(imgSrc);
    setCurrentIndex(index);
    document.body.classList.add('hide-navbar');
  };
  const closeImage = () => {
    setSelectedImage(null);
    document.body.classList.remove('hide-navbar');
  };

  return ( 
  
  <section id="home" className="min-h-screen flex flex-col items-center justify-start relative pt-30 pb-10" >

        <div className="text-center z-10 px-4">

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-500 to-pink-400 bg-clip-text text-transparent leading-right">

            Prison Management System

          </h1>

<p className="text-gray-400 text-sm md:text-base lg:text-lg mb-8 max-w-prose mx-auto text-justify leading-relaxed">

          This evaluation assesses the usability of the Prison Management System website based on Nielsen’s 10 usability heuristics.
          The analysis identifies potential usability issues, evaluates interface consistency, and ensures the system supports user control, error prevention, and clear navigation.
          The goal is to enhance user experience for both administrative personnel and other stakeholders by providing actionable recommendations for improvement.

          </p>

          <div className="flex flex-col items-center justify-center gap-6 mb-8">

            {[pms1, pms2, pms3].map((src, i) => (

            <img key={i} src={src} alt={`Prison ${i + 1}`} onClick={() => openImage(src, i)} className="w-[800px] h-auto rounded-lg shadow-lg cursor-pointer transition-transform duration-200 hover:scale-105" /> ))}

          </div>

{selectedImage && ( 
          
  <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 overflow-auto" onClick={closeImage} >

      <button
        onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1)); }}
        className="absolute top-1/2 left-1 transform -translate-y-1/2 bg-transparent text-white opacity-70 p-1 text-6xl transition duration-300 ease-in-out hover:opacity-100 hover:scale-110 active:scale-90 z-50"
        aria-label="Previous Image"
      >
        ❮
      </button>

    <img
      src={images[currentIndex]}
      alt={`Prison ${currentIndex + 1}`}
      className="max-w-full max-h-full rounded-lg shadow-2xl cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        closeImage();
      }}
    />

      <button
        onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1)); }}
        className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-transparent text-white opacity-70 p-1 text-6xl transition duration-300 ease-in-out hover:opacity-100 hover:scale-110 active:scale-90 z-50"
        aria-label="Next Image"
      >
        ❯
      </button>

  </div>)}

        </div>

        <div className="w-[80%] sm:w-[80%] md:w-[50%] lg:w-[40%] xl:w-[80%] mx-auto h-[0.5px] bg-gradient-to-r from-rose-500 to-pink-400 my-8 rounded-full" />

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-500 to-pink-400 bg-clip-text text-transparent leading-right">

          Group Members

        </h1>

        <div className="grid grid-cols-5 gap-4 mt-12">

          <div className="flex flex-col items-center">

            <img src={Villarin} alt="John Vincent Villarin" className="w-[300px] aspect-square object-cover rounded-full mb-4 transition-transform duration-200 hover:scale-115" />

<p className="text-gray-400 text-sm md:text-base lg:text-lg">John Vincent Villarin - UI/UX Designer</p>

          </div>

          <div className="flex flex-col items-center">

            <img src={Sarte} alt="Jhay Adven Sarte" className="w-[300px] aspect-square object-cover rounded-full mb-4 transition-transform duration-200 hover:scale-115" />

<p className="text-gray-400 text-sm md:text-base lg:text-lg">Jhay Adven Sarte - Image & Asset Editor</p>

          </div>

          <div className="flex flex-col items-center">

            <img src={Bruzo} alt="Joezel Bruzo" className="w-[300px] aspect-square object-cover rounded-full mb-4 transition-transform duration-200 hover:scale-115" />

<p className="text-gray-400 text-sm md:text-base lg:text-lg">Joezel Bruzo - Quality Assurance</p>

          </div>

          <div className="flex flex-col items-center">

            <img src={Sales} alt="Cristian Jay Sales" className="w-[300px] aspect-square object-cover rounded-full mb-4 transition-transform duration-200 hover:scale-115" />

<p className="text-gray-400 text-sm md:text-base lg:text-lg">Cristian Jay Sales - Front End Developer</p>

          </div>

          <div className="flex flex-col items-center">

            <img src={Campana} alt="Alec Campana" className="w-[300px] aspect-square object-cover rounded-full mb-4 transition-transform duration-200 hover:scale-115" />

<p className="text-gray-400 text-sm md:text-base lg:text-lg">Alec Campana - Lead Developer</p>

          </div>

      </div>

    </section>

  );
};

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

  const openImage = (imgSrc) => setSelectedImage(imgSrc);
  const closeImage = () => setSelectedImage(null);

  return ( 
  
  <section id="home" className="min-h-screen flex flex-col items-center justify-start relative pt-30" >

        <div className="text-center z-10 px-4">

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-500 to-pink-400 bg-clip-text text-transparent leading-right">

            Prison Management System

          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-prose mx-auto text-justify leading-relaxed">

          This evaluation assesses the usability of the Prison Management System website based on Nielsen’s 10 usability heuristics.
          The analysis identifies potential usability issues, evaluates interface consistency, and ensures the system supports user control, error prevention, and clear navigation.
          The goal is to enhance user experience for both administrative personnel and other stakeholders by providing actionable recommendations for improvement.

          </p>

          <div className="flex flex-col items-center justify-center gap-6 mb-8">

            {[pms1, pms2, pms3].map((src, i) => (

            <img key={i} src={src} alt={`Prison ${i + 1}`} onClick={() => openImage(src)} className="w-[800px] h-auto rounded-lg shadow-lg cursor-pointer transition-transform duration-200 hover:scale-105" /> ))}

          </div>

        {selectedImage && ( 
          
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={closeImage} >

            <img src={selectedImage} alt="Enlarged" className="max-w-[1500px] max-h-[90vh] rounded-lg shadow-2xl" />

          </div>)}

        </div>

        <div className="w-[80%] sm:w-[80%] md:w-[50%] lg:w-[40%] xl:w-[80%] mx-auto h-[0.5px] bg-gradient-to-r from-rose-500 to-pink-400 my-8 rounded-full" />

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-500 to-pink-400 bg-clip-text text-transparent leading-right">

          Group Members

        </h1>

        <div className="grid grid-cols-5 gap-4 mt-12">

          <div className="flex flex-col items-center">

            <img src={Villarin} alt="John Vincent Villarin" className="w-[300px] aspect-square object-cover rounded-full mb-4 transition-transform duration-200 hover:scale-115" />

            <p className="text-white">John Vincent Villarin - Evaluator</p>

          </div>

          <div className="flex flex-col items-center">

            <img src={Sarte} alt="Jhay Adven Sarte" className="w-[300px] aspect-square object-cover rounded-full mb-4 transition-transform duration-200 hover:scale-115" />

            <p className="text-white">Jhay Adven Sarte - Evaluator</p>

          </div>

          <div className="flex flex-col items-center">

            <img src={Bruzo} alt="Joezel Bruzo" className="w-[300px] aspect-square object-cover rounded-full mb-4 transition-transform duration-200 hover:scale-115" />

            <p className="text-white">Joezel Bruzo - QA</p>

          </div>

          <div className="flex flex-col items-center">

            <img src={Sales} alt="Cristian Jay Sales" className="w-[300px] aspect-square object-cover rounded-full mb-4 transition-transform duration-200 hover:scale-115" />

            <p className="text-white">Cristian Jay Sales - Front End Developer</p>

          </div>

          <div className="flex flex-col items-center">

            <img src={Campana} alt="Alec Campana" className="w-[300px] aspect-square object-cover rounded-full mb-4 transition-transform duration-200 hover:scale-115" />

            <p className="text-white">Alec Campana - Lead Developer</p>

          </div>

          <div></div>

      </div>

    </section>

  );
};

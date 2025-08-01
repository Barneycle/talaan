import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {

  const [text, setText] = useState("");
  const fullText = "GanApp";

  useEffect(() => {

    let index = 0;

    const interval = setInterval(() => {
        
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {

        clearInterval(interval);

        setTimeout(() => {

          onComplete();

        }, 1000);

      }

    }, 100);

    return () => clearInterval(interval);

  }, [onComplete]);

  return (

    <div className="fixed inset-0 z-50 bg-zinc-200 text-blue-900 flex flex-col items-center justify-center">

      <div className="mb-4 font-mono font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">

        {text}<span className="animate-blink ml-1">|</span>

      </div>

      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">

        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>

      </div>

    </div>

  );

};

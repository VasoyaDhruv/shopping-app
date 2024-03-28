import React, { useState, useEffect } from 'react';

const Slider = ({ slides, autoSlideDuration = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
        goToNextSlide();
      }, autoSlideDuration);
      return () => clearInterval(interval);
    
  }, [currentIndex]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative overflow-hidden pt-32 bg-slate-200 w-11/12 mx-auto">
      <div className="slider-container flex duration-700 " style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide w-full flex-shrink-0"
          >
            <div className="container mx-auto px-4 py-8 grid grid-cols-2 gap-4 justify-between items-center">
              <div className='pl-8'>
              <h2 className="text-6xl font-bold mb-4 text-black">{slide.title}</h2>
              <p className="text-lg mb-6 text-black italic">{slide.description}</p>
              <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded duration-200">
                {slide.buttonText}
              </button>
              </div>
              <div className='mix-blend-multiply flex justify-center'>
                <img src={slide.img} className='h-96'/>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex items-center">
        <button onClick={goToPrevSlide} className="bg-gray-500 absolute left-0 top-1/2 transform  -translate-y-1/2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full rotate-90 w-18 h-18">
          V
        </button>
        <button onClick={goToNextSlide} className="bg-gray-500 absolute top-1/2 transform  -translate-y-1/2  right-0 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full border-black  w-18 h-18 rotate-[270deg]">
          V
        </button>
      </div>
    </div>
  );
};

export default Slider;

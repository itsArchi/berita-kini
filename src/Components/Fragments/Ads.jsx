import { useState } from 'react';

const Ads = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <div className="slideshow-container mx-auto relative mt-10">
      <div className={`mySlides fade ${slideIndex === 1 ? 'block' : 'hidden'}`}>
        <img src={`/assest/ads.svg`} alt={`Slide 1`} className="w-full" />
      </div>
      <div className={`mySlides fade ${slideIndex === 2 ? 'block' : 'hidden'}`}>
        <img src={`/assest/ads-rotate.png`} alt={`Slide 2`} className="w-full" />
      </div>
      <div className={`mySlides fade ${slideIndex === 3 ? 'block' : 'hidden'}`}>
        <img src={`/assest/ads.svg`} alt={`Slide 3`} className="w-full" />
      </div>

      <div className={`mySlides fade ${slideIndex === 4 ? 'block' : 'hidden'}`}>
        <img src={`/assest/ads-rotate.png`} alt={`Slide 4`} className="w-full" />
      </div>

      <div className="text-center mt-4 gap-2 flex justify-center">
        <span className={`dot cursor-pointer h-2 w-2 inline-block rounded-full bg-gray-400 transition duration-300 ${slideIndex === 1 ? 'bg-gray-700' : ''}`} onClick={() => currentSlide(1)}></span>
        <span className={`dot cursor-pointer h-2 w-2 inline-block rounded-full bg-gray-400 transition duration-300 ${slideIndex === 2 ? 'bg-gray-700' : ''}`} onClick={() => currentSlide(2)}></span>
        <span className={`dot cursor-pointer h-2 w-2 inline-block rounded-full bg-gray-400 transition duration-300 ${slideIndex === 3 ? 'bg-gray-700' : ''}`} onClick={() => currentSlide(3)}></span>
        <span className={`dot cursor-pointer h-2 w-2 inline-block rounded-full bg-gray-400 transition duration-300 ${slideIndex === 4 ? 'bg-gray-700' : ''}`} onClick={() => currentSlide(4)}></span>
      </div>
    </div>
  );
};

export default Ads;

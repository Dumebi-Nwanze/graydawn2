import { useEffect, useState } from "react";
import { heroSection } from "../data";

function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const moveSlide = () => {
      const slides = document.getElementById("heroslides");
      if (currentIndex + 1 > heroSection.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
      slides.style.transform = `translateX(${-currentIndex * 100}%)`;
    };

    const interval = setInterval(moveSlide, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  let translateXValue = `-${currentIndex * 100}%`;

  return (
    <div className="relative min-h-screen w-full h-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        disablePictureInPicture
        className="object-cover absolute top-0 left-0 w-full h-full"
        src="https://firebasestorage.googleapis.com/v0/b/linkedin-clone-4baf1.appspot.com/o/pexels_videos_1851190%20(1080p).mp4?alt=media&token=24cd61f6-f898-400d-ab8f-b51b013fb26a"
      ></video>
      <div className="h-full w-full overflow-x-hidden absolute top-0 left-0 ">
        <div
          id="heroslides"
          className={`flex transition-all duration-500 ease-in-out h-full translate-x-${translateXValue}`}
        >
          {heroSection.map((itm) => (
            <div
              key={itm.id}
              className="  min-w-full overflow-hidden text-white"
            >
              <div className="mt-20 pb-4 pl-4 lg:pb-12 lg:pl-12 flex flex-col justify-center space-y-10 w-full h-full ">
                <div className="lg:w-[50%]">
                  <h1 className="font-bold text-3xl lg:text-6xl mb-4 lg:mb-8">
                    {itm.heading}
                  </h1>
                  <p className="font-light lg:font-normal text-sm lg:text-lg">
                    {itm.desc}
                  </p>
                </div>
                <button className="cta_btn w-[180px]">Learn More</button>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-[10%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex space-x-2 ">
          {heroSection.map((item, index) => (
            <div
              key={item.id}
              onClick={() => {
                const slides = document.getElementById("heroslides");
                setCurrentIndex(index);
                slides.style.transform = `translateX(${-currentIndex * 100}%)`;
              }}
              className={`${
                index === currentIndex ? "activeDot" : "dot"
              } transition-all ease-in cursor-pointer`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSlider;

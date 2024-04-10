
import React from 'react';
// css
import '../assets/css/slider.css';
// images
import First from "../assets/images/Frame 1584.png";
import Second from "../assets/images/Frame 1585.png";
import Third from "../assets/images/logos_youtube.png";
import Fourth from "../assets/images/simple-icons_facebooklive2.png";

const colors = [First, Second, Third, Fourth];

// const delay = ;

function Slider2() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timeoutId = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      5000
    );

    return () => clearTimeout(timeoutId);
  }, [index]);

  return (
    <div className="slideshow md:hidden">
      <div
        className="slideshowSlider mb-30 pb-2"
        style={{ transform: `translate3d(${-index * 50}%, 0, 0)` }}
      >
        {colors.map((color,idx) => (
          <div
            className="slide justify-center" id='sliderImg'
            key={color}
            // style={{ backgroundImage }}
          ><img src={color} alt="" className='w-[50%]' id='slider2'/></div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slider2;
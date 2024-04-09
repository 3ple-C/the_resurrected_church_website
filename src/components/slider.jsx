
import React from 'react';
import '../assets/css/slider.css';
import First from "../assets/images/Frame 1611.png";
import Second from "../assets/images/Frame 1612.png";
import Third from "../assets/images/Frame 1613.png";

const colors = [First, Second, Third];

// const delay = ;

function Slider() {
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
            className="slide" 
            key={color}
            // style={{ backgroundImage }}
          ><img src={color} alt="" className=''/></div>
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

export default Slider;
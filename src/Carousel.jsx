import Card from "./Card";
import { longList } from "./data";
import { useEffect, useRef, useState } from "react";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const maxIndex = longList.length - 1;
  const minIndex = 0;
  const activeSlide = longList.at(index);
  const prevStateRef = useRef(index);
  const increased = index > prevStateRef.current;

  const animationClass = increased
    ? "animate-fade-left animate-once"
    : "animate-fade-right animate-once animate-ease-in";

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === maxIndex ? minIndex : prevIndex + 1
    );
  };

  const handlePrev = () =>
    setIndex((prevIndex) =>
      prevIndex === minIndex ? maxIndex : prevIndex - 1
    );

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === maxIndex ? minIndex : prevIndex + 1
      );
      prevStateRef.current = index;
    }, 4000);

    return () => clearInterval(interval);
  }, [maxIndex, minIndex, index]);

  return (
    <div className="mx-auto rounded-2xl p-12 flex items-center justify-center gap-4 w-3/4">
      <button className="btn btn-circle btn-outline" onClick={handlePrev}>
        &lt;
      </button>
      <Card activeSlide={activeSlide} animationClass={animationClass} />
      <button className="btn btn-circle btn-outline" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};
export default Carousel;

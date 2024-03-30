import style from './style.module.css';
import { useEffect, useState } from "react";
import { sliderImg } from "../../constant/sliderImg"

const Slider = () => {
    const [sliderImgState, setSliderImgState] = useState(sliderImg);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const handelClickLeft = () => {
        setActiveSlideIndex((prevIndex) => (prevIndex === 0 ? sliderImgState.length - 1 : prevIndex - 1));
    }

    const handelClickRight = () => {
        setActiveSlideIndex((prevIndex) => (prevIndex === sliderImgState.length - 1 ? 0 : prevIndex + 1));
    }

    return (
        <div className={style.sliderContainer} style={{ backgroundImage: `url('/background.jpg')` }}>
            <div className={style.vectorLeft} onClick={handelClickLeft}>
                <img src='./vector.svg' alt="Left Arrow" />
            </div>
            <div className={style.sliderContent} style={{ backgroundImage: `url(${sliderImgState[activeSlideIndex].img})` }}>
                <p>
                    {
                        sliderImgState[activeSlideIndex].text
                    }
                </p>
                <div className={style.circleBlock}>
                    {sliderImgState.map((_, index) => (
                        <div key={index} className={`${style.circle} ${index === activeSlideIndex ? style.active : ''}`}></div>
                    ))}
                </div>
            </div>
            <div className={style.vectorRight} onClick={handelClickRight}>
                <img src='./vector.svg' alt="Right Arrow" />
            </div>
        </div>
    );
}

export default Slider;

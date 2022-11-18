import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import Promotion from "./Promotion";

function MobileCarousel({ text, mobileImgs, promotionsData }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Writing logic to loop through carousel if going forwards in the slideshow
    const goNextSlide = () => {
        let newSlide =
            currentSlide === mobileImgs.length - 1 ? 0 : currentSlide + 1;

        setCurrentSlide(newSlide);
    };

    // Writing logic to loop through carousel if going backwards in the slideshow
    const goPrevSlide = () => {
        let newSlide =
            currentSlide === 0 ? mobileImgs.length - 1 : currentSlide - 1;

        setCurrentSlide(newSlide);
    };

    return (
        <div className="flex flex-col items-center pt-8">
            {/* Commented this since there is no correlation in the mock provided */}
            {/* <p>{text}</p> */}
            <div className="mt-8 ">
                <div className="max-w-lg h-72 flex  items-center justify-center overflow-hidden relative">
                    <Swipe onSwipeLeft={goNextSlide} onSwipeRight={goPrevSlide}>
                        {mobileImgs.map((mImg, index) => {
                            return (
                                <div key={mImg.src}>
                                    <Image
                                        className={
                                            index === currentSlide
                                                ? "block w-full h-auto"
                                                : "hidden"
                                        }
                                        src={mImg.src}
                                        alt={mImg.alt}
                                        width={0}
                                        height={0}
                                        unoptimized
                                    />
                                </div>
                            );
                        })}
                    </Swipe>

                    <div className="absolute flex flex-col right-0 text-5xl mr-3">
                        <button className="next" onClick={goNextSlide}>
                            &#10095;
                        </button>
                        <button className="prev" onClick={goPrevSlide}>
                            &#10094;
                        </button>
                    </div>
                </div>
            </div>

            {promotionsData.map((promotion) => {
                return (
                    <Promotion
                        key={promotion.title + " " + promotion.subtitle}
                        title={promotion.title}
                        logoPromo={promotion.logoPromo}
                        subtitle={promotion.Subtitle}
                        paragraphs={promotion.paragraphs}
                        buttonInfo={promotion.button}
                        imagePromo={promotion.imagePromo}
                    />
                );
            })}
        </div>
    );
}

export default MobileCarousel;

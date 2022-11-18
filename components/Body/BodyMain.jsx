import { useSelector } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import { fetchLocaleDataFromApi } from "../../data/fetchData";
import WebCarousel from "./WebCarousel";
import MobileCarousel from "./MobileCarousel";
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile,
} from "react-device-detect";

function BodyMain() {
    const { locale } = useSelector((state) => state.language);

    // Promotions is an array of objects in the JSON data source
    /* A Promotion object looks like: 
    {    
        title: "",
        logoPromo: "",
        Subtitle: "",
        paragraphs: [],
        button: {
            href: "",
            text: "",
        },
        imagePromo: "",
    }
    */
    const [promotionsData, setPromotionsData] = useState([]);

    const [carouselData, setCarouselData] = useState({
        text: "",
        desktopImgs: [],
        mobileImgs: [],
    });

    // Fetch the information that will populate the Promotions and Carousel sections
    const fetchBodyData = useCallback(async () => {
        const data = await fetchLocaleDataFromApi(locale);

        setPromotionsData(data.promotions);

        setCarouselData({
            text: data.carousel.text,
            desktopImgs: data.carousel.desktop,
            mobileImgs: data.carousel.mobile,
        });
    });

    useEffect(() => {
        fetchBodyData();
    }, [locale]);

    return (
        <div>
            {/* Placing the Web Carousel 3 times since the data source only provides 1 carousel */}
            <WebCarousel
                text={carouselData.text}
                desktopImgs={carouselData.desktopImgs}
                promotionsData={promotionsData}
            />

            <WebCarousel
                text={carouselData.text}
                desktopImgs={carouselData.desktopImgs}
                promotionsData={promotionsData}
                reverse
            />

            <WebCarousel
                text={carouselData.text}
                desktopImgs={carouselData.desktopImgs}
                promotionsData={promotionsData}
            />

            {/* Placing the Mobile Carousel 3 times since the data source only provides 1 carousel */}

            <MobileCarousel
                text={carouselData.text}
                mobileImgs={carouselData.mobileImgs}
                promotionsData={promotionsData}
            />

            <MobileCarousel
                text={carouselData.text}
                mobileImgs={carouselData.mobileImgs}
                promotionsData={promotionsData}
            />

            <MobileCarousel
                text={carouselData.text}
                mobileImgs={carouselData.mobileImgs}
                promotionsData={promotionsData}
            />
        </div>
    );
}

export default BodyMain;

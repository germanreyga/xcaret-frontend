import { useSelector } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import { fetchLocaleDataFromApi } from "../../data/fetchData";
import Carousel from "./Carousel";
import Promotion from "./Promotion";

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
        <div className="bg-red-100">
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
            <Carousel
                text={carouselData.text}
                desktopImgs={carouselData.desktopImgs}
                mobileImgs={carouselData.mobileImgs}
            />
        </div>
    );
}

export default BodyMain;

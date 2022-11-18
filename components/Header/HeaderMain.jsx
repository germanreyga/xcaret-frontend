import { useSelector } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import { fetchLocaleDataFromApi } from "../../data/fetchData";

function HeaderMain() {
    const { locale } = useSelector((state) => state.language);

    const [headerData, setHeaderData] = useState({
        heading: "",
        discount: "0%",
        paragraphs: [],
    });

    // Fetch the information that will populate the Header section
    const fetchHeaderData = useCallback(async () => {
        const data = await fetchLocaleDataFromApi(locale);

        setHeaderData({
            heading: data.header.h1,
            discount: data.header.discount,
            paragraphs: data.header.paragraphs,
        });
    });

    useEffect(() => {
        fetchHeaderData();
    }, [locale]);

    return (
        <div className="bg-gray-200 flex flex-col items-center px-4 py-8">
            <p className="text-4xl p-4 uppercase font-semibold">
                {headerData.heading}
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center text-xl md:text-4xl">
                <p className="p-4 text-4xl basis-1/4 md:text-center font-semibold">
                    {headerData.discount}
                </p>
                <div className="p-4 text-gray-800 basis-1/4">
                    {headerData.paragraphs.map((paragraph, index) => {
                        return <p key={index}>{paragraph}</p>;
                    })}
                </div>
            </div>
        </div>
    );
}

export default HeaderMain;

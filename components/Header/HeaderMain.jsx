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
            <h1 className="text-4xl p-4 uppercase font-medium">
                {headerData.heading}
            </h1>
            <p className="text-4xl p-4 font-medium">{headerData.discount}</p>
            <div className="text-xl p-4 text-gray-800">
                {headerData.paragraphs.map((paragraph, index) => {
                    return <p key={index}>{paragraph}</p>;
                })}
            </div>
        </div>
    );
}

export default HeaderMain;

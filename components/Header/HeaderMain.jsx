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
        <div className="bg-teal-100">
            <h1>{headerData.heading}</h1>
            <p>{headerData.discount}</p>
            {headerData.paragraphs.map((paragraph, index) => {
                return <p key={index}>{paragraph}</p>;
            })}
        </div>
    );
}

export default HeaderMain;

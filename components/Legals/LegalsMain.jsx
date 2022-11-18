import { useSelector } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import { fetchLocaleDataFromApi } from "../../data/fetchData";

function LegalsMain() {
    const { locale } = useSelector((state) => state.language);
    const [legalsData, setLegalsData] = useState("");

    // Fetch the information that will populate the Legal information for the website
    const fetchLegalsData = useCallback(async () => {
        const data = await fetchLocaleDataFromApi(locale);

        setLegalsData(data.legals);
    });

    useEffect(() => {
        fetchLegalsData();
    }, [locale]);

    // dangerouslySetInnerHTML attribute is used since the legals information coming from the API has HTML break tags inside the text (<br/>)
    return (
        <div className="bg-gray-200 px-4 py-8 text-sm">
            <p
                className="md:ml-8 md:pl-8"
                dangerouslySetInnerHTML={{ __html: legalsData }}
            />
        </div>
    );
}

export default LegalsMain;

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
        <div className="bg-green-100">
            <p dangerouslySetInnerHTML={{ __html: legalsData }} />
        </div>
    );
}

export default LegalsMain;

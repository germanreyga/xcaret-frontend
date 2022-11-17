import { useSelector } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import { fetchLocaleDataFromApi } from "../../data/fetchData";

function FooterMain() {
    const { locale } = useSelector((state) => state.language);
    const [copyrightData, setCopyrightData] = useState("");

    // The linkes field in the data source is an array of objects.
    /* A link object looks like:
     {
          tittle: "",
          href: "",
     },
     It may or may not contain the following fields: number, href, main
     */
    const [footerLinks, setFooterLinks] = useState([]);

    // Fetch the information that will populate the Footer section
    const fetchFooterData = useCallback(async () => {
        const data = await fetchLocaleDataFromApi(locale);

        setCopyrightData(data.footer.copy);
        setFooterLinks(data.footer.links);
    });

    useEffect(() => {
        fetchFooterData();
    }, [locale]);

    return (
        <div className="bg-blue-100">
            <p>{copyrightData} </p>
            <ul>
                {footerLinks.map((link) => {
                    return (
                        <li key={link.title}>
                            <a href={link.href}>{link.tittle}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default FooterMain;

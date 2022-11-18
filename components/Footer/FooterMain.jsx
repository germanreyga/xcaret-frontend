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
        <div className="flex flex-col items-center bg-black text-neutral-400 font-extralight py-2 text-xs">
            <p>{copyrightData} </p>
            <ul className="flex flex-row space-x-4">
                {footerLinks.map((link, index) => {
                    return (
                        <li key={index}>
                            <a href={link.href}>{link.tittle}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default FooterMain;

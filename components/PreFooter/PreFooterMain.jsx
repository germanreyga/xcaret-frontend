import { useSelector } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import { fetchLocaleDataFromApi } from "../../data/fetchData";
import ContactCenter from "./ContactCenter";
import PhoneNumber from "./PhoneNumber";
import Socials from "./Socials";

function PreFooterMain() {
    const { locale } = useSelector((state) => state.language);
    const [contactCenterData, setContactCenterData] = useState("");
    // The numbers field in the data source is an array of objects.
    /* A number object looks like:
     {
          name: "",
          number: "",
          href: "",
          main: true,
     },
     It may or may not contain the following fields: number, href, main
     */
    const [phonesData, setPhonesData] = useState([]);
    const [socialsData, setSocialsData] = useState({
        facebookUrl: "",
        instagramUrl: "",
        twitterUrl: "",
    });

    // Fetch the information that will populate the PreFooter section
    const fetchPreFooterData = useCallback(async () => {
        const data = await fetchLocaleDataFromApi(locale);

        setSocialsData(data.prefooter.social);
        setPhonesData(data.prefooter.numbers);
        setContactCenterData(data.prefooter.contactCenter);
    });

    useEffect(() => {
        fetchPreFooterData();
    }, [locale]);

    return (
        <div className="bg-yellow-100">
            <ContactCenter
                title={contactCenterData.title}
                email={contactCenterData.email}
            />
            {phonesData.map((phone) => {
                return (
                    <PhoneNumber
                        key={phone.name}
                        name={phone.name}
                        number={phone.number}
                        href={phone.href}
                        main={phone.main}
                    />
                );
            })}
            <Socials
                facebookUrl={socialsData.facebookUrl}
                twitterUrl={socialsData.twitterUrl}
                instagramUrl={socialsData.instagramUrl}
            />
        </div>
    );
}

export default PreFooterMain;

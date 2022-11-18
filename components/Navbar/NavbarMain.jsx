import { useSelector } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import { fetchLocaleDataFromApi } from "../../data/fetchData";
import Logo from "./Logo";
import Menu from "./Menu";

function NavbarMain() {
    const { locale } = useSelector((state) => state.language);
    const [navbarData, setNavbarData] = useState({
        logo: "",
        menu: {},
    });

    // Fetch the information that will populate the Navbar (logo, language, contact and currencies)
    const fetchNavbarData = useCallback(async () => {
        const data = await fetchLocaleDataFromApi(locale);

        setNavbarData({
            logo: data.navbar.logo,
            menu: data.navbar.menu,
        });
    });

    useEffect(() => {
        fetchNavbarData();
    }, [locale]);

    return (
        <div className="sticky top-0 z-20 bg-gray-100 px-2 py-6 flex flex-row justify-between drop-shadow-sm">
            <Logo url={navbarData.logo} />
            <Menu
                lang={navbarData.menu.lang}
                contact={navbarData.menu.contact}
                currency={navbarData.menu.currency}
            />
        </div>
    );
}

export default NavbarMain;

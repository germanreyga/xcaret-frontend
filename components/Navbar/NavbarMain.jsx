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

    // Fetch the information that will populate the Navbar
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
        <div className="sticky top-0 z-50 bg-gray-100 flex justify-between p-7">
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

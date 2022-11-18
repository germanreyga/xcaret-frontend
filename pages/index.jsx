import BodyMain from "../components/Body/BodyMain";
import FooterMain from "../components/Footer/FooterMain";
import HeaderMain from "../components/Header/HeaderMain";
import LegalsMain from "../components/Legals/LegalsMain";
import NavbarMain from "../components/Navbar/NavbarMain";
import PreFooterMain from "../components/PreFooter/PreFooterMain";

export default function Home() {
    return (
        <div className="flex justify-center">
            <div className="l:w-2/3 ">
                <NavbarMain />
                <HeaderMain />
                <BodyMain />
                <LegalsMain />
                <PreFooterMain />
                <FooterMain />
            </div>
        </div>
    );
}

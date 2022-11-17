import FooterMain from "../components/Footer/FooterMain";
import HeaderMain from "../components/Header/HeaderMain";
import NavbarMain from "../components/Navbar/NavbarMain";

export default function Home() {
    return (
        <div className="p-6">
            <NavbarMain />
            <HeaderMain />
            <FooterMain />
        </div>
    );
}

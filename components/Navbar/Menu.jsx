import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "../../store/reducers/language/languageSlice";
import { useState } from "react";

function Menu({ lang = {}, contact, currency = [] }) {
    const { locale } = useSelector((state) => state.language);
    const [currentCoinIndex, setCurrentCoinIndex] = useState(0);
    const dispatch = useDispatch();

    const changeToOtherLocale = () => {
        if (locale === "es") {
            dispatch(
                changeLanguage({
                    locale: "en",
                })
            );
        } else {
            dispatch(
                changeLanguage({
                    locale: "es",
                })
            );
        }
    };

    const changeToOtherCurrency = () => {
        const maxIndex = currency.length - 1;
        if (currentCoinIndex == maxIndex) {
            setCurrentCoinIndex(0);
        } else {
            setCurrentCoinIndex(currentCoinIndex + 1);
        }
    };

    return (
        <ul className="flex space-x-2 uppercase">
            <li>{contact}</li>
            <li>·</li>
            <li>
                <button
                    className="uppercase"
                    onClick={() => changeToOtherLocale()}
                >
                    {lang.title}
                </button>
            </li>
            <li>·</li>
            <li>
                <button
                    className="uppercase"
                    onClick={() => changeToOtherCurrency()}
                >
                    {currency[currentCoinIndex]}
                </button>
            </li>
        </ul>
    );
}

export default Menu;

import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "../../store/reducers/language/languageSlice";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

function Menu({ lang = {}, contact, currency = [] }) {
    const { locale } = useSelector((state) => state.language);
    const [pageLoading, setPageLoading] = useState(false);
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

        simulateLoadingPage(1500);
    };

    const simulateLoadingPage = (timeInMillis) => {
        // Simulate a loading time to show loading spinner animation
        setPageLoading(true);
        setTimeout(() => {
            setPageLoading(false);
        }, timeInMillis);
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
        <>
            {/* Adding the spinner to simulate loading time */}
            <div
                className={`absolute w-screen h-screen bg-gray-800 -ml-2 -mt-6 opacity-75 overflow-hidden flex justify-center items-center ${
                    !pageLoading && "hidden"
                }`}
            >
                <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="#FFFFFF"
                    ariaLabel="three-dots-loading"
                />
            </div>

            <ul className="flex space-x-2 uppercase text-xs mr-3">
                {/* Contact information */}
                <li>{contact}</li>
                <li className="invisible md:visible">·</li>

                {/* Language information */}
                <li>
                    <button
                        className="uppercase"
                        onClick={() => changeToOtherLocale()}
                    >
                        {lang.title}
                    </button>
                </li>

                {/* Currency information */}
                <li className="invisible md:visible">·</li>
                <li>
                    <button
                        className="uppercase"
                        onClick={() => changeToOtherCurrency()}
                    >
                        {currency[currentCoinIndex]}
                    </button>
                </li>
            </ul>
        </>
    );
}

export default Menu;

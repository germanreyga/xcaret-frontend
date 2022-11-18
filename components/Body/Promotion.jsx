import Image from "next/image";
import { useState } from "react";
import Modal from "../GeneralComponents/Modal";

function Promotion({
    title,
    logoPromo,
    subtitle,
    paragraphs,
    buttonInfo,
    imagePromo,
}) {
    const [bookNowModalIsVisible, setBookNowModalIsVisible] = useState(false);
    const [thankYouModalIsVisible, setThankYouModalIsVisible] = useState(false);

    const completePurchase = () => {
        setBookNowModalIsVisible(false);
        setThankYouModalIsVisible(true);
    };

    const closeThankYouModal = () => {
        setThankYouModalIsVisible(false);
    };

    const createRandNum = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    };

    return (
        <>
            {/* Modal that will show the randomly generated purchase order information */}
            <Modal
                show={bookNowModalIsVisible}
                handleClose={completePurchase}
                closeBtnText={"Completar compra / Complete purchase"}
            >
                <h1 className="uppercase font-bold">{title}</h1>
                <p className="py-8">Tickets: {createRandNum(1, 10)}</p>
                <p>Resumen de compra / Purchase summary:</p>
                {/* Random purchase summary */}
                <p className="text-sm px-16 italic py-16">
                    Ut posuere metus sed enim congue, sit amet accumsan quam
                    pretium. Curabitur in pulvinar urna, in tempor ante.
                    Praesent non aliquam lorem. Nam sit amet orci tortor. Fusce
                    pulvinar sit amet massa nec congue. Maecenas condimentum
                    felis ultricies, posuere ipsum ut, ullamcorper eros. Sed
                    porttitor imperdiet dignissim. Pellentesque nec nibh
                    finibus, porttitor turpis ac, varius risus. In nec rutrum
                    purus. Etiam vulputate dolor non ante molestie malesuada.
                    Pellentesque at augue hendrerit, rhoncus ipsum sed, tempus
                    mauris. Nunc venenatis enim et velit aliquet euismod. Nulla
                    quis maximus justo, sit amet aliquet tellus. Suspendisse sit
                    amet orci quis elit interdum vehicula vitae ac quam
                </p>
                {/* Create a random price for the purchase */}
                <p>
                    ${createRandNum(300, 10000)}.{createRandNum(0, 9)}
                    {createRandNum(0, 9)}
                </p>
            </Modal>

            {/* Modal that will show the Thank You message */}
            <Modal
                show={thankYouModalIsVisible}
                handleClose={closeThankYouModal}
                closeBtnText={"Regresar / Go Back"}
            >
                <h1 className="py-10">
                    Gracias por su compra / Thank you for your purchase!{" "}
                </h1>
            </Modal>

            <div className="flex flex-col justify-center items-center z-10">
                <Image
                    src={logoPromo}
                    alt={title + " logo"}
                    width={200}
                    height={0}
                    unoptimized
                    className="border-solid border-8 border-white"
                />
                <h1 className="uppercase text-xl mt-3 font-semibold">
                    {title}
                </h1>
                <div className="p-6 flex flex-col items-center">
                    <h2 className="text-xl">{subtitle}</h2>
                    {paragraphs.map((paragraph, index) => {
                        return (
                            <p className="text-lg mt-2" key={index}>
                                {paragraph}
                            </p>
                        );
                    })}
                    <button
                        className="mt-4 w-full md:w-1/4 rounded border border-black py-2"
                        value={buttonInfo.href}
                        onClick={() => setBookNowModalIsVisible(true)}
                    >
                        {buttonInfo.text}
                    </button>
                    {/* Commented this since there is no relation to the UI mock provided */}
                    {/* <img src={imagePromo} alt={title + " promotion"} /> */}
                </div>
            </div>
        </>
    );
}

export default Promotion;

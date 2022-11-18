import Image from "next/image";

function Promotion({
    title,
    logoPromo,
    subtitle,
    paragraphs,
    buttonInfo,
    imagePromo,
}) {
    return (
        <div className="flex flex-col items-center -mt-12 z-40">
            <Image
                src={logoPromo}
                alt={title + " logo"}
                width={200}
                height={0}
                unoptimized
                className="border-solid border-8 border-white"
            />
            <h1 className="uppercase text-xl mt-3 font-semibold">{title}</h1>
            <div className="p-6">
                <h2 className="text-xl">{subtitle}</h2>
                {paragraphs.map((paragraph, index) => {
                    return (
                        <p className="text-md mt-2" key={index}>
                            {paragraph}
                        </p>
                    );
                })}
                <button
                    className="mt-4 w-full rounded border border-black py-2"
                    value={buttonInfo.href}
                >
                    {buttonInfo.text}
                </button>
                {/* Commented this since there is no relation to the UI mock provided */}
                {/* <img src={imagePromo} alt={title + " promotion"} /> */}
            </div>
        </div>
    );
}

export default Promotion;

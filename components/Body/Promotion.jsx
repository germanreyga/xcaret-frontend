import React from "react";

function Promotion({
    title,
    logoPromo,
    subtitle,
    paragraphs,
    buttonInfo,
    imagePromo,
}) {
    return (
        <div>
            <h1>Promotion</h1>
            <h2>{title}</h2>
            <img src={logoPromo} alt={title + " logo"} />
            <h3>{subtitle}</h3>
            {paragraphs.map((paragraph, index) => {
                return <p key={index}>{paragraph}</p>;
            })}
            <button value={buttonInfo.href}>{buttonInfo.text}</button>
            <img src={imagePromo} alt={title + " promotion"} />
        </div>
    );
}

export default Promotion;

function Carousel({ text, desktopImgs, mobileImgs }) {
    return (
        <div>
            <p>{text}</p>

            {desktopImgs.map((dImg) => {
                return <img src={dImg.src} alt={dImg.alt} key={dImg.src} />;
            })}

            {mobileImgs.map((mImg) => {
                return <img src={mImg.src} alt={mImg.alt} key={mImg.src} />;
            })}
        </div>
    );
}

export default Carousel;

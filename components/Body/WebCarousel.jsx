function WebCarousel({ text, desktopImgs }) {
    return (
        <div className="hidden">
            <p>{text}</p>

            {desktopImgs.map((dImg) => {
                return <img src={dImg.src} alt={dImg.alt} key={dImg.src} />;
            })}
        </div>
    );
}

export default WebCarousel;

function Logo({ url }) {
    return (
        <div className="basis-1/3 md:basis-1/8">
            <img src={url} alt="Xcaret Logo" height="100%" />
        </div>
    );
}

export default Logo;

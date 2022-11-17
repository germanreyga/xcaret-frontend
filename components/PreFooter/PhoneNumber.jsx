function PhoneNumber({ name, number, href, main }) {
    return (
        <div>
            <span className={main && "font-bold"}>{name}</span>
            {number && <a href={"tel:" + href}>{number}</a>}
        </div>
    );
}

export default PhoneNumber;

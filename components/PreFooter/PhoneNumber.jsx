function PhoneNumber({ name, number, href, main }) {
    return (
        <div className="flex flex-col uppercase mt-6 text-xs font-extralight basis-1/2">
            <span className={""}>{name}</span>
            {number && <a href={"tel:" + href}>{number}</a>}
        </div>
    );
}

export default PhoneNumber;

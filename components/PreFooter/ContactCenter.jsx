function ContactCenter({ title, email }) {
    return (
        <div className="mt-6 text-xs">
            <p className="font-bold">{title}</p>
            <p className="font-extralight">{email}</p>
        </div>
    );
}

export default ContactCenter;

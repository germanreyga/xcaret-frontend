import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function HeaderMain() {
    const { locale } = useSelector((state) => state.language);

    return <h1>Header</h1>;
}

export default HeaderMain;

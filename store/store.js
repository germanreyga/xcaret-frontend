import { configureStore } from "@reduxjs/toolkit";

// Importing reducers
import languageReducer from "./reducers/language/languageSlice";
import currencyReducer from "./reducers/currency/currencySlice";

export default configureStore({
    reducer: {
        language: languageReducer,
        currency: currencyReducer,
    },
});

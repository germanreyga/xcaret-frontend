import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
    name: "language",
    initialState: {
        locale: "es",
    },
    reducers: {
        changeLanguage: (state, action) => {
            if (isValidLanguage(action.payload.locale))
                state.locale = action.payload.locale;
        },
    },
});

// Supported languages
const validLanguages = ["es", "en"]; // es = spanish, en = english

// Validate if a language is supported in the website
const isValidLanguage = (value) => {
    if (validLanguages.includes(value)) return true;

    return false;
};

export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;

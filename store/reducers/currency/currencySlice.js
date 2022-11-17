import { createSlice } from "@reduxjs/toolkit";

export const currencySlice = createSlice({
    name: "currency",
    initialState: {
        coin: "mxn",
    },
    reducers: {
        changeCurrency: (state, action) => {
            if (isValidCurrency(action.payload.coin))
                state.coin = action.payload.coin;
        },
    },
});

// Supported currencies
const validCurrencies = ["mxn", "usd", "eur"]; // mxn = Mexican peso, usd = United States dollar, eur = European Union euro

// Validate if a currency is supported in the website
const isValidCurrency = (value) => {
    if (validCurrencies.includes(value)) return true;

    return false;
};

export const { changeCurrency } = currencySlice.actions;

export default currencySlice.reducer;

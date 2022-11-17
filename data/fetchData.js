// This function will fetch the data from the data source provided by Xcaret.
// The locale will need to be specified when calling this method.
// In this case there are 2 supported locales: "es" (spanish) and "en" (english)
const fetchLocaleDataFromApi = (locale) => {
    return fetch(
        "https://raw.githubusercontent.com/javialcocer/test-json/main/data.json"
    )
        .then((response) => response.json())
        .then((data) => {
            return data[locale];
        })
        .catch((err) => {
            console.log(err);
        });
};

export { fetchLocaleDataFromApi };

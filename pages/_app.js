import "../styles/globals.css";
// Redux imports
import { Provider, useDispatch } from "react-redux";
import store from "../store/store";

function MyApp({ Component, pageProps }) {
    //const dispatch = useDispatch();

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;

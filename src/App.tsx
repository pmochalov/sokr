import React, { createContext } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Info from "./components/Info/Info";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

export type Link = {
    is_created: boolean;
    url: string;
    url_short: string;
};

export const SokrContext = createContext<{
    sokrData: Link;
    setSokrData: React.Dispatch<React.SetStateAction<Link>>;
}>({
    sokrData: {
        is_created: false,
        url: "",
        url_short: "",
    },
    setSokrData: () => {},
});

export const useSokr = () => React.useContext(SokrContext);

const App: React.FC = () => {
    const [sokrData, setSokrData] = React.useState<Link>({
        is_created: false,
        url: "",
        url_short: "",
    });

    return (
        <SokrContext.Provider value={{ sokrData, setSokrData }}>
            <Header />
            <Main>
                <Form />
                <Info />
            </Main>

            <Footer />
        </SokrContext.Provider>
    );
};

export default App;

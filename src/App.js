import React, { createContext } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Info from "./components/Info/Info";
import Form from "./components/Form/Form";
import Footer from './components/Footer/Footer';

export const SokrContext = createContext()

function App() {

  const [sokrData, setSokrData] = React.useState(
    { is_created: false, url: '', url_short: '' });

  return (
    <SokrContext.Provider value={{sokrData, setSokrData}}>
      <Header />
      <Main>
        <Form />
        <Info />
      </Main>

      <Footer />
    </SokrContext.Provider>
  );
}

export default App;

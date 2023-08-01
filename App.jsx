import React from 'react';
import { Header } from "./component/hd-fr/Header";
import { Main } from "./component/section/Main";
import { Footer } from "./component/hd-fr/Footer"

export function App() {
    return(
        <React.StrictMode>
            <Header />
            <Main />
            <Footer />
        </React.StrictMode>
    )
}


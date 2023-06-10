import React from "react";
import { createRoot} from 'react-dom/client';
import '/src/index.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

const App = () => {
    return (
        <div>
            <Header/>
            <Home/>
            <Footer/>
        </div>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<App/>)
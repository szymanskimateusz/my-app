import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import CrewMemberCRUD from "./Components/CrewMemberCRUD/CrewMemberCRUD";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" />
                    <Route index element={<Main />} />
                    <Route path="crud" element={<CrewMemberCRUD />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

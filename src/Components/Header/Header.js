import React from "react";
import Navbar from './Navbar';
import MenuBtn from "./MenuBtn";

export default function Header() {
    return (
        <header>
            <Navbar/>
            <MenuBtn/>
        </header>
    );
}
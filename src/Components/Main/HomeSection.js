import React from "react";
import olshLogo from "../../img/olshLogo.png";

export default function HomeSection() {
    return (
        <section id="parallax" className="home">
            <h2>WITAMY W</h2>
            <div className="olshLogoHome">
                <img src={olshLogo} alt="Logo of the website"/>
            </div>
        </section>
    );
}
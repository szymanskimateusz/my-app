import React from "react";

export default function Contact() {
    return (
        <section id="gotocontact" className="contact">
            <h2>Szukasz kontaktu?</h2>
            <div className="paragraph">
                <p>Napisz do nas na jeden z naszych<span id="secondary-color"> INSTAGRAMÓW</span></p> 
                <a href="https://www.instagram.com/olshyard" target="blank"><i className="fab fa-instagram"></i>OLSH Yard</a>
                <a href="https://www.instagram.com/olshcrew" target="blank"><i id="sdIG" className="fab fa-instagram"></i>OLSH Crew</a>
            </div>
        </section>
    );
}
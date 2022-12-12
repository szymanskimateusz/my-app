import React from "react";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import GapOne from "./GapOne";
import CrewSection from "./CrewSection";
import Contact from './Contact'

export default function Main() {
    return (
        <main>
            <HomeSection/>
            <AboutSection/>
            <GapOne/>
            <CrewSection/>
            <section className="gap-two"></section>
            <section id="gotospots" className="spots">
                <h2>Spoty</h2>
            </section>
            <GapOne/>
            <Contact/>
            <GapOne/>
        </main>
    );
}
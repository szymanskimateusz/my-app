import React from "react";
import Rider from "./Crew/Rider";
import { RidersDB } from "../../Backend/DataBase/RidersDB";

const ridersDB = new RidersDB();

export default function CrewSection() {
    const [riders, setRiders] = React.useState([]);

    React.useEffect(() => {
        ridersDB
            .getRiders()
            .then((riders) => {
                setRiders(riders);
            })
            .catch((e) => console.log(e));
    }, []);

    const riderElements = riders.map((rider) => {
        return (
            <Rider
                key={rider.id}
                firstName={rider.firstName}
                lastName={rider.lastName}
                age={rider.age}
                favTrick={rider.favTrick}
                dreamTrick={rider.dreamTrick}
                youtube={rider.youtube}
                instagram={rider.instagram}
                img={rider.img}
                isShown={rider.isShown}
            />
        );
    });

    return (
        <section id="gotocrew" className="crew">
            <h2>EKIPA</h2>
            <div className="container">{riderElements}</div>
        </section>
    );
}

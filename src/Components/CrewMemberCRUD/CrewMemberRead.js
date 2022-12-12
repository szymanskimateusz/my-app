import React from "react";
import CrewMemberRider from "./CrewMemberRider";
import { RidersDB } from "../../Backend/DataBase/RidersDB";

const ridersDB = new RidersDB();

export default function CrewMemberRead() {
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
            <CrewMemberRider
                key={rider.id}
                id={rider.id}
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
        <div className="crewMemberCRUD">
            <h2>Member List</h2>
            {riderElements}
        </div>
    );
}

import React from "react";
import { RidersDB } from "../../Backend/DataBase/RidersDB";

const ridersDB = new RidersDB();

export default function CrewMemberSetCreate() {
    const [newIsShown, setNewIsShown] = React.useState(false);
    const [newRider, setNewRider] = React.useState({
        firstName: "",
        lastName: "",
        age: 1,
        favTrick: "",
        dreamTrick: "",
        youtube: "",
        instagram: "",
        isShown: newIsShown,
        img: "",
    });

    function handleChange(event) {
        setNewRider((prevNewRider) => {
            return {
                ...prevNewRider,
                [event.target.name]: event.target.value,
            };
        });
    }

    const createRider = (event) => {
        event.preventDefault();
        ridersDB
            .createRider({
                firstName: newRider.firstName,
                lastName: newRider.lastName,
                age: Number(newRider.age),
                favTrick: newRider.favTrick,
                dreamTrick: newRider.dreamTrick,
                youtube: newRider.youtube,
                instagram: newRider.instagram,
                isShown: newIsShown,
                img: "",
            })
            .then(() => {
                window.location.reload(false);
            })
            .catch((e) => console.log(e));
    };

    return (
        <div className="setCreate">
            <h2>Add Rider</h2>
            <div className="centerForm">
                <form>
                    <input
                        type="text"
                        placeholder="First Name"
                        onChange={handleChange}
                        value={newRider.firstName}
                        name="firstName"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        onChange={handleChange}
                        value={newRider.lastName}
                        name="lastName"
                    />
                    <input
                        type="number"
                        placeholder="Age (number)"
                        min="1"
                        onChange={handleChange}
                        value={newRider.age}
                        name="age"
                    />
                    <input
                        type="text"
                        placeholder="Favourite Trick"
                        onChange={handleChange}
                        value={newRider.favTrick}
                        name="favTrick"
                    />
                    <input
                        type="text"
                        placeholder="Dream Trick"
                        onChange={handleChange}
                        value={newRider.dreamTrick}
                        name="dreamTrick"
                    />
                    <input
                        type="text"
                        placeholder="Youtube Link"
                        onChange={handleChange}
                        value={newRider.youtube}
                        name="youtube"
                    />
                    <input
                        type="text"
                        placeholder="Instagram Link"
                        onChange={handleChange}
                        value={newRider.instagram}
                        name="instagram"
                    />
                    <div className="checkboxDiv">
                        <label>Show on home page?</label>
                        <input
                            type="checkbox"
                            onClick={() => {
                                setNewIsShown((prevState) => !prevState);
                            }}
                        />
                    </div>
                    <button onClick={createRider}>Add Rider</button>
                </form>
            </div>
        </div>
    );
}

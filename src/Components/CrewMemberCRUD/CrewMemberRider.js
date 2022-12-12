import React from "react";
import deleteRider from "./CrewMemberDelete";
import CrewMemberSetUpdate from "./CrewMemberSetUpdate";

export default function CrewMemberRider(props) {
    const [showUpdate, setShowUpdate] = React.useState(false);

    function changeShowUpdate() {
        setShowUpdate((prevState) => !prevState);
    }

    return (
        <div className="container">
            <div className="boxShadow">
                <div className="riderBox">
                    <div className="riderImage">
                        {/* <img src={`${props.img}`} alt="Riders Photo"/> */}
                    </div>
                    <div className="riderText">
                        <h3>
                            {props.firstName} {props.lastName}
                        </h3>
                        <h6>
                            {props.age} {props.age < 22 ? "lat" : "lata"}
                        </h6>
                        <h6>Ulubiony Trick</h6>
                        <h6>
                            <span id="secondary-color">{props.favTrick}</span>
                        </h6>
                        <h6>Dream Trick</h6>
                        <h6>
                            <span id="secondary-color">{props.dreamTrick}</span>
                        </h6>
                    </div>
                    <div className="riderSocials">
                        <a href={props.youtube} target="blank">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a href={props.instagram} target="blank">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <div className="boxShadow">
                    <button
                        className="delete"
                        onClick={() => {
                            deleteRider(props.id);
                        }}
                    >
                        Delete
                    </button>
                </div>
                <div className="boxShadow">
                    <button className="showUpdate" onClick={changeShowUpdate}>
                        Update
                    </button>
                </div>
            </div>

            {showUpdate && (
                <CrewMemberSetUpdate
                    key={props.id}
                    id={props.id}
                    firstName={props.firstName}
                    lastName={props.lastName}
                    age={props.age}
                    favTrick={props.favTrick}
                    dreamTrick={props.dreamTrick}
                    youtube={props.youtube}
                    instagram={props.instagram}
                    img={props.img}
                    isShown={props.isShown}
                />
            )}
        </div>
    );
}

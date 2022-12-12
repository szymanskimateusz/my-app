import React from "react";

export default function Rider(props) {
    if (!props.isShown) return;

    return (
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
    );
}

import React from "react";

export default function CrewMemberSetUpdate(props) {
    const [isShown, setIsShown] = React.useState(props.isShown);

    function changeIsShown() {
        setIsShown((prevState) => !prevState);
    }

    return (
        <div className="setCreate">
            <h2>Update Rider</h2>
            <div className="centerForm">
                <form>
                    <input
                        type="text"
                        placeholder="First Name"
                        dafaultValue={props.firstName}
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        dafaultValue={props.lastName}
                    />
                    <input
                        type="number"
                        placeholder="Age (number)"
                        min="1"
                        dafaultValue={props.age}
                    />
                    <input
                        type="text"
                        placeholder="Favourite Trick"
                        dafaultValue={props.favTrick}
                    />
                    <input
                        type="text"
                        placeholder="Dream Trick"
                        dafaultValue={props.dreamTrick}
                    />
                    <input
                        type="text"
                        placeholder="Youtube Link"
                        dafaultValue={props.yt}
                    />
                    <input
                        type="text"
                        placeholder="Instagram Link"
                        dafaultValue={props.ig}
                    />
                    <div className="checkboxDiv">
                        <label>Show on home page?</label>
                        <input
                            type="checkbox"
                            checked={isShown}
                            onClick={changeIsShown}
                        />
                    </div>
                    <button>Update Rider</button>
                </form>
            </div>
        </div>
    );
}

import React from "react";
import CrewMemberRead from "./CrewMemberRead";
import CrewMemberSetCreate from "./CrewMemberSetCreate";

export default function CrewMemberCRUD() {
    return (
        <div className="crewMemberCRUD">
            <CrewMemberSetCreate/>
            <CrewMemberRead/>
        </div>
    );
}

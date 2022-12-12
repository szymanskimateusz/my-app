import React from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../Backend/DataBase/firebase-config";

export default function updateRider(props) {
    const updateRider = async (id, age) => {
        const userDoc = doc(db, "ridersCrew", id);
        const newFields = { age: age + 1 };
        await updateDoc(userDoc, newFields);
        window.location.reload(false);
      };

    updateRider(props);
}
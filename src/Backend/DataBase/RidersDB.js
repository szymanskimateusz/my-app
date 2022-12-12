import { db } from "./firebase-config";
import { addDoc, collection, getDocs } from "firebase/firestore";

export class RidersDB {
    constructor() {
        this.ridersCollRef = collection(db, "ridersCrew");

        this.createRider = async (riderData) => {
            await addDoc(this.ridersCollRef, riderData);
        };

        this.getRiders = async () => {
            const data = await getDocs(this.ridersCollRef).catch((e) =>
                console.log(e)
            );
            return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        };
    }
}

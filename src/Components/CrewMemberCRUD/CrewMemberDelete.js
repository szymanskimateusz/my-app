import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../Backend/DataBase/firebase-config";

export default function deleteRider(props) {
    const deleteRider = async (id) => {
        const riderDoc = doc(db, "ridersCrew", id);
        await deleteDoc(riderDoc);
        window.location.reload(false);
    };

    deleteRider(props);
}

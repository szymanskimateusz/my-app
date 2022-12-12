import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "",
    authDomain: "olshcrewbase.firebaseapp.com",
    projectId: "olshcrewbase",
    storageBucket: "olshcrewbase.appspot.com",
    messagingSenderId: "",
    appId: "",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

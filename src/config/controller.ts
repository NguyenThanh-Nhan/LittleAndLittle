import { collection, getFirestore } from "firebase/firestore";
import { app } from "./firebase";

export const firestore = getFirestore(app);

// EVENTS COLLECTION
export const eventsCollection = collection(firestore, "events");
// PAYS COLLECTION
export const paysCollection = collection(firestore, "pays");

import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from "./firebase";
import { AddContactType } from "../types/contact";

export const firestore = getFirestore(app);

// EVENTS COLLECTION
export const eventsCollection = collection(firestore, "events");
// PAYS COLLECTION
export const paysCollection = collection(firestore, "pays");

//  CONTACT CONLECTTION
export const contactsCollection = collection(firestore, "contacts");


// ADD A NEW CONTACT 
export const addContact = async (contactData: AddContactType) => {
    const newContact = await addDoc(contactsCollection, { ...contactData });
    console.log(`The new contact was created at ${newContact.path}`);
};
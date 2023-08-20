'use client'

import { collection, addDoc } from "firebase/firestore";
import { getFirestoreInstance } from "@/firebase/clientApp";

const SaveBtn = () => {
  const firestore = getFirestoreInstance();

  const handleSave = async () => {
    try {
      const docRef = await addDoc(collection(firestore, "users"), {
        first: "Alan",
        middle: "Mathison",
        last: "Turing",
        born: 1912
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <button
      type="submit"
      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={handleSave}
    >
      Save
    </button>
  )
}

export default SaveBtn;
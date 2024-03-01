// services/firebase.js
import { db } from './firebaseConfig';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';

// Create a new ToDo
export const addToDo = async (todo) => {
  try {
    const docRef = await addDoc(collection(db, "todos"), todo);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// Read ToDos
export const getToDos = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "todos"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (e) {
    console.error("Error fetching documents: ", e);
  }
};

// Update a ToDo
export const updateToDo = async (id, updatedFields) => {
  try {
    const todoRef = doc(db, "todos", id);
    await updateDoc(todoRef, updatedFields);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

// Delete a ToDo
export const deleteToDo = async (id) => {
  try {
    const todoRef = doc(db, "todos", id);
    await deleteDoc(todoRef);
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
};

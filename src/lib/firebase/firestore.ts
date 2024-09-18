import { getFirestore } from "firebase/firestore";
import firebase from './firebase';

const firestore = getFirestore(firebase);

export default firestore;

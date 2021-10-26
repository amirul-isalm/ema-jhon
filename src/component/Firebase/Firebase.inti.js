
import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.Config";
const FirebaseIntIalize = () => {
    return initializeApp(firebaseConfig)
}
export default FirebaseIntIalize;
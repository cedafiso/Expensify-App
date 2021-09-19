import { firebase, firebaseAuth, googleProvider } from "../firebase/firebase";
import * as actionExpenses from './expenses';

const auth = firebaseAuth.getAuth();

export const logIn = (uid) => ({
  type:"LOG_IN",
  uid    
});

export const logOut = () => ({
    type:"LOG_OUT",
});

export const startLogin = () => {
    return () => {
        return firebaseAuth.signInWithPopup(auth, googleProvider)
    }
};

export const startLogOut = () => {
    return (dispatch) => {
        return firebaseAuth.signOut(auth).
        then(() => {
            dispatch(actionExpenses.resetExpenses());
            console.log("Logged out");
        }).
        catch((e) => {
            console.log(e);
        })
    }
};
import { initializeApp } from "firebase/app";
import { getDatabase, ref ,set, remove,  onValue} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDiGy88cnRardAuiG3X8lgU5i3DlCv-DTY",
    authDomain: "expensify-d4fa8.firebaseapp.com",
    databaseURL: "https://expensify-d4fa8-default-rtdb.firebaseio.com",
    projectId: "expensify-d4fa8",
    storageBucket: "expensify-d4fa8.appspot.com",
    messagingSenderId: "862043341895",
    appId: "1:862043341895:web:3b182e0822138978329d62",
    measurementId: "G-D7ZN4EZLF2"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase();

set(ref(database), {
    name:'Cesar Figueroa',
    isSingle: false,
    location: {
        contry: 'Canada',
        city: 'Vancouver'
    }
}).then(() => {
    console.log('Data is saved');
}).catch((e) => {
    console.log('This failed', e);
});

set(ref(database, 'age'), 29);

set(ref(database, 'location/city'), 'Burnaby');

// remove(ref(database, 'isSingle')).then(() => {
//     console.log('Sucefully removed');
// }).catch((e) => {
//     console.log('Unsucefully removed');
// });


onValue(ref(database, 'age'), (snapshot)=> {
    console.log(snapshot.val());
})

// set(ref(database, 'age'),null ).then(() => {
//     console.log('Sucefully erased');
// })
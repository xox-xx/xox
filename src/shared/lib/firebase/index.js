import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/functions'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DB_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MSG_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
}

let auth, db, firestore, functions, timestamp

if (!firebase.apps.length) {
    firebase.initializeApp(config)

    db = firebase.database()
    functions = firebase.functions()

    auth = firebase.auth()
    auth.setPersistence(firebase.auth.Auth.Persistence.NONE).catch(e => console.log(e))

    firestore = firebase.firestore()
    firestore.enablePersistence()
        .catch(err => {
            if (err.code === 'failed-precondition') {
                console.warn('Multiple tabs open, persistence can only be enabled in one tab at a a time')
            } else if (err.code === 'unimplemented') {
                console.warn('The current browser does not support all of the features required to enable persistence')
            }
        })

    timestamp = firebase.firestore.FieldValue.serverTimestamp()
}

export {
    auth,
    firebase,
    firestore,
    functions,
    timestamp
}
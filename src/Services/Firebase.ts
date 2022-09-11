import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAUiYpBESUeS6v-03FQOFHDG7xZoT9bhzM",
  authDomain: "chat-muaz.firebaseapp.com",
  projectId: "chat-muaz",
  storageBucket: "chat-muaz.appspot.com",
  messagingSenderId: "1028144045328",
  appId: "1:1028144045328:web:2ffeedce1ca54b9faed995"
};

  const app = firebase.initializeApp(firebaseConfig)

  const db = app.firestore()
  const auth = app.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { db, auth, provider }

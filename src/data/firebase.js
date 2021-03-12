import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBLZ1MjGR-9naCsqeMjQIppEwkM9qZVMUY",
  authDomain: "marielou-react.firebaseapp.com",
  projectId: "marielou-react",
  storageBucket: "marielou-react.appspot.com",
  messagingSenderId: "662884818716",
  appId: "1:662884818716:web:86127ed17d9083dee064d9"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export default bd;

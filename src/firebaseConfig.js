import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3YL-3TLEAsWc8pcZFphkUV6cmrXbX5Xs",
  authDomain: "ecommerce-bebys.firebaseapp.com",
  projectId: "ecommerce-bebys",
  storageBucket: "ecommerce-bebys.appspot.com",
  messagingSenderId: "162721171673",
  appId: "1:162721171673:web:2b1cd03406b5e1f635d6c8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { child, get, getDatabase, ref, remove, set } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const db = getDatabase();

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export async function logout() {
  return signOut(auth).catch(console.error);
}

export function getUserState(callback) {
  onAuthStateChanged(auth, async (user) => {
    callback(user);
  });
}

export async function addNewProduct(product) {
  set(ref(db, "products/" + product.id), {
    ...product,
  });
}

export async function getProducts() {
  console.log(process.env.REACT_APP_FIREBASE_DATABASE_URL);
  return get(child(ref(db), `products`))
    .then((snapshot) => {
      const data = snapshot.val() || {};
      console.log(snapshot);
      return Object.values(data);
    })
    .catch(console.error);
}

export async function addOrModifyCart(userId, cart) {
  set(ref(db, `carts/${userId}/${cart.id}`), cart);
}

export async function getCart(userId) {
  return get(child(ref(db), `carts/${userId}`))
    .then((snapshot) => {
      const data = snapshot.val() || {};
      return Object.values(data);
    })
    .catch(console.error);
}

export async function removeCart(userId, cartId) {
  return remove(ref(db, `carts/${userId}/${cartId}`));
}

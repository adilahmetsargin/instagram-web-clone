// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { userHandle } from "utils";

const firebaseConfig = {
  apiKey: "AIzaSyBqilGhALXmt7CXBif7PmUmXL8ewNXfIlg",
  authDomain: "instagram-web-clone-c8d81.firebaseapp.com",
  projectId: "instagram-web-clone-c8d81",
  storageBucket: "instagram-web-clone-c8d81.appspot.com",
  messagingSenderId: "91633373238",
  appId: "1:91633373238:web:22b93861124bfa09c90897"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth()


onAuthStateChanged(auth, user => { 
        userHandle(user || false)
})

export const login = async (email, password) => {
    try {
    const response = await signInWithEmailAndPassword(auth,email, password);
    console.log(response.user)

    } catch (error) {
            toast.error(error.code)
        }
}

export const logout = async () => {
        try {
        await signOut(auth)
        } catch (error) {
        toast.error(error.code)
        }
}

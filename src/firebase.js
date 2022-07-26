// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged,updateProfile, signInWithEmailAndPassword,createUserWithEmailAndPassword, signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { userHandle } from "utils";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"

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

const db = getFirestore(app)

onAuthStateChanged(auth, async user => {
	if (user) {
		const dbUser = await getDoc(doc(db, "users", user.uid))
		let data = {
			uid: user.uid,
			fullName: user.displayName,
			email: user.email,
			emailVerified: user.emailVerified,
			...dbUser.data()
		}
		userHandle(data)
	} else {
		userHandle(false)
	}
})

export const login = async (email, password) => {
    try {
    const response = await signInWithEmailAndPassword(auth,email, password);
    return response
    } catch (error) {
            toast.error(error.code)
        }
}

export const register = async ({email, password, fullName, userName}) => {
	try {
		const user = await getDoc(doc(db, "usernames", userName))
		if (user.exists()) {
			toast.error(`${userName} kullanıcı adı başkası tarafından kullanılıyor.`)
		} else {
			const response = await createUserWithEmailAndPassword(auth, email, password)
			if (response.user) {
				await setDoc(doc(db, "usernames", userName), {
					user_id: response.user.uid
				})
				await setDoc(doc(db, "users", response.user.uid), {
					fullName: fullName,
					username: userName,
					followers: [],
					following: [],
					notifications: [],
					website: '',
					bio: '',
					phoneNumber: '',
					gender: '',
					posts: 0
				})

				await updateProfile(auth.currentUser, {
					displayName: fullName
				})
				return response.user
			}
		}
	} catch (err) {
		toast.error(err.code)
	}
}

export const logout = async () => {
        try {
        await signOut(auth)
        } catch (error) {
        toast.error(error.code)
        }
}

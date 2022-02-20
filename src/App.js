import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shop/shop.component';
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, db } from './firebase/firebase.utils';
import { collection, getDoc, doc } from "firebase/firestore";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
  createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = collection(db, 'users');
    //const snapShot = await getDocs(userRef);
    console.log('userRef', userRef);

    const userRefs = doc(db, 'users/1551515fdfe');
    const docSnap = await getDoc(userRefs);
    console.log("docSnap", docSnap);
    console.log("Document data:", docSnap.data());

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }

    /*const citiesCol = collection(db, 'users');
    const citySnapshot = await getDocs('citiesCol/128feefe');
    const cityList = citySnapshot.docs.map(doc => ({...doc.data(), id:doc.id}));

    console.log('citiesCol',citiesCol);
    console.log('citySnapshot',citySnapshot);
    console.log('cityList',cityList);*/

  }
  unsubscribeFromAuth = null
  componentDidMount() {
    auth.onAuthStateChanged(async user => {
      this.setState({ currentUser: user });
      console.log("user", user);
      this.createUserProfileDocument(user);

    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="sign" element={<SignInAndSignUpPage />} />

        </Routes>
      </div>
    );
  }
}

export default App;

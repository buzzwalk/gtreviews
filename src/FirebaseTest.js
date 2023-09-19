
import './App.css';
import db from "./firebase";
import { collection, addDoc, setDoc, doc, getDoc, query, where, getDocs } from "firebase/firestore"; 


async function handleClickAdd(){ 
  // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
}
async function handleClickSet(){ 
  // Add a new document with a generated id.
  var name = "Ada";
  await setDoc(doc(db, "users", name), {
    first: "Ada",
    last: "Lovelace",
    born: 1816
  });
  console.log("Document written with ID: ", name);
}

async function handleClickGet(){
  const docRef = doc(db, "users", "Ada");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

async function handleClickQuery(){
  const q = query(collection(db, "users"), where("first", "==", "Ada"));
  const querySnapshot = await getDocs(q);
  const users = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    users.push(doc.data());
  });
  console.log(users);
}

function FirebaseTest() {
  return (
    <div className="App">
      <button className="coolbutton" onClick={() => handleClickAdd()}>Add</button>
      <button className="coolbutton" onClick={() => handleClickSet()}>Set</button>
      <button className="coolbutton" onClick={() => handleClickGet()}>Get</button>
      <button className="coolbutton" onClick={() => handleClickQuery()}>Query</button>
    </div>
  );
}

export default FirebaseTest;

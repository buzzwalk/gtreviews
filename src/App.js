
import './App.css';
import db from "./firebase";
import { collection, addDoc } from "firebase/firestore"; 


async function handleClick(){ 
  // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
}

function App() {
  return (
    <div className="App">
      <button className="coolbutton" onClick={handleClick}></button>
    </div>
  );
}

export default App;


import './App.css';
import db from "./firebase";
import { collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore"; 
import { useState } from 'react';

function ProfessorReviewTest() {
    const [review, setReview] = useState({
        name: '',
        professor: '',
        class: '',
        review: '',
        rating: 0
    });
    function handleChange(e) {
        const {name, value} = e.target;
        setReview(prev => {
            return {
                ...prev,
                [name]: value
            }
        });
        
    }
    console.log(review);

    function submitReview() {
        
    }
    return (
        <form className="FormInput">
        <input
          type="text"
          placeholder="Enter your name"
          name="name" 
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter your professor's name"
          name="professor" 
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter the class name"
          name="class" 
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter your review"
          name="review" 
          onChange={handleChange}
        />
        <input 
          type="number"
          placeholder='Enter your rating'
          name="rating"
          onChange={handleChange}
        />
        <button className ="coolbutton" type='submit' onClick={() => submitReview}>Submit</button>
      </form>
    );
}

export default ProfessorReviewTest;

import './App.css';
import db from "./firebase";
import { collection, addDoc, setDoc, doc, getDoc, query, getDocs, where } from "firebase/firestore"; 
import { useState } from 'react';

export default function QueryReviewsTest() {
    async function getWillage() {
        //get the willage document and print it
        //output should be the data in the willage document
    }
    async function queryDiningHalls() {
        //get all dininghalls and print the id (not the data) of the document 
        //output should be "Willage" and "nav"
    }
    async function queryWillageReviews() {
        //get all Willage reviews and print them (the data not the id)
        //remember reviews is a subcollection in willage, which is a document in dininghalls
        //should be 4 reviews
    }
    async function queryFiveStarWillageReviews() {
        //get all willage reviews with a rating of 5 and print them
        //should be 3 reviews
        
    }
    async function queryFiveStarJan012023WillageReviews() {
        //get all willage reviews with a rating of 5 and timestamp of "Jan 01 2023" and print them
        //should be 2 reviews
        //timestamps will be done differently in production but for now they are just strings
    }
    
    return(
        <div>
            <button className ="coolbutton" onClick={() => getWillage()}>getWillage</button>
            <button className ="coolbutton" onClick={() => queryDiningHalls()}>QueryDHalls</button>
            <button className ="coolbutton" onClick={() => queryWillageReviews()}>QueryWillage</button>
            <button className ="coolbutton" onClick={() => queryFiveStarWillageReviews()}>QueryWillage5S</button>
            <button className ="coolbutton" onClick={() => queryFiveStarJan012023WillageReviews()}>QueryWillage5SJan</button>

        </div>
    )
}
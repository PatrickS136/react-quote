import classes from "./QuoteBox.module.css"
import {useEffect, useState} from "react"
import QuoteButton from "./QuoteButton"

const QuoteBox=(props)=>{
    const [quote,setQuote]=useState("Loading...")
    const [author,setAuthor]=useState("")

    useEffect(()=>{
        const fetchQuote=async()=>{
        const response=await fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
        if (!response.ok){
            console.log("Error in fetching quote")
        }
            const data=await response.json()
            setQuote(data["quotes"][0]["text"])
            setAuthor(data["quotes"][0]["author"])
            console.log("Fetch")
        }

        fetchQuote();
    },[])


    return <div className={classes["quote-box"]}>
        <h2>{quote}</h2>
        <p><em>-{author}</em></p>
        <QuoteButton/>
    </div>
}

export default QuoteBox;
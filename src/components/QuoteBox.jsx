import classes from "./QuoteBox.module.css"
import {useEffect, useState} from "react"
import QuoteButton from "./QuoteButton"

const QuoteBox=(props)=>{
    const [quote,setQuote]=useState("Loading...")
    const [author,setAuthor]=useState("")

    useEffect(()=>{
        const fetchQuote=async()=>{
            fetch("https://type.fit/api/quotes")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);
                const newQuoteIndex=Math.floor(Math.random()*data.length)
                setQuote(data[newQuoteIndex]["text"])
                setAuthor(data[newQuoteIndex]["author"])
            });
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
import {useState} from "react"

const useHttp=()=>{
    const [quote,setQuote]=useState("Loading...")
    const [author,setAuthor]=useState("")

    const fetchQuote=async()=>{
        const response=await fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
        if (!response.ok){
            console.log("Error in fetching quote")
        }
        const data=await response.json()
        setQuote(data["quotes"][0]["text"])
        setAuthor(data["quotes"][0]["author"])
    }

    fetchQuote();

    return {quote,author};
}

export default useHttp;
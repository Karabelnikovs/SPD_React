import { useState, useEffect } from "react";
import Quote from "./Quote";
function QuoteList(props) {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://dummyjson.com/quotes");
      const data = await response.json();
      setQuote(data.quotes);
      console.log(data);
      setLoading(false);
    }
    getData();
  }, []);
  const quotes = quote.map((quote, index) => {
    return (
      <>
        {loading == true ? (
          <p>loading...</p>
        ) : (
          <Quote key={index} quote={quote.quote} author={quote.author} />
        )}
      </>
    );
  });
  return (
    <>
      <h1>Quotes</h1>
      {quotes}
    </>
  );
}
export default QuoteList;

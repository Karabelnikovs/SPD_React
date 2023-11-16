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
  const quotes = quote.map((quoteData, index) => {
    return (
      <>
        <Quote
          key={index}
          quote={quoteData.quote}
          author={quoteData.author}
        />
      </>
    );
  });
  return (
    <>
      {loading == true ? (
        <p>loading...</p>
      ) : (
        <>
          <h1>Quotes</h1>
          {quotes}
        </>
      )}
    </>
  );
}
export default QuoteList;

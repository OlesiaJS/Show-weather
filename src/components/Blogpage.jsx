import "../components/style.css";
import useQuote from "../hooks/useCreatequote";

function Blogpage() {
    const {isLoading, error, quote, author} = useQuote()
     console.log('quote:', quote); 

      return (
        <section className="weather-search quote">
                <div className="news-info text-20"> {isLoading && <p>Loading...</p>}
                    {error && <p>Oops, no data</p>}<p>{quote}</p><p className="text-12-grey create-sign text-20"> {author}</p></div>
            
        </section>
    );
}
export {Blogpage};
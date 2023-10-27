import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


function News({ category }) {
    const [loading, setLoading] = useState(true);

    const [news, setNews] = useState({});   
    useEffect(() => {
        setLoading(true);
        getNews();
    }, [category]);

    async function getNews() {
        const data = await fetch(`https://newsapi.org/v2/top-headlines?country=IN&category=${category}&apiKey=318ac79a1f104a85b6975ee739bc3abc`);
        const json = await data.json();
        setNews(json);
        console.log(json);
        setLoading(false);
    }

    const capital=(string)=>{
        return string.charAt(0).toUpperCase()+string.slice(1);
      }

    return (
        <>
        <h2 className="text-center m-4">Top <span className="text-warning">{capital(category)}</span> Headlines</h2>

        { loading ? (<Shimmer />) : (
            <div className="d-flex flex-wrap justify-content-evenly">
                {
                    news?.articles?.map(i =>
                        <div className="col-md-3 col-sm-4 card my-3 mx-3 mx-sm-1" key={i.url}>
                            <img src={!i.urlToImage ? "https://cdn.ndtv.com/common/images/ogndtv.png" : i.urlToImage} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{i.title ? i.title.slice(0, 70) : ""}...</h5>
                                <p className="card-text">{i.description ? i.description.slice(0, 100) : ""}...</p>
                                <p className='card-text'><small className='text-muted'>By {!i.author ? "unknown" : i.author} on {new Date(i.publishedAt).toGMTString()}</small></p>
                            </div>
                            <a href={i.url} target='_blank' className="btn btn-sm btn-dark align-content-end mx-3 my-3">Read More on : {i.source.name}</a>
                        </div>
                    )
                }

            </div>
)}
        </>
    )
}

export default News
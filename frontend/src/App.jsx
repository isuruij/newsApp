import "./styles/index.scss";
import Navbar from "./components/navbar";
import NewsCard from "./components/NewsCard";
import { useEffect } from "react";
import { useState } from "react";
import { getNews } from "../util/api";


function App() {
  const [newsList, setnewsList] = useState([]);
  const [error, seterror] = useState("");
  const [searchText, setsearchText] = useState("");
  const [keyword, setkeyword] = useState("development");

  

  useEffect(() => {
    async function getData() {
      const res = await getNews(keyword);

      if (res.error) {
        seterror(res.data);
      } else {
        setnewsList(res.data);
      }  
    }
    getData();
  }, [keyword]);

  return (
    <div>
      <Navbar></Navbar>
      
      <div className="m-4">
      <label for="validationTooltip01" className="form-label">
        Search News
      </label>
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        onChange={(e) => {
          setsearchText(e.target.value);
          
        }}
      ></input>
      <button className="btn btn-primary mt-2" onClick={()=>{setkeyword(searchText)}}>Search</button>
    </div>

      {error && <div className="alert alert-danger">{error}</div>}


      <div>
        {newsList &&
          newsList.map((element) => {
            return <NewsCard
              NewsTitle={element.title}
              NewsDiscription={element.description}
              urlToImage={element.urlToImage}
              url = {element.url}
            ></NewsCard>;
          })}
      </div>

    </div>
  );
}

export default App;

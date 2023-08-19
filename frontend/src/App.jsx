import "./styles/index.scss";
import Navbar from "./components/navbar";
import NewsCard from "./components/NewsCard";
import { useEffect } from "react";
import { useState } from "react";
import { getNews } from "../util/api";
import Loader from "./components/Loader";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 




function App() {
  const [newsList, setnewsList] = useState([]);
  const [error, seterror] = useState("");
  const [searchText, setsearchText] = useState("");
  const [keyword, setkeyword] = useState("development");
  const [isLoading, setisLoading] = useState(false)



  useEffect(() => {
    async function getData() {
      setisLoading(true)
      const res = await getNews(keyword);
      setisLoading(false)

      if (res.error) {
        seterror(res.data);
      } else {
        setnewsList(res.data);
      }
    }
    getData();
  }, [keyword]);

  return (
    <div class="back">
      <Navbar ></Navbar>
      {isLoading && <Loader ></Loader>}
      <br>
      </br>
      <br></br>
      <div className="m-4" style={{display:"flex",flexDirection:"row"}}>
        <label for="validationTooltip01" className="form-label">
          Search News
        </label>
        <input style={{width:"70%"}}
          type="text"
          className="form-control"
          placeholder="Search..."
          onChange={(e) => {
            setsearchText(e.target.value);

          }}
        ></input>
        <button style={{display:"flex", marginLeft:"1%"}} className="btn btn-primary" onClick={() => { setkeyword(searchText) }}>Search</button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}


      <div className="div-center">
        {newsList &&
          newsList.map((element) => {
            return <NewsCard
              NewsTitle={element.title}
              NewsDiscription={element.description}
              urlToImage={element.urlToImage}
              url={element.url}
            ></NewsCard>;
          })}
      </div>

    </div>
  );
}

export default App;

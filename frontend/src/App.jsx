import "./styles/index.scss";
import Navbar from "./components/navbar";
import NewsCard from "./components/NewsCard";
import { useEffect } from "react";
import { useState } from "react";
import { getNews } from "../util/api";

function App() {
  const [newsList, setnewsList] = useState([]);
  const [error, seterror] = useState("");
  

  useEffect(() => {
    async function getData() {
      const res = await getNews();

      if (res.error) {
        seterror(res.error);
      } else {
        setnewsList(res.data);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      

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

import "./styles/index.scss";
import NewsCard from "./components/NewsCard";
import { useEffect } from "react";
import { useState } from "react";
import { getNews } from "../util/api";
import Loader from "./components/Loader";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [newsList, setnewsList] = useState([]);
  const [error, seterror] = useState("");
  const [searchText, setsearchText] = useState("");
  const [keyword, setkeyword] = useState("development");
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setisLoading(true);
      const res = await getNews(keyword);
      setisLoading(false);

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
      {/* start nav bar code */}
      <div style={{ position: "fixed", width: "100%", top: "0", zIndex: "10" }}>
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark ">
          <div className="container-fluid">
            <a className="navbar-brand" href="http://localhost:5173/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-newspaper"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
              </svg>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="#"
                    onClick={() => {
                      setkeyword("Metaverse");
                    }}
                  >
                    Metaverse
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => {
                      setkeyword("Crypto");
                    }}
                  >
                    Crypto
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => {
                      setkeyword("Ai");
                    }}
                  >
                    Ai
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link "
                    href="#"
                    onClick={() => {
                      setkeyword("UFO");
                    }}
                  >
                    UFO
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => {
                      setkeyword("Health");
                    }}
                  >
                    Health
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => {
                      setkeyword("Travel");
                    }}
                  >
                    Travel
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => {
                      setkeyword("Space");
                    }}
                  >
                    Space
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => {
                      setkeyword("Economy");
                    }}
                  >
                    Economy
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => {
                      setkeyword("Gaming");
                    }}
                  >
                    Gaming
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => {
                      setkeyword("Sports");
                    }}
                  >
                    Sports
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => {
                      setkeyword("Blockchain");
                    }}
                  >
                    Blockchain
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => {
                      setkeyword("fashion");
                    }}
                  >
                    fashion
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => {
                      setkeyword("Travel");
                    }}
                  >
                    Automation
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => {
                      setkeyword("biotechnology");
                    }}
                  >
                    Biotechnology
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* end the navbar code */}

      {isLoading && <Loader></Loader>}
      <br></br>
      <br></br>
      <div className="m-4" style={{ display: "flex", flexDirection: "row" }}>
        <label for="validationTooltip01" className="form-label">
          Search News
        </label>
        <input
          style={{
            width: "50%",
            position: "fixed",
            marginLeft: "20%",
            zIndex: "3",
          }}
          type="text"
          className="form-control"
          placeholder="Search..."
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        ></input>
        <button
          style={{
            display: "flex",
            marginLeft: "71%",
            position: "fixed",
            zIndex: "1",
          }}
          className="btn btn-primary"
          onClick={() => {
            setkeyword(searchText);
          }}
        >
          Search
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="div-center">
        {newsList &&
          newsList.map((element) => {
            return (
              <NewsCard
                NewsTitle={element.title}
                NewsDiscription={element.description}
                urlToImage={element.urlToImage}
                url={element.url}
              ></NewsCard>
            );
          })}
      </div>
    </div>
  );
}

export default App;

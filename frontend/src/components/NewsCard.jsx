import React from "react";

function NewsCard({NewsTitle,NewsDiscription,urlToImage,url}) {
  return (
    <div>
      <div className="card m-5">
        <img src={urlToImage} className="card-img-top" alt={NewsTitle} />
        <div className="card-body">
          <h5 className="card-title">{NewsTitle}</h5>
          <p className="card-text">
            {NewsDiscription}
          </p>
          <a href={url} className="btn btn-primary">
            See News
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;

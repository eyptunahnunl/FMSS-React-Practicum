import React from "react";

function Card({ img, title, authors,link,alt}) {
  return (
    <div>
      <div className="card">
        <img src={img} alt="" className="sm:w-full rounded-md"/>
        <div className="info">
          <h1>{title}</h1>
          <p>
            Authors: 
            <br />
            <i>{authors}</i>
          </p>
          <button><a href={link}>Read More</a></button>
        </div>
      </div>
    </div>
  );
}

export default Card;

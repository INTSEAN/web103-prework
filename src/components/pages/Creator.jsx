import React from "react";
import { Link } from "react-router-dom";

function Creator({ creators }) {
  return (
    <>
      <div className="creator-container">
        {creators.map((creator, id) => (
          <div className="creators creator-card" key={id}>
            <img src={creator.imageURL} alt={creator.name} />
            <p>{creator.name}</p>
            <a target="blank" href={creator.url}>
              {" "}
              Social Media{" "}
            </a>
            <p>{creator.description}</p>
            <Link key={creator.id} to={`/edit/${creator.id}`}>
              <button> Edit Creator {creator.id} </button>
            </Link>
            <Link key={creator.id} to={`/view/${creator.id}`}>
              <button>View Creator {creator.id} </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Creator;

import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../../config/client";
import { Link } from "react-router-dom";
import Creator from "./Creator";

function ShowCreators() {
  const [creators, setCreators] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase.from("Creators").select();

      if (error) {
        setFetchError("Error fetching data!");
        console.log(error);
        setCreators(null);
      }
      if (data) {
        setCreators(data);
        setFetchError(null);
      }
    };
    fetchCreators();
  }, []);

  return (
    <>
      <div className="container">
        {fetchError && <p> {fetchError}</p>}
        <h1>Creators</h1>
        <div className="button-group">
          <Link to={`/add`}>
            <button> Add a Creator</button>
          </Link>
          <Link to={`/`}>
            <button> View All </button>
          </Link>
        </div>
        {creators && (
          <div className="creators">
            <Creator creators={creators} />
          </div>
        )}
      </div>
    </>
  );
}

export default ShowCreators;

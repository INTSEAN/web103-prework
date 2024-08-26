import { React, useEffect, useState } from "react";
import { supabase } from "../../config/client";
import { useParams, Link } from "react-router-dom";

function ViewCreator(props) {
  const [creator, setCreator] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    const fetchCreator = async () => {
      try {
        const { data, error } = await supabase
          .from("Creators")
          .select()
          .eq("id", params.profileId)
          .single();

        if (error) {
          setFetchError("Error fetching data!");
          console.log(error);
          setCreator(null);
        }

        if (data) {
          setCreator(data);
          setFetchError(null);
        }
      } catch (error) {
        setFetchError("Error fetching data!");
        console.log(error);
        setCreator(null);
      }
    };

    fetchCreator();
  }, [params.profileId]);

  return (
    <div>
      {!creator ? (
        <p> Loading... {params.profileId} </p>
      ) : (
        <div className="creators">
          <img src={creator.imageURL} alt={creator.name} />
          <p>{creator.name}</p>
          <a target="_blank" rel="noopener noreferrer" href={creator.url}>
            Social
          </a>
          <p>{creator.description}</p>
          <Link to={`/edit/${creator.id}`}>
            <button> Edit Creator </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default ViewCreator;

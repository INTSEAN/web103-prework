import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../../config/client";
import { useParams, Link } from "react-router-dom";

function EditCreator() {
  const [creator, setCreator] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const params = useParams();
  const [formData, setFormDetails] = useState({
    name: "",
    url: "",
    descrption: "",
    imageURL: "",
  });
  function onFormUpdate(category, value) {
    setFormDetails({
      ...formData,
      [category]: value,
    });
  }
  async function handleSubmission(e) {
    e.preventDefault();

    const { name, url, description, imageURL } = formData;

    const { data, error } = await supabase
      .from("Creators")
      .update({
        name: name,
        url: url,
        description: description,
        imageURL: imageURL,
      })
      .eq("id", params.id);

    if (error) {
      setError(error.message);
    } else {
      console.log("Creator updated successfully:", data);
    }
  }

  async function handleDelete(e) {
    const { data, error } = await supabase
      .from("Creators")
      .delete()
      .eq("id", params.id);

    if (error) {
      setFetchError(error.message);
      console.log(error);
    } else {
      console.log("Creator deleted successfully:", data);
    }
  }

  return (
    <>
      <div className="edit-container">
        <Link to={`/`}>
          {" "}
          <p className="dash"> DashBoard</p>{" "}
        </Link>
        <form onChange={handleSubmission} className="form-class">
          <p>Edit your creator</p>
          {fetchError && <p style={{ color: "red" }}>{fetchError}</p>}
          <label htmlFor="name">Full Name</label>
          <input
            required
            onChange={(e) => onFormUpdate("name", e.target.value)}
            type="text"
            name="name"
            value={formData.name}
          />
          <label htmlFor="url">Creator URL</label>
          <input
            required
            onChange={(e) => onFormUpdate("url", e.target.value)}
            type="url" // Corrected input type to "url"
            name="url"
            value={formData.url}
          />
          <label htmlFor="description">Description</label>
          <input
            required
            onChange={(e) => onFormUpdate("description", e.target.value)}
            type="text"
            name="description"
            value={formData.description}
          />
          <label htmlFor="imageURL">Image URL</label>
          <input
            required
            onChange={(e) => onFormUpdate("imageURL", e.target.value)}
            type="text"
            name="imageURL"
          />
          <button type="submit">Submit</button>
        </form>
        <div className="delete-button-container">
          <Link key={params.id} to={`/`}>
            <button
              style={{ backgroundColor: "red" }}
              onClick={handleDelete}
              type="button"
            >
              Delete
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default EditCreator;

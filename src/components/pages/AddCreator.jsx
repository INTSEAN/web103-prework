import { React, useState } from "react";
import { supabase } from "../../config/client";
import { Link } from "react-router-dom";

function AddCreator() {
  const [error, setError] = useState(null);
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

  async function handleAdd(e) {
    e.preventDefault(); // Prevents the default form submission behavior

    const { name, url, description, imageURL } = formData;

    const { data, error } = await supabase.from("Creators").insert({
      name: name,
      url: url,
      description: description,
      imageURL: imageURL,
    });

    if (error) {
      setError(error.message);
    } else {
      console.log("Creator added successfully:", data);
      // Optionally, you can reset the form or navigate to another page
    }
  }

  return (
    <>
      <div className="add-container">
        <Link to={`/`}>
          {" "}
          <p className="dash"> DashBoard</p>{" "}
        </Link>
        <form onSubmit={handleAdd} className="form-class">
          {error && <p style={{ color: "red" }}>{error}</p>}
          <p>Add a creator</p>
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
      </div>
    </>
  );
}

export default AddCreator;

import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import EditCreator from "../src/components/pages/EditCreator";
import AddCreator from "../src/components/pages/AddCreator";
import ShowCreators from "../src/components/pages/ShowCreators";
import ViewCreator from "../src/components/pages/ViewCreator";
import { supabase } from "./config/client";

import "./App.css";

function App() {
  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("creatorverse")
        .select("name, url, description, imageURL");
      if (error) {
        console.error("Error fetching data", error);
      } else {
        <ShowCreators creators={data} />;
      }
    }

    fetchData();
  }, []);

  return routes;
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <ShowCreators />
        </Route>
        <Route path="/view" exact>
          <ViewCreator
            name={name}
            url={url}
            description={description}
            imageURL={imageURL}
          />
        </Route>

        <Route path="/edit" exact>
          <EditCreator />
        </Route>

        <Route path="/add" exact>
          <AddCreator />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";
import { directors, movies } from "../data";

function Directors() {
  const list =  directors.map((director) => 
  <div key={director.name}>
    <h3>Name: {director.name}</h3>
    <h3>Movies:</h3>
      <ul>
        {director.movies.map((movie) => <li key={movie}>{movie}</li>)}
      </ul>
  </div>)
return <div>
  <h1>Directors Page</h1>
  {list}
</div>;
}

export default Directors;

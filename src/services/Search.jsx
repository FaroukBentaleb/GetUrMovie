import { useState } from "react";

export function SearchFunct(props){
    const searchedMovies = props.movies.filter(item =>
    item.original_title.toLowerCase().includes(props.search_term.toLowerCase())
  );
    return searchedMovies;
}
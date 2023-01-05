import React, { useEffect,useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useParams, useNavigate} from "react-router-dom";

function AddTrailer({filtredMovies}) {
  const navigate = useNavigate()
  const handlehome = ()=>{
    navigate("/")
  }
  let {id} = useParams();
  
  const[selected, setSelected]= useState({});
console.log(selected)
 useEffect(() => {
  let S = filtredMovies.filter((movie)=> movie.id ===id);
  setSelected (S[0]);

 },[filtredMovies]);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={selected.trailer}
        title={selected.Title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h3>{selected.description}</h3>
      <Button variant="dark" onClick={handlehome}>
        <Link to="/">GO BACK HOME</Link>
      </Button>
    </div>
  );
};

export default AddTrailer
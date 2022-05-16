import axios from "axios";
import React, { useEffect, useState } from "react";
import ResidentInfo from "./ResidentInfo";

const Location = () => {

  const [location, setLocation] = useState({});

  const [id, setId] = useState("");

  useEffect(() => {
    // del 1 al 126
    const random = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${random}/`)
      .then((res) => setLocation(res.data));
  }, []);

  console.log(location);

  const searchId = () => {
      axios
      .get(`https://rickandmortyapi.com/api/location/${id}/`)
      .then((res) => setLocation(res.data));
  }


  return (
    <div className="content">
          <img src="http://assets.stickpng.com/images/58f37720a4fa116215a9240f.png" width="300px" alt="" />
      <div className="title">
        <div className="titleimg">
        </div>
      </div>
  
      <div className="intro">
      <h4>Location: <br /> <p className="a">{location.name}</p></h4>
      <h4>TYPE: <br /><p href="" className="a">{location.type}</p></h4>
      <h4>Location: <br /><p href="" className="a">{location.dimension}</p></h4>
      <h4># Residents: <br /><p href="" className="a">{location.residents?.length}</p></h4>
      </div>
      <div>
        <br />
          <input placeholder="type a location id" type="text" onChange={(e) => setId(e.target.value)} value={id}/>
          <button className="button" onClick={searchId}>Id. Search</button>
          
          
<br />
<br />
          <ul className="location">
          {location.residents?.map((urls) => (
          <ResidentInfo url={urls} key={urls} />
          ))}
        </ul>
          
      </div>
    </div>
  );
};

export default Location;
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Pirates = () => {
  const baseUrl = 'http://localhost:8000/api/Pirates';
  const [ Pirate, setPirates] = useState([]);
  useEffect(() => {
    axios.get(baseUrl)
      .then(res => setPirates(res.data))
      .catch(err => console.log(err));
  });

  return (
    <fieldset>
      <legend>Pirates</legend>
      <Outlet context={{ Pirate, setPirates, baseUrl }} />
    </fieldset>
  )
}

export default Pirates;
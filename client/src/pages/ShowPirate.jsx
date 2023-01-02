import { useOutletContext, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PirateForm from '../components/PirateForm';

const ShowPirate = () => {
  const { id } = useParams();
  const { baseUrl } = useOutletContext();
  const [Pirate, setPirate] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseUrl}/${id}`)
      .then((res) => setPirate(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="card">
      <h5 className="card-header">Pirate Details</h5>
      {Pirate && (
        <div className="card-body">
          <h5 className="card-title">Title: {Pirate.name}</h5>
          <p>Peg Leg:{(Pirate.pegLeg) ? "yes" : "no" }</p>
          <p>Eye Patch:{(Pirate.eyePatch) ? "yes" : "no" }</p>
          <p>Hook Hand: {(Pirate.hookHand) ? "yes" : "no" }</p>
          <h6>Position: {Pirate.position}</h6>
          <p>Description: {Pirate.description}</p>
          <img
            src={Pirate.image}
            style={{ width: "100px", height: "100px" }} />
        </div>
      )}
    </div>
  );
};

export default ShowPirate;
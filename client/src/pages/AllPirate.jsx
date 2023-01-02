import { Link, useOutletContext } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';


const AllPirate = () => {
  const { baseUrl, Pirates } = useOutletContext();
  const {error, setError} = useState([])
  const { Pirate } = useOutletContext();

  const deletePirate = (id) => {
    axios.delete(`${baseUrl}/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  };

  return (
    <table className="table table-striped table-hover table-bordered">
      <thead>
        <tr>
          <th>Pirates</th>
          <th>Position</th>
          <th className='text-end'>Descritption</th>
        </tr>
      </thead>
      <tbody>
        {Pirate &&
          Pirate.map((Pirate) => {
            return (
              <tr key={Pirate._id}>
                <td><Link to={`/Pirates/${Pirate._id}`}>{Pirate.name}</Link></td>
                <td>{Pirate.position}</td>
                <td className='text-end'>
                  <Link
                    to={`/Pirates/${Pirate._id}/edit`}
                    className="btn btn-warning btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button onClick={() => deletePirate(Pirate._id)} className="btn btn-danger btn-sm" >Delete</button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default AllPirate;
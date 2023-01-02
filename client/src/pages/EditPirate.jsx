import { useEffect, useState } from 'react';
import axios from 'axios';
import { useOutletContext, useNavigate, useParams } from 'react-router-dom';
import PirateForm from '../components/PirateForm';


const EditPirate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { baseUrl } = useOutletContext();
  const [Pirate, setPirate] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseUrl}/${id}`)
      .then((res) => {
        setPirate(res.data);
        console.log(res.data)
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, [id, baseUrl]);

  const updatePirate = (e, Pirate) => {
    e.preventDefault();
    axios
      .put(`${baseUrl}/${id}`, Pirate)
      .then(() => navigate('/Pirates'))
      .catch((err) => console.log(err));
  };

  return (
    
    Pirate && <PirateForm formText={'Edit Pirate'} submitHandler={updatePirate} initialPirate={Pirate} errors={[]} errorObject={{}}/>
  );
};

export default EditPirate;
import { useState } from 'react';
import axios from 'axios';
import { useOutletContext, useNavigate } from 'react-router-dom';
import PirateForm from '../components/PirateForm';

const NewPirate = () => {
  const navigate = useNavigate();
  const { baseUrl } = useOutletContext();
  const [errors, setErrors] = useState([]);
  const [errorObject, setErrorObject] = useState({})

  const initialPirate = {
    name: '',
    position: '',
    description: '',
    treasure:  '',
  };

  const insertPirate = (e, Pirate) => {
    e.preventDefault();
    axios
      .post(baseUrl, Pirate)
      .then(() => {
        setErrors([]);
        navigate('/Pirates');
      })
      .catch((err) => {
        console.log(err);
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        const errorObj = {}
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        for (const key in errorResponse) {
          errorObj[key] = errorResponse[key].message
        }
        setErrorObject(errorObj);
        setErrors(errorArr);
      });
  };

  return (
    <PirateForm
      formText={'Add Pirate'}
      submitHandler={insertPirate}
      initialPirate={initialPirate}
      errors={errors}
      errorObject={errorObject}
    />
  );
};

export default NewPirate;
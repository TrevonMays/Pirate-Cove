import { useState } from 'react';

const PirateForm = (props) => {
  const { submitHandler, initialPirate, formText, errors, errorObject } = props;
  const [formState, setFormState] = useState(initialPirate);
  const [isChecked, setIsChecked] = useState(false);
  const [isDiscovered, setIsDiscovered] = useState(false);
  const [isRight, setIsRight] = useState(false);
  const {imgUrl, setImgUrl} = useState("")
  

  const options = [ {
    label: "Captain",
    value: "Captain",
  },
  {
    label: "First Mate",
    value: "First Mate",
  },
  {
    label: "Quarter Master",
    value: "Quarter Master",
  },
  {
    label: "Boatswain",
    value: "Boatswain",
  },
  {
    label: "Powder Monkey",
    value: "Powder Monkey",
  },
  ]

  const handleOnPegLeg = () => {
    setIsChecked(!isChecked);
  };

  const handleOnEye = () => {
    setIsDiscovered(!isDiscovered);
  };

  const handleOnHook = () => {
    setIsRight(!isRight);
  };


  const differentHandler = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };


  const changeHandler = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const checkChangeHandler = (e) => {
    console.log(e.target.checked)
    setFormState({
      ...formState,
      [e.target.name]: e.target.checked
    });
  };


  const moneyHandler =(e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const imageHandler =(e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {errors &&
        errors.map((error, idx) => {
          return <p key={idx}>{error}</p>;
        })}

      <div className="card">
        <h5 className="card-header">{formText}</h5>
        <div className="card-body">
          <form onSubmit={(e) => submitHandler(e, formState)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control form-control-sm"
                value={formState.name}
                onChange={changeHandler}
              />
              {errorObject.name ? (
                <span className="form-text text-danger">
                  {errorObject.name}
                </span>
              ) : (
                ''
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="position" className="form-label">
                Position:
              </label>
              <select name='position' onChange={differentHandler} value={formState.position} >
                {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
              {errorObject.position ? (
                <span className="form-text text-danger">
                  {errorObject.position}
                </span>
              ) : (
                ''
              )}
            </div>

            <div className="div">
                Pirate Items
                <div className="items">
                  Peg Leg
                  <input 
                  type="checkbox" 
                  id='items'
                  name='pegLeg'
                  onChange={checkChangeHandler}/>
                </div> 


                <div className="items">
                  Eye Patch
                  <input 
                  type="checkbox" 
                  id='items'
                  name='eyePatch'
                  onChange={checkChangeHandler}/>
                </div> 


                <div className="items">
                  Hook Hand
                  <input 
                  type="checkbox" 
                  id='items'
                  name='hookHand'
                  onChange={checkChangeHandler}/>
                </div> 
            </div>


            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Pirate Catch Phrase:
              </label>
              <textarea
                className="form-control form-control-sm"
                name="description"
                id="description"
                value={formState.description}
                onChange={changeHandler}
              ></textarea>
              {errorObject.description ? (
                <span className="form-text text-danger">
                  {errorObject.description}
                </span>
              ) : (
                ''
              )}
            </div>

                <div className="mb-3">
                  <label htmlFor="treasure" className='form-control form-control-sm' >
                    # of Treasure Chest
                  </label>
                  <input 
                  name='treasure'
                  type="number" 
                  id='treasure'
                  onChange={moneyHandler}
                  />
                </div>
              <div className="div">

                <label htmlFor="imgUrl">
                </label>
                image Url:
                <input 
                type="text"
                name="image"
                value={setImgUrl}
                onChange={imageHandler}
                />


              </div>

            <div className="d-flex justify-content-end">
              <button className="btn btn-primary btn-sm">{formText}</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PirateForm;
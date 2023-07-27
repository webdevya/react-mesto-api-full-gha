import React from "react";


//Use for using standard html validation. Set refs for totaly check validity for every using input, even if they not in form
export default function useValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: e.target.validationMessage });
    setIsValid(e.target.closest('form').checkValidity());
    //validate();
  }



  const reset = React.useCallback((defaultValues = {}) => {
    setValues(defaultValues);
    setErrors({});
    setIsValid(false);
  }, [setValues, setErrors, setIsValid]);

  // function reset(defaultValues) {
  //   if (defaultValues)
  //     setValues(defaultValues);
  //   else
  //     setValues({});

  //   setErrors({});
  //   setIsValid(false);
  // }

  // function validate() {
  //   const res = refs.some(ref => !ref.current || !ref.current.checkValidity());
  //   setIsValid(!res);
  // }

  return { values, errors, handleChange, reset, isValid };
}

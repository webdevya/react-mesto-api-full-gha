import React from "react";
import useValidation from './useValidation'

//use this hook to subscribe validation when use only refs and avoid onChange at html
export default function useValidationRefSubscription(refs) {

  const validation = useValidation(refs);

  React.useEffect(() => {

    refs.forEach(ref => {
      const input = ref.current;
      if (input)
        input.addEventListener('input', validation.handleChange);

    });


    return function () {
      refs.forEach(ref => {
        const input = ref.current;
        if (input)
          input.removeEventListener('input', validation.handleChange);

      });
    }
  }, []);


  function reset(defaultValues) {

    for (const [key, value] of Object.entries(defaultValues)) {
      const ref = refs.find(r => r.current.name === key);
      if (ref) {
        ref.current.value = value;
      }
    }

    validation.reset(defaultValues);
  }


  return { values: validation.values, errors: validation.errors, reset, isValid: validation.isValid };
}

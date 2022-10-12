import { useState } from "react";

export const useForm = (initialForm = {}) => {
  /*  const [formState, setFormState] = useState({
    username: "mondongo",
    email: "cachoperro@gmail.com",
    password: "contraseña",
  }); */
  const [formState, setFormState] = useState(initialForm);

  //const { username, email, password } = formState;

  const onInputChange = ({ target: { value, name } }) => {
    // (event)=>{ event.target.value......}
    //setFormState(value);
    //console.log({ name, value });
    setFormState({
      ...formState,
      [name]: value,
    });
    /*   setFormState((formState) => ({ //tengo que probar esto a ver si pasan los tests del act con varios set
      ...formState,
      [name]: value,
    })); */
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return { ...formState, formState, onInputChange, onResetForm };
};

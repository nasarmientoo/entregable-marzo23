import { useState } from "react";
import { Card } from "./Card";

export const App = () => {
  const [formValues, setFormValues] = useState({name: '', color: ''});
  const [errors, setErros] = useState({name: '', color: ''});
  const [isValid, setIsValid] = useState(false);

  const onInputNameChange = e => {
    const input = e.target.value;
    if (input.trim().length < 3){
      setErros({name: 'La longitud mínima del texto es de 3 caracteres'});
      return;
    }
    setErros({name: ''});
    setFormValues({...formValues, name: input});
  }
  const onInputColorChange = e => {
    const input = e.target.value;
    if (input.trim().length < 6){
      setErros({color: 'La longitud mínima del texto es de 6 caracteres'});
      return;
    }
    setErros({color: ''});
    setFormValues({...formValues, color: input});
  }
  const onFormSubmit = (e, values) => {
    e.preventDefault();
    if(formValues.name && formValues.color){setIsValid(true)};
  }
  return (
    <div className="App">
      <h1>Elige un color</h1>
      <form onSubmit={e => onFormSubmit(e, formValues)}>
        <input placeholder="Ingresa tu nombre" type="text" name="name" id="name" className="border-2" onChange={onInputNameChange}/>
        <input placeholder="Ingresa tu color favorito en formato HEX" type="text" name="color" id="color" className="border-2" onChange={onInputColorChange}/>
        {errors.name?.length > 0 && <span>{errors.name}</span>}
        {errors.color?.length > 0 && <span>{errors.color}</span>}
        <button type="submit" className="border-2">ENVIAR</button>
      </form>
      {isValid && (<Card name={formValues.name} color={formValues.color}/>)}
    </div>
  );
}



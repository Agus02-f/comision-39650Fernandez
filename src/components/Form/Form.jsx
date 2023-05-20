import React, { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const envioDeFormulario = (evento) => {
    evento.preventDefault();
  };

  return (
    <div>
      <h1>Estamos en el formulario</h1>

      <form onSubmit={envioDeFormulario}>
        <input
          type="text"
          placeholder="ingresa tu nombre"
          name="nombre"
          value={userData.nombre}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="ingresa tu apellido"
          name="apellido"
          value={userData.apellido}
          onChange={handleChange}
        />
      </form>

      <button type="submit">Enviar</button>
    </div>
  );
};

export default Form;

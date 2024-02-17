import React, { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);

  return (
    <>
      <Perfil
        nome="Carlos"
        avatar="https://akns-images.eonline.com/eol_images/Entire_Site/2019414/rs_600x600-190514063109-600-George-Clooney-Batman-LT-051419-GettyImages-607408286.jpg?fit=around%7C600:600&output-quality=90&crop=600:600;center,top"
      />

      {formularioEstaVisivel && <Formulario />}

      <button
        onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)}
        type="button"
      >
        Toggle Form
      </button>
    </>
  );
}

export default App;

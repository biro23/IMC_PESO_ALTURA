import { useEffect, useState } from "react";

const Formulario = () => {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  const calcularIMC = () => {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
  };

  return (
    <form>
      <label>
        Peso (kg):
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(parseFloat(e.target.value))}
        />
      </label>
      <br />
      <label>
        Altura (m):
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(parseFloat(e.target.value))}
        />
      </label>
      <br />
      <button type="button" onClick={calcularIMC}>
        Calcular IMC
      </button>
      {peso > 0 && altura > 0 && (
        <p>O seu IMC é: {calcularIMC()}</p>
      )}
    </form>
  );
};

export default Formulario;

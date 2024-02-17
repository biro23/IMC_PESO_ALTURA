import "./Perfil.css";

// criando um objeto literal, aonde tem o aron function, vamos receber um argumento, é a propos
const Perfil = ({ endereco, nome }) => {
  return (
    <div>
      {/* com o JSON.stringify, conseguimos converter um objeto em uma stringer */}
      <img className="perfil-avatar" src={endereco} />
      <h3 className="perfil-titulo">{nome}</h3>
    </div>
  );
};

export default Perfil;

import "./index.css";
import TextLabel from "../TextLabel";

const Forms = () => {
  return (
    <section className="forms">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextLabel placeholder="Digite seu nome" title="Nome" />
        <TextLabel placeholder="Digite seu cargo" title="Cargo" />
        <TextLabel placeholder="Digite o endereço da imagem" title="Imagem" />
      </form>
    </section>
  );
};

export default Forms;
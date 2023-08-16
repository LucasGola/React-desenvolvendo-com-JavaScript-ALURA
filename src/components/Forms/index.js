import "./index.css";
import TextLabel from "../TextLabel";
import DropdownList from "../DropdownList";
import SubmitButton from "../SubmitButton";
import { useState } from "react";

const Forms = () => {
  const [name, setName] = useState("");
  const [office, setOffice] = useState("");
  const [image, setImage] = useState("");
  const [squad, setSquad] = useState("")

  const squads = [
    "Development",
    "Management",
    "Administration",
    "Financial"
  ];
  const onSave = (event) => {
    event.preventDefault();
  };

  return (
    <section className="forms">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextLabel saveChanges={value => setName(value)} value={name} required placeholder="Digite seu nome" title="Nome" />
        <TextLabel saveChanges={value => setOffice(value)} value={office} required placeholder="Digite seu cargo" title="Cargo" />
        <TextLabel saveChanges={value => setImage(value)} value={image} placeholder="Digite o endereço da imagem" title="Imagem" />
        <DropdownList saveChanges={value => setSquad(value)} required label="Times" items={squads} />
        <SubmitButton>
          Criar card
        </SubmitButton>
      </form>
    </section>
  );
};

export default Forms;
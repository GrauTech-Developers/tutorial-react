import { namesList } from "../../data/names";
import NameCard from "./NameCard";

export default () => {
  return (
    <section>
      <ul>
        {namesList.map((nome) => (
          <NameCard key={nome.id} nome={nome} />
        ))}
      </ul>
    </section>
  );
};

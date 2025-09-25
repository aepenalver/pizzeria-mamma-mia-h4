import { useState } from "react";
import { pizzas } from "../utils/pizzas";
import CardPizza from "./CardPizza";
import Header from "./Header";

const Home = () => {
  const [newPizzas, setNewPizzas] = useState(pizzas);
  return (
    <>
      <Header />
      <section className="d-flex gap-5 p-4 justify-content-evenly">
        {newPizzas.map((pizza) => (
          <CardPizza key={pizza.id} description={pizza.desc} id={pizza.id} img={pizza.img} ingredients={pizza.ingredients} name={pizza.name} price={pizza.price} />
        ))}
      </section>
    </>
  );
};

export default Home;

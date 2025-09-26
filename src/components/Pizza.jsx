import { useEffect, useState } from "react";
import CardPizza from "./CardPizza";

const Pizza = () => {
  const url = `http://localhost:5000/api/pizzas/p001`;
  const [pizza, setPizza] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setPizza(data);
  };

  return (
    <>
      {/* {pizza.id}
  {pizza.desc}
  {pizza.ingredients}
  {pizza.name}
  {pizza.price} */}
      {console.log(pizza)}

      {
        <CardPizza
          key={pizza.id}
          description={pizza.desc}
          id={pizza.id}
          img={pizza.img}
          ingredients={pizza.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient.charAt().toUpperCase() + ingredient.slice(1)}</li>
          ))}
          name={pizza.name}
          price={pizza.price}
        />
      }
    </>
  );
};

export default Pizza;

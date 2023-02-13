import Header from "./Components/Header/Header";
import ShowcaseCard from "./Components/ShowcaseCard/ShowcaseCard";
import { useState } from "react";

import ProductList from "./Components/ProductList/ProductList";
import CartModal from "./Components/CartModal/CartModal";
import { TroubleshootSharp } from "@mui/icons-material";

function App() {
  const initialItems = [
    { id: 0, name: "Potato", desc: "High Carbs", price: 30, amount: 0 },
    { id: 1, name: "Onion", desc: "High Iron", price: 24, amount: 0 },
    { id: 2, name: "Garlic", desc: "High Magnesium", price: 50, amount: 0 },
  ];

  const [items, setItems] = useState(initialItems);

  function addToCart(id, count) {
    setItems((prev) => {
      const newItems = [...prev];
      newItems[id].amount = +count;
      return newItems;
    });
  }

  const [modal, setModal] = useState(false);

  function showModal() {
    setModal(TroubleshootSharp);
  }

  function closeModal() {
    setModal(false);
  }

  return (
    <>
      {modal && (
        <CartModal
          items={items}
          closeModal={closeModal}
          addToCart={addToCart}
        />
      )}
      <Header items={items} showModal={showModal} />
      <ShowcaseCard />
      <ProductList items={items} addToCart={addToCart} />
    </>
  );
}

export default App;

import SearchBar from "./components/SearchBar";
import "./App.css";
import { useState } from "react";

function App() {
  const [foods, setFoods] = useState([]);

  const handleSearch = async (query) => {
    const res = await fetch(
      `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&search_simple=1&action=process&json=1`
    );
    const data = await res.json();
    setFoods(data.products);
  };

  return (
    <div className="container">
      <h1>🍔 FoodFacts</h1>
      <SearchBar onSearch={handleSearch} />

      <div className="food-list">
        {foods.map((item, index) => (
          <div className="card" key={index}>
            <img
              src={
                item.image_front_thumb_url ||
                "https://via.placeholder.com/150"
              }
            />
            <h3>{item.product_name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
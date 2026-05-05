import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";

function HomePage() {
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (query) => {
    const res = await fetch(
      `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&search_simple=1&action=process&json=1`
    );
    const data = await res.json();
    setFoods(data.products || []);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      {foods.map((item, index) => (
        <div
          key={index}
          onClick={() => navigate(`/product/${item.code}`)}
          style={{ cursor: "pointer" }}
        >
          <p>{item.product_name}</p>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import SavedPage from "./pages/SavedPage";
import "./App.css";

function App() {
  return (
    <div>
      <h1>🍔 FoodFacts</h1>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:barcode" element={<DetailPage />} />
        <Route path="/saved" element={<SavedPage />} />
      </Routes>
    </div>
  );
}

export default App;
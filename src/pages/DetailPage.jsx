import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function DetailPage() {
  const { barcode } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
      .then(res => res.json())
      .then(data => setProduct(data.product));
  }, [barcode]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h2>{product.product_name}</h2>
      <img src={product.image_front_url} width="200" />
      <p>Brand: {product.brands}</p>
    </div>
  );
}

export default DetailPage;
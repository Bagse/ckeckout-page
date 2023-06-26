import CardFinalPrice from "./CardFinalPrice";
import Product from "./Product";
import { useState } from "react";

function CardProducts() {
  const [productPrices, setProductPrices] = useState([54.99, 74.99]); // Precios de los productos
  const [shippingPrice, setShippingPrice] = useState(19); // Precio de envío

  const handleProductPriceChange = (price, index) => {
    setProductPrices((prevPrices) => {
      const newPrices = [...prevPrices];
      newPrices[index] = price;
      return newPrices;
    });
  };

  const calculateTotalPrice = () => {
    const productsTotal = productPrices.reduce((total, price) => total + price, 0);
    return productsTotal + shippingPrice;
  };

  return (
    <div className="bg-[#F2F2F2] rounded-lg py-2 my-7 px-5 flex flex-col shadow-lg h-[460px] md:h-[470px] md:w-[383px] md:place-content-center md:my-0">
      <Product
        img="./img/photo1.png"
        name="vintage backbag"
        discountedPrice="$54.99"
        normalPrice="$94.99"
        onPriceChange={(price) => handleProductPriceChange(price, 0)}
      />
      <Product
        img="./img/photo2.png"
        name="Levi Shoes"
        discountedPrice="$74.99"
        normalPrice="$124.99"
        onPriceChange={(price) => handleProductPriceChange(price, 1)}
      />

      <div className="pt-10">
        <CardFinalPrice name="shipping" price={shippingPrice} />
        <CardFinalPrice name="total" price={(calculateTotalPrice()).toFixed(2)} />
      </div>
    </div>
  );
}

export default CardProducts;
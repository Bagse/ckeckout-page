import { useState } from "react";
import CardNumberItems from "./CardNumberItems";

function Product({ img, name, discountedPrice, normalPrice, onPriceChange, shippingPrice }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    const price = parseFloat(discountedPrice.substring(1)) * newQuantity;
    onPriceChange(price);
  };

  const calculateTotalPrice = () => {
    const price = parseFloat(discountedPrice.substring(1));
    const totalPrice = (price * quantity).toFixed(2); // Redondear a dos decimales
    return totalPrice;
  };

  return (
    <div className="flex gap-4 py-4">
      <img src={img} alt="product" className="rounded-xl w-[122px]" />
      <div className="font-mont text-[#4E5150] flex flex-col">
        <h3 className="text-xs md:text-[16px] capitalize font-bold">{name}</h3>
        <div className="flex text-sm py-3 gap-3 items-center">
          <p className="text-[#F2994A] md:text-[16px]">${calculateTotalPrice()}</p>
          <p className="line-through text-[10px] md:text-[12px]">{normalPrice}</p>
        </div>
        <CardNumberItems quantity={quantity} onQuantityChange={handleQuantityChange} />
      </div>
    </div>
  );
}

export default Product;

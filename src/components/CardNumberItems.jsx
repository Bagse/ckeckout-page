import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function CardNumberItems({ quantity, onQuantityChange }) {
    const handleIncrement = () => {
      onQuantityChange(quantity + 1);
    };
  
    const handleDecrement = () => {
      if (quantity > 1) {
        onQuantityChange(quantity - 1);
      }
    };
  return (
    <div className="flex items-center place-content-center justify-between px-2 mt-3 outline outline-2 outline-[#828282] rounded-lg h-[49px] w-[122px]">
      <button className="bg-[#E0E0E0] text-[#828282] rounded p-1 hover:bg-[#BDBDBD]" onClick={handleDecrement}>
        <FaMinus />
      </button>
      <span className="text-[#333333] text-base">{quantity}</span>
      <button className="bg-[#E0E0E0] text-[#828282] rounded p-1 hover:bg-[#BDBDBD]" onClick={handleIncrement}>
        <FaPlus />
      </button>
    </div>
  );
}

export default CardNumberItems;

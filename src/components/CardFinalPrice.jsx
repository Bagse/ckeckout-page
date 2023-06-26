function CardFinalPrice({ name, price }) {
  return (
    <div className="font-mont font-bold text-[#333333] text-sm border-t-2 border-[]">
      <div className="flex justify-between py-2">
        <h2 className="capitalize md:text-lg">{name}</h2>
        <p>${price}</p>
      </div>
    </div>
  );
}

export default CardFinalPrice;

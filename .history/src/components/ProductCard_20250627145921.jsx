import { Link } from "react-router-dom";
import whiteCart from "../assets/white-cart.png";

const ProductCard = ({ product }) => {
    return (
        <div className="font-raleway p-4 rounded flex flex-col gap-3 group hover:shadow-lg transition duration-300 ease-in-out">
            {/* product image  */}
            <div className="h-80 w-full relative rounded">
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover rounded"
                />
                {/* Add to Cart button (no logic required) */}
                <button
                    className="absolute -bottom-5 right-5 flex items-center justify-center shadow bg-primary h-[52px] w-[52px] rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        // No cart logic required
                        alert(`Added ${product.name} to cart!`);
                    }}
                >
                    <img src={whiteCart} alt="whiteCart" className="w-[50%]" />
                </button>
            </div>
            <div>
                <h3 className="font-light text-xl">{product.name}</h3>
                <p className="font-semibold">${product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;

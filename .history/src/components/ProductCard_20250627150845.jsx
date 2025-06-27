import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, openCart } from "../store/cartSlice";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    return (
        <div className="font-raleway p-4 rounded flex flex-col gap-3 group hover:shadow-lg transition duration-300 ease-in-out">
            <Link to={`/products/${product.id}`} data-testid={`product-${product.name.toLowerCase().replace(/\s+/g, '-')}`}> 
                {/* product image  */}
                <div className="h-80 w-full relative rounded">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover rounded"
                    />
                </div>
                <div>
                    <h3 className="font-light text-xl">{product.name}</h3>
                    <p className="font-semibold">${product.price}</p>
                </div>
            </Link>
            <button
                className="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-green-600 transition"
                onClick={() => {
                    dispatch(addToCart({
                        productId: product.id,
                        quantity: 1,
                        product: product,
                        selectedAttributes: {},
                    }));
                    dispatch(openCart());
                }}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;

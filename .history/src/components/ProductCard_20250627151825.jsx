import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <Link to={`/products/${product.id}`} data-testid={`product-${product.name.toLowerCase().replace(/\s+/g, '-')}`}> 
            <div className="font-raleway p-4 rounded flex flex-col gap-3 group hover:shadow-lg transition duration-300 ease-in-out">
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
            </div>
        </Link>
    );
};

export default ProductCard;

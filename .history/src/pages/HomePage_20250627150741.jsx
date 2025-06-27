import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch("/api/products")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch products");
                return res.json();
            })
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (error) return <div className="user-message user-message--error">{error}</div>;
    return (
        <>
            <section className="py-10">
                <div className="container">
                    <h1 className="text-4xl mb-5">ALL</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {loading ? (
                            <Spinner loading={loading} />
                        ) : products.length === 0 ? (
                            <div className="user-message">No products found.</div>
                        ) : (
                            products.map((product) => (
                                <ProductCard product={product} key={product.id} />
                            ))
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;

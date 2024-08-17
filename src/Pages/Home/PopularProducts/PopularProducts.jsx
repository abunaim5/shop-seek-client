import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import ProductCard from "../../Products/ProductCard";

const PopularProducts = () => {
    const [popularProducts, setPopularProducts] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const fetchPopularProducts = async () => {
            try {
                const res = await axiosPublic.get('/popular-products');
                setPopularProducts(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPopularProducts();
    }, []);

    return (
        <div className='max-w-[1400px] mx-auto px-2 mb-20'>
            <span className="text-2xl font-semibold bg-gray-100 px-6 py-2 rounded-full">01 - Popular products</span>
            <div className="divider my-10" />
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    popularProducts.map(product => <ProductCard key={product._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default PopularProducts;
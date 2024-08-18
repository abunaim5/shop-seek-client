import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Suspense, lazy } from 'react'

const ProductCard = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../../Products/ProductCard')), 1500);
    });
});

const PopularProducts = () => {
    const [popularProducts, setPopularProducts] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const fetchPopularProducts = async () => {
            try {
                const res = await axiosPublic.get('/popularProducts');
                setPopularProducts(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPopularProducts();
    }, []);

    return (
        <div className='max-w-[1400px] mx-auto px-2 my-20'>
            <span className="text-2xl font-semibold bg-gray-100 px-6 py-2 rounded-full">01 - Popular products</span>
            <div className="divider my-10" />
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    popularProducts.map(product => <Suspense fallback={<div className="flex flex-col gap-4">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>} key={product._id}>
                        <ProductCard product={product} />
                    </Suspense>)
                }
            </div>
        </div>
    );
};

export default PopularProducts;
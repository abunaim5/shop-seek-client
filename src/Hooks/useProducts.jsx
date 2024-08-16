import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = ({ currentPage, itemsPerPage, sortPriceVal }) => {
    const [products, setProducts] = useState([]);
    const axiosPublic = useAxiosPublic();

    // fetch products data and handle fetching data with pagination
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axiosPublic.get(`/products?page=${currentPage}&size=${itemsPerPage}&sortBy=${sortPriceVal}`);
                setProducts(res.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchProducts();
    }, [currentPage, itemsPerPage, sortPriceVal]);
    return products;
};

export default useProducts;
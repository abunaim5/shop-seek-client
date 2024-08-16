import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = ({ currentPage, itemsPerPage, sortPriceVal, sortDateVal, brandValue, categoryValue, min, max, searchText }) => {
    const [products, setProducts] = useState([]);
    const axiosPublic = useAxiosPublic();

    // fetch products data and handle fetching data with pagination
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axiosPublic.get(`/products?search=${searchText}&brand=${brandValue}&category=${categoryValue}&page=${currentPage}&size=${itemsPerPage}&sortPrice=${sortPriceVal}&sortDate=${sortDateVal}&min_price=${min}&max_price=${max}`);
                setProducts(res.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchProducts();
    }, [currentPage, itemsPerPage, sortPriceVal, sortDateVal, brandValue, categoryValue, min, max, searchText]);
    return products;
};

export default useProducts;
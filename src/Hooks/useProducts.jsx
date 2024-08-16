import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = ({ currentPage, itemsPerPage, sortPriceVal, sortDateVal, brandValue, categoryValue }) => {
    const [products, setProducts] = useState([]);
    const axiosPublic = useAxiosPublic();
    console.log(brandValue);

    // fetch products data and handle fetching data with pagination
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axiosPublic.get(`/products?brand=${brandValue}&category=${categoryValue}&page=${currentPage}&size=${itemsPerPage}&sortPrice=${sortPriceVal}&sortDate=${sortDateVal}`);
                setProducts(res.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchProducts();
    }, [currentPage, itemsPerPage, sortPriceVal, sortDateVal, brandValue, categoryValue]);
    return products;
};

export default useProducts;
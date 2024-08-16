import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = ({ currentPage, itemsPerPage, sortPriceVal, sortDateVal }) => {
    const [products, setProducts] = useState([]);
    const axiosPublic = useAxiosPublic();
    console.log(sortPriceVal, sortDateVal);

    // fetch products data and handle fetching data with pagination
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axiosPublic.get(`/products?page=${currentPage}&size=${itemsPerPage}&sortPrice=${sortPriceVal}&sortDate=${sortDateVal}`);
                setProducts(res.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchProducts();
    }, [currentPage, itemsPerPage, sortPriceVal, sortDateVal]);
    return products;
};

export default useProducts;
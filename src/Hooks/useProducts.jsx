import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = ({currentPage, itemsPerPage}) => {
    const [products, setProducts] = useState([]);
    const axiosPublic = useAxiosPublic();

     // fetch products data and handle fetching data with pagination
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axiosPublic.get(`/products?page=${currentPage}&size=${itemsPerPage}`);
                setProducts(res.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchProducts();
    }, [currentPage, itemsPerPage]);
    return products;
};

export default useProducts;
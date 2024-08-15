import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { CiSearch } from "react-icons/ci";
import ProductCard from "./ProductCard";
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Products = () => {
    const axiosPublic = useAxiosPublic();
    const [products, setProducts] = useState([])
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(0);
    const { count } = useLoaderData();
    const pageCount = Math.ceil(count / itemsPerPage);
    const pages = [...Array(pageCount).keys()];

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

    const handleItemsPerPage = e => {
        const pageValue = parseInt(e.target.value);
        setItemsPerPage(pageValue);
        setCurrentPage(0);
    }

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className='max-w-[1400px] mx-auto px-2 mb-20'>
            <div className='sm:w-full md:w-1/2 mx-auto my-20'>
                <label className="input input-bordered flex items-center gap-2 rounded-md">
                    <input type="text" className="grow" placeholder="Search" />
                    <CiSearch />
                </label>
            </div>
            <div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        products.map(product => <ProductCard key={product._id} product={product} />)
                    }
                </div>
            </div>
            <div className='join mt-10 w-full justify-center'>
                <button onClick={handlePrev} className="join-item btn btn-outline btn-accent rounded-md">Prev</button>
                {
                    pages.map(page => <button
                        onClick={() => {
                            setCurrentPage(page);
                        }}
                        key={page}
                        className={`join-item btn rounded-md ${currentPage === page && 'btn-accent'}`}
                    >{page}</button>)
                }
                <button onClick={handleNext} className="join-item btn btn-outline btn-accent border-r-0">Next</button>
                <select value={itemsPerPage} onChange={handleItemsPerPage} className="select select-bordered focus:outline-none rounded-md rounded-l-none border-accent">
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                </select>
            </div>
        </div>
    );
};

export default Products;
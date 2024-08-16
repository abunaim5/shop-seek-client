import { CiSearch } from "react-icons/ci";
import ProductCard from "./ProductCard";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SelectOption from "../../Components/SelectOption/SelectOption";
import useProducts from "../../Hooks/useProducts";

const Products = () => {
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(0);
    const [brandValue, setBrandValue] = useState('All');
    const { count } = useLoaderData();
    const pageCount = Math.ceil(count / itemsPerPage);
    const pages = [...Array(pageCount).keys()];

    const products = useProducts({currentPage, itemsPerPage});

    // handle items per page count
    const handleItemsPerPage = e => {
        const pageValue = parseInt(e.target.value);
        setItemsPerPage(pageValue);
        setCurrentPage(0);
    }

    // handle previous page
    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    // handle next page
    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const brandOptions = {
        name: 'Brand',
        options: [
            'All',
            'Nike',
            'Bata'
        ],
        value: brandValue,
        setValue: setBrandValue,
        roundCls: 'rounded-r-none',
        borderCls: ''
    };

    const categoryOptions = {
        name: 'Category',
        options: [
            'All',
            'Nike',
            'Bata'
        ],
        roundCls: 'rounded-none',
        borderCls: 'border-x-0'
    };

    const priceOptions = {
        name: 'Price',
        options: [
            'All',
            'Nike',
            'Bata'
        ],
        roundCls: 'rounded-l-none',
        borderCls: ''
    };

    const priceSortOptions = {
        name: 'Sort by Price',
        options: [
            'Default',
            'Low to High',
            'High to Low'
        ],
        roundCls: 'rounded-r-none',
        borderCls: ''
    };

    const dateSortOptions = {
        name: 'Sort by Date',
        options: [
            'Default',
            'Newest',
            'Oldest'
        ],
        roundCls: 'rounded-l-none',
        borderCls: 'border-l-0'
    };

    return (
        <div className='max-w-[1400px] mx-auto px-2 mb-20'>
            <div className='sm:w-full md:w-1/2 mx-auto my-20'>
                <label className="input focus:outline-none input-bordered flex items-center gap-2 rounded-md">
                    <input type="text" className="grow" placeholder="Search" />
                    <CiSearch />
                </label>
            </div>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <SelectOption optionsData={brandOptions} />
                    <SelectOption optionsData={categoryOptions} />
                    <SelectOption optionsData={priceOptions} />
                </div>
                <div>
                    <SelectOption optionsData={priceSortOptions} />
                    <SelectOption optionsData={dateSortOptions} />
                </div>
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
import { CiSearch } from "react-icons/ci";
// import ProductCard from "./ProductCard";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SelectOption from "../../Components/SelectOption/SelectOption";
import useProducts from "../../Hooks/useProducts";
import { Suspense, lazy } from 'react'

const ProductCard = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('./ProductCard')), 1500);
    });
});

const Products = () => {
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);
    const [sortPriceVal, setSortPriceVal] = useState('Default');
    const [sortDateVal, setSortDateVal] = useState('Newest');
    const [brandValue, setBrandValue] = useState('All');
    const [categoryValue, setCategoryValue] = useState('All');
    const [searchText, setSearchText] = useState('');
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    const { count } = useLoaderData();
    const pageCount = Math.ceil(count / itemsPerPage);
    const pages = [...Array(pageCount).keys()];

    const products = useProducts({ currentPage, itemsPerPage, sortPriceVal, sortDateVal, brandValue, categoryValue, min, max, searchText });
    // console.log(sortPriceVal, sortDateVal);

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

    // handle search product by name
    const handleSearch = e => {
        e.preventDefault();
        const text = e.target.value;
        setSearchText(text === '' ? '' : text);
    };

    // filter products by brand
    const brandOptions = {
        name: 'Brand',
        options: [
            'All',
            'Apple',
            'Samsung',
            'Google',
            'OnePlus',
            'BlackBerry',
            'Oppo',
        ],
        value: brandValue,
        setValue: setBrandValue,
        roundCls: 'rounded-r-none',
        borderCls: ''
    };

    // filter products by category
    const categoryOptions = {
        name: 'Category',
        options: [
            'All',
            'Accessories',
            'Tablets',
            'Wearables',
            'Smart Home',
            'Home Appliances',
            'Electronics'
        ],
        setValue: setCategoryValue,
        roundCls: 'rounded-l-none',
        borderCls: 'border-l-0'
    };

    // filter products by min or max price
    const handlePriceRange = e => {
        e.preventDefault();
        const price = e.target.name;
        if (price === 'min') {
            setMin(e.target.value);
        } else if (price === 'max') {
            setMax(e.target.value);
        }
    }

    // sorting products by low and high price
    const priceSortOptions = {
        name: 'Sort by Price',
        options: [
            'Default',
            'Low to High',
            'High to Low'
        ],
        setValue: setSortPriceVal,
        roundCls: 'rounded-r-none',
        borderCls: ''
    };

    // sorting products by created date
    const dateSortOptions = {
        name: 'Sort by Date',
        options: [
            'Newest',
            'Oldest'
        ],
        setValue: setSortDateVal,
        roundCls: 'rounded-l-none',
        borderCls: 'border-l-0'
    };

    return (
        <div className='max-w-[1400px] mx-auto px-2 mb-20'>
            <div className='sm:w-full md:w-1/2 mx-auto my-20'>
                <form onChange={handleSearch}>
                    <label className="input input-bordered focus:outline-0 flex items-center gap-2 rounded-md">
                        <input type="text" name="search" className="grow" placeholder="Search" />
                        <CiSearch />
                    </label>
                </form>
            </div>
            <div className="flex items-center flex-col lg:flex-row justify-between mb-8 gap-4">
                <div className="flex flex-col lg:flex-row items-center gap-4">
                    <div>
                        {/* <p className="">Filter:</p> */}
                        <SelectOption optionsData={brandOptions} />
                        <SelectOption optionsData={categoryOptions} />
                    </div>
                    <form onBlur={handlePriceRange}>
                        {/* <p>Price Range:</p> */}
                        <div className="flex gap-2">
                            <input type="number" name='min' placeholder="Min" className="input max-w-24 input-bordered focus:outline-none focus:border-accent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                            <input type="number" name='max' placeholder="Max" className="input max-w-24 input-bordered focus:outline-none focus:border-accent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                        </div>
                    </form>
                </div>
                <div>
                    <SelectOption optionsData={priceSortOptions} />
                    <SelectOption optionsData={dateSortOptions} />
                </div>
            </div>
            <div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {
                        products.map(product => <Suspense fallback={<div className="flex flex-col gap-4">
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
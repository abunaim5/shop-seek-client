import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { CiSearch } from "react-icons/ci";
import ProductCard from "./ProductCard";

const Products = () => {
    const axiosPublic = useAxiosPublic();

    const { isPending: isProductLoading, data: products } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosPublic.get('/products');
            return res.data;
        }
    });
    console.log(products);

    if (isProductLoading) {
        return <p>Loading...</p>
    }

    return (
        <div className='max-w-[1400px] mx-auto px-2'>
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
        </div>
    );
};

export default Products;
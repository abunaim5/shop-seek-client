import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

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

    if(isProductLoading) {
        return <p>Loading...</p>
    }

    return (
        <div>

        </div>
    );
};

export default Products;
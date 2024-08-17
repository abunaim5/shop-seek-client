import { PiShoppingCart } from "react-icons/pi";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const ProductCard = ({ product }) => {
    const axiosPublic = useAxiosPublic();

    const handleViewDetails = async (id) => {
        const res = await axiosPublic.get(`/product/${id}`);
        return res.data;
    };

    return (
        <div className="card card-compact rounded-md">
            <Link to={`/details/${product._id}`}>
                <figure onClick={() => handleViewDetails(product._id)}>
                    <img
                        className='rounded-md border-2 border-gray-200'
                        src={product.image}
                        alt={`${product.name} image`} />
                </figure>
            </Link>
            <div className="card-body flex-row items-center justify-between border-2 border-gray-200 mt-4 rounded-md">
                <div className='flex-1'>
                    <h2 className="card-title">{product.name}</h2>
                    <p>${product.price}</p>
                    {/* <p>Date: {product.createdAt}</p> */}
                </div>
                <div className="divider divider-horizontal" />
                <PiShoppingCart className='text-3xl' />
            </div>
        </div>
    );
};

export default ProductCard;
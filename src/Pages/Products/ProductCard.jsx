import { PiShoppingCart } from "react-icons/pi";

const ProductCard = ({ product }) => {
    return (
        <div className="card card-compact rounded-md">
            <figure>
                <img
                    className='rounded-md'
                    src={product.image}
                    alt={`${product.name} image`} />
            </figure>
            <div className="card-body flex-row items-center justify-between border-2 border-gray-200 mt-4 rounded-md">
                <div className='flex-1'>
                    <h2 className="card-title">{product.name}</h2>
                    <p>${product.price}</p>
                </div>
                <div className="divider divider-horizontal" />
                <PiShoppingCart className='text-3xl' />
            </div>
        </div>
    );
};

export default ProductCard;
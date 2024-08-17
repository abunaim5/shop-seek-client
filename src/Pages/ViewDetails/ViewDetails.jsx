import { FaFacebookF, FaMinus, FaPinterest, FaPlus, FaWhatsapp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { Rating } from 'react-simple-star-rating'

const ViewDetails = () => {
    const product = useLoaderData();
    console.log(product);

    return (
        <div className="min-h-[calc(100vh-94px)] mt-10">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex items-center gap-2 bg-gray-50 px-6 py-3 rounded-full shadow-md">
                    <p>Share:</p>
                    <FaFacebookF />
                    <FaPinterest />
                    <FaWhatsapp />
                </div>
                <div className="card lg:card-side mt-20">
                    <figure className="w-1/2">
                        <img
                            src={product?.image}
                            alt="Album" />
                    </figure>
                    <div className="card-body justify-between w-1/2 gap-6">
                        <div>
                            <h2 className="card-title text-2xl mb-4 text-accent">{product?.name}</h2>
                            <p>{product?.description}</p>
                            <div className="flex items-center gap-2 my-2">
                                <span>Ratings:</span>
                                <Rating
                                    initialValue={product.ratings}
                                    onClick={function noRefCheck() { }}
                                    SVGstyle={{ display: "inline" }}
                                    size={24}
                                    readonly
                                />
                            </div>
                            <p className="mb-2">Brand: {product?.brand}</p>
                            <p>Category: {product?.category}</p>
                            <p className="text-3xl font-medium mt-6">${product?.price}</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <span>Quantity</span>
                            <div>
                                <button className="btn btn-sm rounded-sm"><FaMinus /></button>
                                <input className="focus:outline-none max-w-12 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" type="number" name="number" id="number" defaultValue={1} />
                                <button className="btn btn-sm rounded-sm"><FaPlus /></button>
                            </div>
                        </div>
                        <div className="card-actions">
                            <button className="btn btn-accent rounded-md px-10">Buy Now</button>
                            <button className="btn btn-accent rounded-md px-10">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
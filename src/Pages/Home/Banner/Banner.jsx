import { PiShoppingCart } from "react-icons/pi";

const Banner = () => {
    return (
        <div className="hero min-h-[calc(100vh-94px)]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.postimg.cc/QM1rZ1ZL/samsung-z-fold.png" className="max-w-xl" />
                <div>
                    <h1 className="text-5xl font-bold text">Samsung Galaxy Z <br /> Fold 4</h1>
                    <p className="py-6">
                        Innovative foldable phone with dual displays and powerful performance. The Samsung Galaxy Z Fold 4 is a premium foldable smartphone that offers a unique, cutting-edge design with dual displays and advanced features.
                    </p>
                    <button className="btn btn-neutral btn-lg rounded-md">Buy Product<div className="divider divider-horizontal divider-accent my-2" /><PiShoppingCart className='text-3xl' /></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const product = useLoaderData();
    console.log(product);

    return (
        <div>
            
        </div>
    );
};

export default ViewDetails;
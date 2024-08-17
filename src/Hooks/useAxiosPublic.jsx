import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://shop-seek-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
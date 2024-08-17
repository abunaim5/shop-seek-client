import { Link } from 'react-router-dom';
import loginImg from '../../assets/login-register.svg'
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { loginUser, loginUserWithGoogle } = useAuth();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then(() => { }).catch((error) => {
                console.error(error.message);
            });
    };

    const handleLoginWithGoogle = () => {
        loginUserWithGoogle()
            .then(() => { }).catch((error) => {
                console.error(error.message);
            });
    };

    return (
        <div className="hero min-h-[calc(100vh-94px)]">
            <div className="hero-content flex-col lg:flex-row justify-around">
                <div className="base:w-full lg:w-1/2">
                    <img src={loginImg} alt="login image" className='w-[90%] mx-auto' />
                </div>
                <div className="card bg-base-100 sm:w-full lg:w-1/2 shrink-0 shadow-md rounded-md">
                    <h1 className="text-2xl font-bold px-8 pt-8">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body pb-4">
                        <div className="form-control">
                            <label className="label" htmlFor='email'>
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' id='email' placeholder="email" className="input input-bordered rounded-md" autoComplete='email' required />
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor='password'>
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' id='password' placeholder="password" className="input input-bordered rounded-md" autoComplete='pass' required />
                            <label className="label" >
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-accent uppercase text-gray-800 rounded-md">Login</button>
                        </div>
                    </form>
                    <button onClick={handleLoginWithGoogle} className="btn btn-accent uppercase text-gray-800 rounded-md mx-8">Login with google</button>
                    <p className='text-center py-8'>New Here? <Link to='/register' className='text-accent'>Create an Account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
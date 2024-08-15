import loginImg from '../../assets/login-register.svg'

const Login = () => {
    return (
        <div className="hero min-h-[calc(100vh-68px)]">
            <div className="hero-content flex-col lg:flex-row justify-around">
                <div className="base:w-full lg:w-1/2">
                    <img src={loginImg} alt="login image" className='w-[80%] mx-auto' />
                </div>
                <div className="card bg-base-100 sm:w-full lg:w-1/2 shrink-0 shadow-md rounded-none">
                    <h1 className="text-2xl font-bold px-8 pt-8">Login now!</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label" htmlFor='email'>
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='password' id='email' placeholder="email" className="input input-bordered rounded-none" autoComplete='email' required />
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor='password'>
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' id='password' placeholder="password" className="input input-bordered rounded-none" autoComplete='pass' required />
                            <label className="label" >
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-accent uppercase text-gray-800 rounded-none">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
import { Link } from 'react-router-dom';
import loginImg from '../../assets/login-register.svg'
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const { createUser } = useAuth();

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then(() => {

            }).catch((error) => {
                console.error(error.message);
            })
    };

    return (
        <div className="hero min-h-[calc(100vh-68px)]">
            <div className="hero-content flex-col lg:flex-row justify-around">
                <div className="base:w-full lg:w-1/2">
                    <img src={loginImg} alt="login image" className='mx-auto' />
                </div>
                <div className="card bg-base-100 sm:w-full lg:w-1/2 shrink-0 shadow-md rounded-md">
                    <h1 className="text-2xl font-bold px-8 pt-8">Register now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label" htmlFor='name'>
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' id='name' placeholder="name" className="input input-bordered rounded-md" autoComplete='name' required />
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor='email'>
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' id='email' placeholder="email" className="input input-bordered rounded-md" autoComplete='email' required />
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor='photo'>
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' id='photo' placeholder="https://" className="input input-bordered rounded-md" autoComplete='photo' required />
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor='password'>
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' id='password' placeholder="password" className="input input-bordered rounded-md" autoComplete='password' required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-accent uppercase text-gray-800 rounded-md">Sign Up</button>
                        </div>
                    </form>
                    <p className='text-center pb-8'>Already have an account? <Link to='/login' className='text-accent'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/login.webp'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import useTitle from '../Hooks/useTitle';
import GoogleLogin from './GoogleLogin';

const Login = () => {
    const {logIn}= useContext(AuthContext);
    const location = useLocation();
    useTitle('Login');
    const navigate = useNavigate();

const from = location.state?.from?.pathname || '/' ;

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target ;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);

        logIn(email,password)
        .then(result => {
            const user = result.user;
            const loggedUser = {
                email: user.email
            }
            console.log(loggedUser);
            navigate(from,{replace: true});
          
          
        })
        .catch(error => console.log(error));
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center mr-12 lg:text-left w-1/2">
                    <img src={img} alt="" />
                   
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                    <h1 className="text-3xl text-center font-bold">Login </h1>
                        <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                           
                            <input className='btn  btn-primary' type="submit" value="Login" />
                        </div>
                        </form>
                        <p className='text-center my-5'>New to Cars Doctor <Link className='text-orange-500 font-bold' to="/signup">Sign Up</Link> </p>
                        <GoogleLogin></GoogleLogin>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;
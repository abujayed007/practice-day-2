import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";




const Login = () => {
    const {logIn,googleLogin} = useContext(AuthContext)
    const provider = new GoogleAuthProvider()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || "/";
    const handleGoogle = () =>{
        googleLogin(provider)
    }

    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target 
        const email = form.email.value
        const password = form.password.value
        logIn(email, password)
        .then(res =>{
            const user = res.user 
            if(user){
                navigate(from, { replace: true });
            }
            console.log(user);
        }).catch(err => {
            console.log(err.message);
        })
    }
    return (
        <div className="hero min-h-screen  bg-base-200">
            <div className="hero-content flex-col lg:w-1/2">
                <div className="card shrink-0 w-full  shadow-2xl bg-base-100 p-7">
                    <h1 className="text-5xl font-bold text-center my-4">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button  className="btn btn-primary">Login</button>
                        </div>
                        <button onClick={handleGoogle}  className="flex justify-center w-full btn text-xl text-[#4285F4]"><FcGoogle/> Google</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
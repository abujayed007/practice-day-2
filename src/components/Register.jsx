import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";



const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [users, setUsers] = useState([])
    const random = Math.random();
    const s = random.toString(16);
    const newId = s.slice(2);
    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        const userInfo = {
            id: newId,
            name,
            email
        }
        createUser(email, password)
            .then(res => {
                const user = res.user
                console.log(user);
                if (user?.uid) {
                    fetch('http://localhost:3000/users', {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify(userInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            setUsers(data)
                        })
                }
            }).catch(err => {
                console.log(err.message);
            })
    }

    return (
        <div className="hero min-h-screen  bg-base-200">
            <div className="hero-content flex-col lg:w-1/2">
                <div className="card shrink-0 w-full  shadow-2xl bg-base-100 p-7">
                    <h1 className="text-5xl font-bold text-center my-4">Register now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <input className="btn bg-blue-500" type="submit" value="Register" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
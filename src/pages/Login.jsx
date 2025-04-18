import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const {signInWithEmail} = useContext(AuthContext);

    const handleSignIn =(e)=>{
        e.preventDefault();
        const loginData = new FormData(e.target);
        const email = loginData.get('email');
        const password = loginData.get('password');

        signInWithEmail(email, password)
        .then(result =>{
            console.log('sign in successful', result);
        })
        .catch(error=>{
            console.log('error', error.message);
        })

    }



    return (
        <div>
            <h2 className="text-center text-2xl font-semibold">Login your account</h2>
            <form onSubmit={handleSignIn}>
                <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </div>
                </div>
            </form>
            <p className="text-center mt-5">Don't have an account? <Link to='/auth/register' className="text-red-500">Register</Link></p>
        </div>
    );
};

export default Login;
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const { signInWithEmail } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    // const {minLengthErr, upperErr, lowerErr, numberErr, specialErr} = error;

    const passwordValidator = (password) => {
        // password validation
        const minLength = /.{8,}/;
        const upper = /[A-Z]/;
        const lower = /[a-z]/;
        const number = /[0-9]/;
        const special = /[!@#$%^&*(),.?":{}|<>]/;
        if (!minLength.test(password)) {
            return ('password must be at least 8 characters long');

        }
        if (!upper.test(password)) {
            return ('password must include an uppercase letter.');
        }
        if (!lower.test(password)) {
            return ('password must include a lowercase letter.');
        }
        if (!number.test(password)) {
            return ('password must include a number.');
        }
        if (!special.test(password)) {
            return ('password must include a special character.');
        }
        else {
            return '';
        }
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        const loginData = new FormData(e.target);
        const email = loginData.get('email');
        const password = loginData.get('password');
        // password validation
        const validationError = passwordValidator(password);
        if (validationError) {
            setError(validationError);
            return;
        }
        else {
            setError('');
        }

        signInWithEmail(email, password)
            .then(() => {
                
                navigate(location?.state ? location.state : '/');
            })
            .catch(() => {
                
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
                            <input type="email" name="email" className="input" placeholder="Email" required />
                            <label className="fieldset-label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />
                            <label className="fieldset-label text-xs text-rose-400">
                                {error ? error : ''}

                            </label>
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
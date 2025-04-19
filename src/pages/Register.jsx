import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const { signUpInWithEmail, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        signUpInWithEmail(email, password)
            .then(() => {
                
                updateUserProfile({displayName:name, photoURL:photo})
                .then(()=>{
                    navigate('/')
                })
            })
            .catch(() => {
                
            })

    };

    return (
        <div>
            <h2 className="text-center text-2xl font-semibold">Register Now!</h2>
            <form onSubmit={handleRegister}>
                <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Name</label>
                            <input type="text" name="name" className="input" placeholder="Name" />

                            <label className="fieldset-label">Photo URL</label>
                            <input type="text" name="photo" className="input" placeholder="photo url" />

                            <label className="fieldset-label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />

                            <label className="fieldset-label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />

                            <div><a className="link link-hover"></a></div>
                            <button className="btn btn-neutral mt-4">Submit</button>
                        </fieldset>
                    </div>
                </div>
            </form>
            <p className="text-center mt-5">Already have an account? <Link to='/auth/login' className="text-red-500">Login</Link></p>

        </div>
    );
};

export default Register;
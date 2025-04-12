import { FaGithub, FaGoogle } from "react-icons/fa6";


const SocialLogin = () => {
    return (
        <div className="space-y-5">
            <h3 className="text-xl font-bold">Login With</h3>
            <button className="text-lg font-medium text-blue-400 btn py-6 w-full"><FaGoogle />Login with Google</button>
            <button className="text-lg font-medium text-black-400 btn py-6 w-full"><FaGithub></FaGithub> Login with Github</button>
        </div>
    );
};

export default SocialLogin;
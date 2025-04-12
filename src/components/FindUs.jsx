import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const FindUs = () => {
    return (
        <div>
            <h3 className="text-xl font-bold mb-7 mt-10">Find Us On</h3>

            <div className="border-2 border-[#E7E7E7] rounded-xl">
                <button className="text-lg font-medium justify-start btn btn-ghost py-6 w-full"><FaFacebook className="text-2xl text-[#3B599C] mr-2" /> Facebook</button>
                <button className="text-lg font-medium justify-start btn btn-ghost py-6 w-full"><FaTwitter className="text-2xl text-[#58A7DE] mr-2" /> Twitter</button>
                <button className="text-lg font-medium justify-start btn btn-ghost py-6 w-full"><FaInstagram className="text-2xl mr-2 text-[#D82D7E]" /> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;
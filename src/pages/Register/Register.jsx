import Lottie from "lottie-react";
import React, { useContext } from "react";
import RegiserLotieData from "../../assets/lottie/Register.json";
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../../sheared/SocialLogin";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const {createUser} = useContext(AuthContext);

  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);

    //password validation
    //const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    //show password validation error

    createUser(email, password)
    .then(result =>{
      console.log(result.user)
    })
    .catch(error =>{
      console.log(error.message)
    })
    
  }
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-8">
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-2xl text-black font-bold mb-6 text-center">Register</h2>
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
            >
              Register
            </button>
          </form>
            <div className="divider">OR</div>
             <div className="flex justify-center items-center gap-2 text-1xl">
              <FcGoogle></FcGoogle>
              <SocialLogin></SocialLogin>
             </div>
        </div>
      </div>
      <div className="col-span-4 flex ">
        <Lottie animationData={RegiserLotieData}></Lottie>
       
      </div>
    </div>
  );
};

export default Register;

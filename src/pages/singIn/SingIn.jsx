import Lottie from 'lottie-react';
import RegiserLotieData from "../../assets/lottie/Register.json";
import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import SocialLogin from '../../sheared/SocialLogin';
import { useLocation, useNavigate } from 'react-router-dom';

const SingIn = () => {
    const {signInUser} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    console.log('in Sign in Page', location);
    const from = location.state || '/';


    const handleSingIn = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        signInUser(email,password)
        .then(result =>{
            const user = result.user;
             navigate(from)
            console.log(user)
           
        })
        .catch(error =>{
            console.log(error)
        })

    }

    return (
        <div className="grid grid-cols-12">
      <div className="col-span-8">
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-2xl text-black font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleSingIn} className="space-y-4">
        
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
              Login
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

export default SingIn;
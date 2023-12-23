import {Link, useNavigate} from 'react-router-dom'
import { ArrowRight } from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { signInFailure, signInStart, signInSuccess } from '../redux/user/userSlice';

const SignInPage = () => {
  const [formData, setFormData] = useState({});
 
  const {loading, error} = useSelector((state) => state.user)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //on change event
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.id]: e.target.value, 
    });
  };
  // console.log(formData); 

  //form submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        //if the data has an error then execute this
        dispatch(signInFailure(data.message))
        // console.log(data);
        return;
      }
      dispatch(signInSuccess(data))
      // console.log(data);
      navigate('/') 

    } catch (error) {
      dispatch(signInFailure(error.message))
    }
  };
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <main className="flex-[2_2_0%] h-screen bg-black text-white">hello</main>

        {/* sign in form */}

        <div className="flex-1 flex flex-col justify-center items-center dark:bg-slate-950">
          <div className="bg-white h-1/2 w-1/2 dark:bg-slate-950">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl dark:text-white">
              Sign in
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-slate-300">
              Don&apos;t have an account?{" "}
              <Link
              className='text-black leading-tight font-semibold hover:underline dark:text-white'
               to="/register"
              >
                Register
              </Link>
            </p>
            <form className="mt-8" onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900 dark:text-white"
                  >
                    {" "}
                    Username{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      id='username'
                      type="text"
                      placeholder="Username"
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <a
                      href="#"
                      title=""
                      className="hidden lg:block text-sm font-semibold text-black hover:underline dark:text-slate-300"
                    >
                      {" "}
                      Forgot password?{" "}
                    </a>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      id='password'
                      type="password"
                      placeholder="Password"
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 dark:bg-slate-800 dark:hover:bg-slate-900"
                  >
                    Login <ArrowRight className="ml-2 " size={16} />
                  </button>
                  <a
                      href="#"
                      title=""
                      className="block lg:hidden text-sm font-semibold text-black hover:underline text-center mt-3 dark:text-slate-300"
                    >
                      {" "}
                      Forgot password?{" "}
                    </a>
                </div>
                {/* PRINT ERROR MESSAGE */}
                {error && <p className="p-3 text-red-700 font-semibold">{error}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;

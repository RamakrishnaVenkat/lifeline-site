import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [loading, setLoading] = useState(false)
  const [error , setError ] = useState("")
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    age: "",
    height: "",
    weight: "",
    gender: "",
    bloodGroup: "",
    dob: "",
    contact: "",
    address: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      setLoading(true); //set loading true before execution of request
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false); 
      setError(null) 
      navigate('/login')
      // console.log(data);
    } catch (error) {
      // console.log(error);
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col h-screen justify-center dark:bg-gray-950">
      <div className="sm:grid sm:grid-cols-2">
        <div className="text-center sm:col-span-2">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl dark:text-white">
            Sign up
          </h2>
          <p className="mt-2 text-base text-gray-600 dark:text-white">
            Already have an account?{" "}
            <Link
            to='/login'
              className="font-medium text-black transition-all duration-200 hover:underline dark:text-white"
            >
              Sign In
            </Link>
          </p>
        </div>
        <div className="p-4 flex justify-center">
          <form action="#" method="POST" className="mt-8 w-1/2">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="text-base font-medium text-gray-900 dark:text-white"
                >
                  {" "}
                  Full Name{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  ></input>
                </div>
              </div>
              <div>
                <label
                  htmlFor="text"
                  className="text-base font-medium text-gray-900 dark:text-white"
                >
                  {" "}
                  Age{" "}
                </label>
                <div className="mt-2">
                  <input
                    name="age"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
                    type="number"
                    placeholder="Age"
                    id="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                  ></input>
                </div>
              </div>
              <div>
                <label
                  htmlFor="text"
                  className="text-base font-medium text-gray-900 dark:text-white"
                >
                  {" "}
                  Height{" "}
                </label>
                <div className="mt-2">
                  <input
                    name="height"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
                    type="number"
                    placeholder="Height (in cm)"
                    id="height"
                    value={formData.height}
                    onChange={handleInputChange}
                    required
                  ></input>
                </div>
              </div>
              <div>
                <label
                  htmlFor="text"
                  className="text-base font-medium text-gray-900 dark:text-white"
                >
                  {" "}
                  Weight{" "}
                </label>
                <div className="mt-2">
                  <input
                    name="weight"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
                    type="number"
                    placeholder="Weight (in kg)"
                    id="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    required
                  ></input>
                </div>
              </div>
              <div>
                <label
                  htmlFor="text"
                  className="text-base font-medium text-gray-900 dark:text-white"
                >
                  {" "}
                  Gender{" "}
                </label>
                <div className="mt-2">
                  <select
                    name="gender"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:text-white dark:bg-slate-950"
                    type=""
                    id="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="p-4 flex justify-center">
          <form action="#" method="POST" className="mt-8 w-1/2">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="text-base font-medium text-gray-900 dark:text-white"
                >
                  {" "}
                  Blood Group{" "}
                </label>
                <div className="mt-2">
                  <select
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:text-white dark:bg-slate-950"
                    name="bloodGroup"
                    type=""
                    placeholder="bloodGroup"
                    id="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="text"
                  className="text-base font-medium text-gray-900 dark:text-white"
                >
                  {" "}
                  Date of birth{" "}
                </label>
                <div className="mt-2">
                  <input
                    name="dob"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
                    type="date"
                    placeholder=""
                    id="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    required
                  ></input>
                </div>
              </div>
              <div>
                <label
                  htmlFor="text"
                  className="text-base font-medium text-gray-900 dark:text-white"
                >
                  {" "}
                  Contact number{" "}
                </label>
                <div className="mt-2">
                  <input
                    name="contact"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
                    type="number"
                    placeholder="eg: 9876543210"
                    id="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    required
                  ></input>
                </div>
              </div>
              <div>
                <label
                  htmlFor="text"
                  className="text-base font-medium text-gray-900 dark:text-white"
                >
                  {" "}
                  Username{" "}
                </label>
                <div className="mt-2">
                  <input
                    name="username"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
                    type="text"
                    placeholder="choose a username"
                    id="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="text"
                  className="text-base font-medium text-gray-900 dark:text-white"
                >
                  {" "}
                  Password{" "}
                </label>
                <div className="mt-2">
                  <input
                    name="password"
                    className=" flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
                    type="text"
                    placeholder="choose a password"
                    id="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="sm:col-span-2 flex flex-col items-center">
          <div className="w-1/2">
            <label
              htmlFor="text"
              className="text-base font-medium text-gray-900 dark:text-white"
            >
              {" "}
              Address{" "}
            </label>
            <div className="mt-2">
              <input
                name="address"
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
                type="text"
                placeholder="enter full address"
                id="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="my-5 shadow-lg">
            <button
              type="button"
              className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 dark:bg-slate-800 dark:hover:bg-slate-900"
            >
              Register Account
              <ArrowRight className="ml-2" onClick={handleSubmit} />
            </button>
          </div>
        </div>
      </div>
      {error && <p className="text-red-700 text-sm text-center">{error}</p>}
    </section>
  );
}

export default Register;

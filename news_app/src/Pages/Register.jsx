import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
  axios.defaults.withCredentials = true;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();
  const [name, setName] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/user", {
        username: name,
        email: email,
        address: address,
        password: password,
      })
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-green-700 p-5 ">
      <div className="mx-auto p-10 w-1/4 bg-white my-10">
        <form onSubmit={handleSubmit}>
          <div className="text-center   m-10">
            <input
              className="p-3 text-center border-1 bg-slate-200 border-black "
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Enter Your name"
            />
          </div>
          <div className="text-center  m-10 ">
            <input
              type="text"
              className="p-3 text-center border-1 border-black bg-slate-200"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter your email address"
            />
          </div>
          <div className="text-center  m-10 ">
            <input
              type="text"
              className="p-3 text-center border-1 border-black bg-slate-200"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              placeholder="Enter the  your address"
            />
          </div>
          <div className="text-center  m-10 ">
            <input
              type="text"
              className="p-3 text-center border-1 border-black bg-slate-200"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Enter the  Your password"
            />
          </div>

          <div className="text-center  m-10">
            <button className="border-1 px-10 py-3 w-full text-xl border-blue-300 bg-green-500 ">
              Register
            </button>
          </div>
        </form>
        <div className="text-center">
          <Link to="/login">Already has an account</Link>
        </div>
      </div>
    </div>
  );
}

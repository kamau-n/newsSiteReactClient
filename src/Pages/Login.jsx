import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  axios.defaults.withCredentials = true;
  const [userEmail, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/login", {
        email: userEmail,
        password: password,
      })
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="m-auto p-10">
        <form onSubmit={handleSubmit}>
          <div className="text-center   m-10">
            <input
              className="p-2 text-center border-2  border-black "
              type="text"
              value={userEmail}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter the title of the blog"
            />
          </div>
          <div className="text-center  m-10 ">
            <input
              type="text"
              className="p-2 text-center border-2 border-black"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Enter the  content the blog"
            />
          </div>

          <div className="text-center  m-10">
            <button className="border-2 px-10 py-5  text-xl border-blue-300 bg-blue-500 rounded-2xl">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

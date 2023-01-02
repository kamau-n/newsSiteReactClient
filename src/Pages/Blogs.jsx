import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { data } from "autoprefixer";
import {} from "react-icons";
import logo from "./icon.png";

export default function Blogs() {
  const url = "http://localhost:8000/news";
  const [data, setData] = useState([]);
  const [blog_id, setBlog] = useState();
  //like function

  const like = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    axios
      .get(url)
      .then((results) => {
        setData(results.data);
        console.log(results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="text-center  mt-10">
      <div className="w-full bg-slate-200 flex  m-auto p-10 justify-between ">
        <img src="" alt="" srcset="" />

        <div className="">
          <img src={logo} alt="no image" className="h-20 w-20" />
          <h2 className="text-2xl font-black">NewApp</h2>
        </div>
        <h1 className="text-blue-800 text-4xl ">Get the latest News</h1>
        <button className=" h-10 p-2 text-white text-center bg-blue-600 rounded-xl">
          Subscribe
        </button>
      </div>

      {data.map((news) => {
        return (
          <div className="w-2/4 border-2 mx-auto my-10 p-5 bg-slate-50">
            <h1 className="text-3xl">{news.title}</h1>
            <p>{news.content}</p>
            <div className="flex justify-around p-4">
              <div>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    axios
                      .post("http://localhost:5000/blog/like", {
                        blog_id: blog_id,
                        user_id: 3,
                      })
                      .then((results) => {
                        console.log(results.data);
                        alert(results.data.msg);
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  }}>
                  <button className="border-1 px-6 py-1  text-l border-blue-300 bg-blue-500 rounded-2xl">
                    Like
                  </button>
                </form>
              </div>
              <div>
                <a href="/comments">Comments</a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

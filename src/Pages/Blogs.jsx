import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { data } from "autoprefixer";
import {} from "react-icons";
import logo from "./icon.png";
import { Link, useNavigate } from "react-router-dom";

export default function Blogs(route) {
  const url = "http://localhost:8000/news";
  const [data, setData] = useState([]);
  const [blog_id, setBlog] = useState();

  //like function

  const like = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();
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
      <div className="w-full bg-slate-200 flex  mx-auto p-10 justify-between  top-0 ">
        <img src="" alt="" srcset="" />

        <div className="">
          <img src={logo} alt="no image" className="h-20 w-20" />
          <h2 className="text-2xl font-black">MoloNews</h2>
        </div>
        <Link to="/" className="text-center text-xl text-blue-800">
          create a news article
        </Link>
        <h1 className="text-blue-800 text-4xl ">Get the latest News</h1>
        <button className=" h-10 p-2 text-white text-center bg-blue-600 rounded-xl">
          <Link to="/register">Subscribe</Link>
        </button>
      </div>

      <div className="overflow-auto">
        {data.map((news) => {
          return (
            <div className="w-2/4 border-2 mx-auto my-10 p-5 bg-slate-50  ">
              <h1 className="text-3xl">{news.title}</h1>
              <p>{news.content}</p>
              <div className="flex justify-around p-4">
                <div>
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      axios
                        .post("http://localhost:8000/news/like", {
                          news_id: 3,
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
                  <button
                    onClick={() => {
                      navigate("/Comments", { state: { news_id: news.id } });
                    }}>
                    comment
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className=" bottom-0 bg-blue-700 w-full mb-2 mt-10 py-5">
        <h2 className="text-xl  text-black">More About Us</h2>
        <div className=" flex flex-row justify-between p-3">
          <h2 className="text-xl  text-white">Back Home</h2>
          <h2 className="text-xl  text-white">Back Home</h2>
          <h2 className="text-xl  text-white">Back Home</h2>
          <h2 className="text-xl  text-white">Back Home</h2>
          <h2 className="text-xl  text-white">Back Home</h2>
        </div>
      </div>
    </div>
  );
}

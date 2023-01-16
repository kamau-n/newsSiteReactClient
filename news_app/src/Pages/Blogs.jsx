import React, { useEffect, useState } from "react";
import axios from "axios";
import { data } from "autoprefixer";
import {} from "react-icons";
import logo from "./logo.png";
import { Link, useNavigate } from "react-router-dom";

export default function Blogs(route) {
  const url = "http://localhost:8000/news";
  const [data, setData] = useState([]);
  const [blog_id, setBlog] = useState();
  const [likes, setLikes] = useState();

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
        {/* <div className="">
          <img src={logo} alt="no image" className="h-13 w-15" />
          <h2 className="text-xl font-black">MoloNews</h2>
        </div> */}
      </div>
      <div className="flex flex-row  mx-auto text-center">
        <div className="p-2 bg-purple-300 m-5 w-1/5">
          <h2 className="text-xl font-black">Filter By Topic</h2>
          <div className="bg-white p-5 border-2 text-l text-blue-600">
            Politics
          </div>
          <div className="bg-white p-5 border-2 text-l text-blue-600">
            Entertainment
          </div>
          <div className="bg-white p-5 border-2 text-l text-blue-600">
            Business
          </div>
          <div className="bg-white p-5 border-2 text-l text-blue-600">
            Sports
          </div>
          <div className="bg-white p-5 border-2 text-l text-blue-600">
            Advertisements
          </div>
          <div className="bg-white p-5 border-2 text-l text-blue-600">
            Fashion
          </div>
        </div>
        <div className="overflow-auto w-3/5">
          {data.map((news) => {
            const likes = 0;
            axios
              .post("http://localhost:8000/news/likes", {
                newsId: news.id,
              })
              .then((likes) => {
                console.log(likes);
                //);
              })
              .catch((err) => {
                console.log(err);
              });

            return (
              <div className=" border-2 mx-auto my-10 p-5 bg-slate-50  ">
                <div className="flex flex-row justify-between">
                  <h1 className="text-xl font-bold">{news.title}</h1>
                  <h1 className="text-xl">{news.createdAt}</h1>
                </div>
                <p className="bg-slate-200 p-2 text-xl rounded-md m-2">
                  {news.content}
                </p>
                <div className="flex justify-around p-4">
                  <div>
                    <form
                      onSubmit={(event) => {
                        event.preventDefault();
                        axios
                          .post("http://localhost:8000/news/like", {
                            newsId: news.id,
                            userId: 2,
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
                      <h2>{likes}</h2>
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
      </div>

      <div className=" bottom-0 bg-blue-300 w-full mb-2 mt-10 py-5 h-40">
        <h2 className="text-xl  text-black">More About Us</h2>
        <div className=" flex flex-row justify-between p-3">
          <h2 className="text-xl  text-white font-bold">Back Home</h2>
          <h2 className="text-xl  text-white font-bold">About Us</h2>
          <h2 className="text-xl  text-white font-bold">Contact Us</h2>
          <h2 className="text-xl  text-white font-bold">Our Story</h2>
        </div>
      </div>
    </div>
  );
}

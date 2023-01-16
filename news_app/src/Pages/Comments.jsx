import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, Route, useNavigate, useLocation } from "react-router-dom";
import { data } from "autoprefixer";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Comments() {
  const location = useLocation();
  const [textarea, setTextarea] = useState("");
  const [data, setData] = useState([]);

  const id = location.state.news_id;

  // a part that display other available comments

  useEffect(() => {
    axios
      .post("http://localhost:8000/news/comments", {
        id: id,
      })
      .then((comments) => {
        setData(comments.data);
        console.log(comments);
      })
      .catch((err) => console.log("there was an error"));
  }, []);

  const displays = () => {
    return data.map((comment) => {
      const date = comment.created_at;
      // console.log(date.toDateString());
      return (
        <div className="my-5 p-5 rounded-md">
          <div className="flex flex-row justify-between">
            <h2 className="text-xl font-bold">{comment.user.username}</h2>
            <h2>{date}</h2>
          </div>
          <h1 className="text-center text-white">{comment.comment}</h1>
        </div>
      );
    });
  };

  const comments = () => {
    if (textarea === "") {
      alert("some values are empty");
    } else {
      axios
        .post("http://localhost:8000/news/comment", {
          comment: textarea,
          newsId: id,
          userId: 2,
        })
        .then((res) => {
          // window.location.reload(true);
          toast.success("Commented Successfully", {
            position: toast.POSITION.TOP_CENTER,
          });
          <ToastContainer />;
        })
        .catch((err) => {
          alert("there was an error");
        });
    }
  };

  return (
    <div className="p-10 m-auto w-3/4 bg-black flex flex-row justify-between mt-2 rounded">
      <div className="[&>*:nth-child(odd)]:bg-blue-300 [&>*:nth-child(even)]:bg-gray-500 w-2/4">
        {displays()}
      </div>

      <div className="w-1/4 mt-10 bg-blue-500 p-7">
        <div className="text-center">
          <h1 className="text-white text-2xl text-left">Leave A Comment</h1>
          <h3 className="text-white text-xl text-left">Comment</h3>
          <textarea
            className="p-4 border-2 rounded text-center  mt-5 mx-auto  w-full "
            value={textarea}
            cols={100}
            onChange={(e) => {
              setTextarea(e.target.value);
            }}
            placeholder="Enter Your Comment Here"></textarea>
        </div>
        <div className="text-center">
          <button
            onClick={comments}
            className="bg-orange-300 p-3 m-4 rounded-md">
            post a comment
          </button>
        </div>

        <div className="text-center">
          <button onClick={comments} className="bg-blue-800 p-3 m-4">
            Subscribe to our Newsletters
          </button>
        </div>
        <div className="text-center">
          <Link to="/blogs" className="text-center text-xl text-blue-800">
            Back to blogs
          </Link>
        </div>
      </div>
    </div>
  );
}

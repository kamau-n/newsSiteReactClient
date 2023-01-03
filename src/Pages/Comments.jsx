import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, Route, useNavigate, useLocation } from "react-router-dom";
import { data } from "autoprefixer";
import { useEffect } from "react";

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
      return (
        <div className="p-1 w-3/4 m-auto bg-slate-200 ">
          <h1 className="text-center bg-red-300 p-3">{comment.comment}</h1>
        </div>
      );
    });
  };

  const comments = () => {
    axios
      .post("http://localhost:8000/news/comment", {
        comment: textarea,
        newsId: id,
      })
      .then((res) => {
        alert(res + "successfully commented");
      })
      .catch((err) => {
        alert("there was an error");
      });
  };
  return (
    <div className="p-10 m-auto w-2/3 bg-slate-400  ">
      <h1 className="text-center text-3xl m-2">Comments</h1>
      {displays()}
      <div className="text-center">
        <textarea
          className="p-4 border-2 rounded text-center mx-auto my-5 w-2/3"
          value={textarea}
          onChange={(e) => {
            setTextarea(e.target.value);
          }}
          placeholder="Enter Your Comment Here"></textarea>
      </div>
      <div className="text-center">
        <button onClick={comments} className="bg-blue-800 p-3 m-4">
          Submit
        </button>
      </div>
      <div className="text-center">
        <Link to="/blogs" className="text-center text-xl text-blue-800">
          Back to blogs
        </Link>
      </div>
    </div>
  );
}

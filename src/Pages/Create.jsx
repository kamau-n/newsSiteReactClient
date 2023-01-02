import React, { useState } from "react";
import axios from "axios";

function Create() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const user_id = 2;
  const url = "http://localhost:8000/news";
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title, content);
    axios
      .post(url, {
        title: title,
        content: content,
      })
      .then((results) => {
        // console.log(results);
        alert("success");
      })
      .catch((error) => {
        alert("there was an error in adding the news");
      });
  };

  return (
    <div className="mt-5 p-10">
      <h1 className="text-center text-3xl">MEDIA BLOG</h1>
      <div className="m-auto p-10">
        <form onSubmit={handleSubmit}>
          <div className="text-center   m-10">
            <input
              className="p-2 text-center border-2  border-black "
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="Enter the title of the news"
            />
          </div>
          <div className="text-center  m-10 ">
            <input
              type="text"
              className="p-2 text-center border-2 border-black"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              placeholder="Enter the  content the news"
            />
          </div>

          <div className="text-center  m-10">
            <button className="border-2 px-10 py-5  text-xl border-blue-300 bg-blue-500 rounded-2xl">
              add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;

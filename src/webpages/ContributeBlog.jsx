import "./contributeblog.css";
import Header from '../Components/Header';
import axios from 'axios';
import { useState } from "react";

const API_URL = 'http://localhost:3000/posts';

function createPost(postData) {
  return axios.post(API_URL, postData)
    .then(response => {
      console.log('Post created:', response.data);
      // You can perform additional actions after creating the post
    })
    .catch(error => {
      console.error('Error creating post:', error);
      // Handle the error condition
    });
}

export default function Contribute() {
  const [formData, setFormData] = useState({
    title: '',
    imageURL: '',
    category: '',
    text: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    createPost(formData);
    window.location.href = '/allposts';
  };
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <>
      <Header />
      <div className="write">
        <img
          className="writeImg"
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80"
          alt=""
        />
        <form className="writeForm" onSubmit={handleSubmit}>
          <div className="writeFormGroup">
            {/* <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input id="fileInput" type="file" style={{ display: "none" }} /> */}
            <input
              className="writeInput"
              placeholder="Title"
              type="text"
              autoFocus={true}
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="writeFormGroup">
            <input
              className="writeImageURL"
              placeholder="Enter image URL"
              type="text"
              autoFocus={true}
              name="imageURL"
              value={formData.imageURL}
              onChange={handleInputChange}
            />
          </div>
          <div className="writeFormGroup">
            <input
              className="writeCategory"
              placeholder="Enter blog category: AI, Health, Ecommerce, Tech Support"
              type="text"
              autoFocus={true}
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              className="writeInput writeText"
              placeholder="Start writing here"
              type="text"
              autoFocus={true}
              name="text"
              value={formData.text}
              onChange={handleInputChange}
            />
          </div>
    
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </form>
      </div>
    </>
  );
}

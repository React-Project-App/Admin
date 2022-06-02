import React, { useState } from "react";
// import {CKEditor} from "@ckeditor/ckeditor5-react";
// import classNameicEditor from "@ckeditor/ckeditor5-build-classNameic";

import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { AddSinglePost } from "../../Actions/Post";
import { authAdmin } from "../../FireBaseLoginConfig/FirebaseLoginConfig";

const AddPost = () => {
  const dispatch = useDispatch();
  
  const [title, setTitle] = useState("");
  const [Photo, setPhoto] = useState("");
  const [intro, setIntro] = useState("");
  const [article, setArticle] = useState("");
  const Show = intro && article && title && Photo;

  const uploadMinuature = (e) => {
    const formData = new FormData();
    formData.append("file", e);
    formData.append("upload_preset", "duvnigx5");

    axios
      .post("https://api.cloudinary.com/v1_1/dizlyig0d/image/upload", formData)
      .then((res) => {
        setPhoto(res.data.secure_url);
        toast.success("Image Uploaded");
      });
  };
  const addPost = () => {
    const post = {
      Article: article,
      Introduction:intro,
      Auteur: authAdmin.currentUser.displayName,
      Title: title,
      Photo,
      DatePost: new Date(Date.now()),
    };

    dispatch(AddSinglePost(post));
    setArticle("");
    setIntro("");
    setTitle("");
    setPhoto("");
  };
  return (
    <div className="container">
      <h1 className="mt-5 fw-bold">Add post</h1>

      <div className="row">
        <div className="col-md-3 mb-3 col-sm-12">
          <p className="fw-bold mt-3">Add the post Title</p>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="form-control"
            name=""
            id=""
            aria-describedby="helpId"
            placeholder=""
          />
          <p className="fw-bold mt-3">Add the post Minuature</p>
          <input
            onChange={(e) => {
              uploadMinuature(e.target.files[0]);
            }}
            accept="image/*"
            className="form-control "
            type="file"
            id="formFile"
          />
          {Photo && <img src={Photo} className="upload me-3 mt-3" alt="" />}
        </div>
        <div className="col-md-10 col-sm-12">
         <p className="fw-bold mt-3">Add Introduction</p>

          {/* <CKEditor
            initData={<p>Write your post here !!!!!!!!!</p>}
            onChange={(e) => setData(ReactHtmlParser(e.editor.getData()))}
          /> */}
          <textarea  className="form-control h-50"
            onChange={(e) => setIntro(e.target.value)}
            placeholder="Write Your intro..."
          />

          <p className="fw-bold mt-3">Add article</p>
       
{/* <CKEditor
  initData={<p>Write your post here !!!!!!!!!</p>}
  onChange={(e) => setData(ReactHtmlParser(e.editor.getData()))}
/> */}
          <textarea  className="form-control h-75"
            onChange={(e) => setArticle(e.target.value)}
            placeholder="Write Your article..."
          />
        
          {/* <p className="text-muted mt-3">Post Preview</p> */}
          {/* <div>{data}</div> */}

          {Show && (
            <button
              type="button"
              className="btn btn-primary mb-3 adp shadow-none"
              onClick={() => addPost()}
            >
              Add post
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddPost;

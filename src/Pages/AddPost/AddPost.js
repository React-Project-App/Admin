import React ,{useState}from 'react'
// import {CKEditor} from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from 'ckeditor4-react';
import ReactHtmlParser,{convertNodeToElement, htmlparser2, processNodes} from 'react-html-parser'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { AddSinglePost } from '../../Actions/Post';





const AddPost = () => {
 const dispatch = useDispatch()
  const [data, setData] = useState('');
  const [ title, setTitle ] = useState('');
  const [Photo, setPhoto] = useState('')

  const Show =data && title && Photo 


  const uploadMinuature=(e)=>{
    const  formData=new FormData();
     formData.append("file",e);
      formData.append("upload_preset","duvnigx5");
     
      axios.post("https://api.cloudinary.com/v1_1/dizlyig0d/image/upload",formData).then((res)=>{


        setPhoto(res.data.secure_url);
      toast.success("Image Uploaded");
      })
  }
  const addPost= ()=>{
const post={

  Article : JSON.stringify( data)
  ,Auteur :"Duy"
  ,Title :title
  ,Photo
  ,DatePost:new Date(Date.now())
}

    dispatch(AddSinglePost(post))
    setData("")
    setTitle("")
    setPhoto("")


    
    
  }
  return (
    <div  className='container'  >
        <h1  className='mt-5 fw-bold'>Add A post</h1>

      <div className='row'>
        <div className='col-md-3 mb-3 col-sm-12'>



       
<p className='fw-bold mt-3'>Add the post Title</p> 
  <input type="text"
  onChange={e=>setTitle(e.target.value)}
  value={title}
    class="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
    <p className='fw-bold mt-3'>Add the post Minuature</p> 
 <input
         onChange={(e) => {
           uploadMinuature(e.target.files[0])


             
           
           
         }}
         accept="image/*"
         className="form-control "
         type="file"
         
         id="formFile"
       />
          {Photo &&<img src={Photo} className="upload me-3 mt-3" alt="" />}   
 

        </div>
      <div className='col-md-12 col-sm-12'>
        
      <p className='fw-bold mt-3'>Add the Blog Content</p> 

    <CKEditor 
    
    
    
    initData={<p>Write your post here !!!!!!!!!</p>}
    onChange={e=>setData(  ReactHtmlParser(e.editor.getData()))} 
    
    
    />
    <p className='text-muted mt-3'>Post Preview</p>
    <div >
    {data}
    </div>
        


       {Show && 
        <button type='button'
         class="btn btn-primary mb-3 adp shadow-none"
         onClick={ ()=>addPost()}>Add post</button> 
        
        }

</div>
      </div>
        
     
    </div>
  )
}

export default AddPost

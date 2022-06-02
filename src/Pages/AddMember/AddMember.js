  import axios from 'axios'
  import React ,{useState}from 'react'
  import { useDispatch } from 'react-redux'
  import { toast } from 'react-toastify'
  import { AddSingleMember } from '../../Actions/AddMember'

const AddMember = () => {

    const [Function, setFunction] = useState('')
    const [FullName, setFullName] = useState('')
    const [Photo, setPhoto] = React.useState('')
    const [Sentence, setSentence] = useState('')
    const [Facebook, setFacebook] = useState('')
    const [Instagram, setInstagram] = useState('')
    const [Linkden, setLinkedin] = useState('')
    const [Github, setGithub] = useState('')
    const Show=Function && FullName && Photo && Sentence && Facebook && Instagram && Linkden && Github
     
    const dispatch =useDispatch();
   const AddMember = () => {
     const Member ={
      FullName,
      Photo,
      Sentence,
      Function,
      Social:{
        Facebook,
        Instagram,
        Linkden,
        Github
      }
     }

     dispatch(AddSingleMember(Member))
     

   
   }
   const UploadImg =(e)=>{
     console.log(e)
    const formData = new FormData();
    formData.append("file", e);
    formData.append("upload_preset", "duvnigx5");
 
    axios
      .post("https://api.cloudinary.com/v1_1/dizlyig0d/image/upload", formData)
      .then((res) => {
        setPhoto(res.data.secure_url);
        toast.success("Image Uploaded");
      });
   } 

  return (
    <div  className='container'  >
    <h1  className='mt-5 fw-bold'>Add A Member</h1>

  <div className='row'>
    
  
      <div className="col-md-6 col-sm-12 mt-4">
             <p className='text-muted'> Your fullName :</p>  
          <input type="text" className='form-control w-75'   onChange={(e)=>setFullName(e.target.value)} />
          <p className='text-muted mt-2'> Your Fonction :</p>  
          <input type="text" className='form-control w-75'  onChange={(e)=>setFunction(e.target.value)}  />
          <p className='text-muted mt-2'>Tell us about yourselfe :</p>  
          <textarea  className='form-control w-75'  maxLength={50} onChange={(e)=>setSentence(e.target.value)}></textarea>
          <p className='text-muted mt-2'> Your Photo</p>  
          <input type="file" className='form-control w-75' onChange={(e)=> UploadImg(e.target.files[0]) }  />
          {Photo && <img src={Photo} className="upload me-3 mt-3" alt="" />}

      </div>
      <div className="col-md-6 col-sm-12">
          <p className='fw-bold'>Social </p>
          <p className='text-muted'>Facebook :</p>
          <input type="text" className='form-control'  onChange={(e)=>setFacebook(e.target.value)} />

          <p className='text-muted'>Instagram :</p>
          <input type="text" className='form-control'  onChange={(e)=>setInstagram(e.target.value)} />

          <p className='text-muted'>Linkden :</p>
          <input type="text" className='form-control'  onChange={(e)=>setLinkedin(e.target.value)} />

          <p className='text-muted'>Github :</p>
          <input type="text" className='form-control'  onChange={(e)=>setGithub(e.target.value)} />

          </div>  
          <div   className="col-md-6 col-sm-12">
        { Show &&  <button
              type="button"
              className="btn btn-primary mb-3 adp shadow-none mt-5"
              onClick={()=>AddMember()}
            >
              Add Member
            </button>}

          </div>

  </div>
    
 
</div>
  )
} 

export default AddMember

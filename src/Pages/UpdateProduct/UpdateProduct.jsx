import axios from 'axios';
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { UpdateProduct } from '../../Actions/AddProduct';
import { GetCategories } from '../../Actions/Categorie';
import { GetProduct } from '../../Actions/ListProduct'
import { storage } from '../../FirebaseConfig/FirebaseConfig';
import AddProduct from '../../Reducers/AddProduct';

function UpdateProductt() {
  const {Id}=useParams();
  const dispatch=useDispatch()
  useLayoutEffect(_=>{
    dispatch(GetProduct(Id))
    dispatch(GetCategories())
  },[])
  // const [counter,setcounter]=useState(0)
  const [title, setTitle] = useState("");
   const [prevprice, setPrevprice] = useState(0);
   const [curprice, setCurprice] = useState(0);
   const [description, setDescription] = useState("");
   const [images, setImages] = useState([]);
  //  const [LocalImages, setLocalImages] = useState([]);
   const [category, setCategory] = useState("");
  //  const [files, setFiles] = useState([]);
   const [featured, setFeatured] = useState(false);
// const tab=[]
  const prod=useSelector(state=>state.ListProduct)
  const categories=useSelector(state=>state.Categories)
   const {Title,Description,Curprice,Prevprice ,Photo,Category ,MorePhoto,Featured}=prod
  // useEffect(()=>{
  //   if(prod){
      
  //    }
  // },[prod])
   
   
   

  // console.log(LocalImages);

  const UpoloadImges = (file) =>  {
        
    const  formData=new FormData();
    formData.append("file",file.target.files[0]);
     formData.append("upload_preset","duvnigx5");
    
     axios.post("https://api.cloudinary.com/v1_1/dizlyig0d/image/upload",formData).then((res)=>{


     setImages((prev)=>[...prev ,res.data.secure_url]);
     console.log(res.data.secure_url)
     toast.success("Image Uploaded");
     })




  };

  const UpdateSingleProduct = () => {
    if (
      !title ||
      !prevprice ||
      !curprice ||
      !description ||
      !category ||
      !images
      || images.length <3
      
    ) {
      toast.warning("Please fill all the fields");
    } else {
      const product = {
        Title:title,
        Prevprice:prevprice,
        Curprice:curprice,
        Description:description,
        Category:category,
        Photo: images[0],
        MorePhoto: images,
        Featured:featured,
        
      };
      // console.log(product);
      dispatch(UpdateProduct(Id,product));
    }
  };
  if (prod.length>0) {
    setTitle(Title);setCurprice(Curprice);setPrevprice(Prevprice);setDescription(Description);
        setCategory(Category);setImages(MorePhoto);setFeatured(Featured)
  }
  return (Title)?(
      
    <main className="container">
  <h2 className=" text-center fw-bold p-3 h2">
    Update Product
  </h2>
  <div className="container justify-content-center d-lg-flex d-sm-block ">
    <form className="row  all pt-5 ms-1 justify-content-center d-flex col-lg-7">
        <div className="col-lg-10 col-sm-12 mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Product title</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="title" required="required" 
            value={Title}
          onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="col-lg-5 col-sm-6 mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Previous price</label>
          <input type="number" min="0" className="form-control" id="exampleFormControlInput1" placeholder="Dhs" required="required" 
          value={Prevprice}
          onChange={(e) => setPrevprice(e.target.value)}
          />
        </div>
        <div className="col-lg-5 col-sm-6 mb-3 ">
          <label htmlFor="exampleFormControlInput1" className="form-label col ">Current price</label>
          <input type="number" min="0" className="form-control" id="exampleFormControlInput1" placeholder="Dhs" required="required" 
          value={Curprice}
          onChange={(e) => setCurprice(e.target.value)}
          />
        </div>
        <div className="mb-3 col-lg-10 col-sm-12">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Type here" required="required" 
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <label htmlFor="" className="col-lg-10 col-sm-12 pb-2 form-label">Images</label>
        <div className="mb-3 col-lg-10 col-sm-10 col-md-10">
          <div className="mb-3">
            <input className="form-control" type="file"  id="formFile"
            onChange={(e) => {
              UpoloadImges(e);
          }}
            />
          </div>
          <div className='d-flex align-items-center '>
          
          {/* <img className=" upload me-3"  src={Photo} alt=""/> */}
             {  images && images.map((picture,key)=>{
              return (
                <img className=" upload me-3"  src={picture} alt="" key={key}/>
              )
            })
            }
            <button type='button'
          className="btn btn-primary  adp shadow-none w-25 me-3"
          onClick={()=>setImages([])}
          >Clear</button>
          </div>
         
        </div> 
        <div className="col-lg-10 col-sm-12 mb-2">
          <label htmlFor="inputState" className="form-label">Category</label>
          <select id="inputState " className="form-select w-50 mb-3" required="required"
            onChange={(e) => setCategory( e.target.value)}
          >
          <option  >{Category?Category:"Choisir..."}</option>
            {
             (categories.length>0)&&(
                categories.map((cat,key)=>{
                  return(
                        <option defaultValue={cat.CatName} key={key}>{cat.CatName}</option>
                  )
                })
              )
            }
          </select>
          <div className="form-check form-switch d-flex gap-5  col-lg-5 col-sm-6 p-0">
            <p  className="fw-bold ">Featured</p>
           {featured?
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked  onChange={(e)=>setFeatured(e.target.checked)} />
          :
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"   onChange={(e)=>setFeatured(e.target.checked)} />
          }
        </div>
        </div>
    
 
        
       
         
        {/* <div className="col-lg-10 col-sm-12 p-3 mb-2 ps-2">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck"/>
            <label className="form-check-label" for="gridCheck">
              Publish on site
            </label>
          </div>
        </div> */}
        <div className="col-lg-10 col-sm-12">
          <button type='button' className="btn btn-primary mb-3 adp shadow-none"
          onClick={()=>UpdateSingleProduct()}
          >Update Product</button>
        </div>
    </form>
  </div>
</main>
  ):(
    <div className='d-flex justify-content-center align-items-center load'>
    <div className='loader'></div>
        </div>
)

}

export default UpdateProductt

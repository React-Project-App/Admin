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
  const [title, setTitle] = useState();
   const [prevprice, setPrevprice] = useState();
   const [curprice, setCurprice] = useState();
   const [description, setDescription] = useState();
   const [images, setImages] = useState([]);
  //  const [LocalImages, setLocalImages] = useState([]);
   const [category, setCategory] = useState();
  //  const [files, setFiles] = useState([]);
   const [featured, setFeatured] = useState(false);
// const tab=[]
  const prod=useSelector(state=>state.ListProduct)
  const categories=useSelector(state=>state.Categories)
   const {Title,Description,Curprice,Prevprice ,Photo,Category ,MorePhoto,Featured}=prod
  useEffect(()=>{
    if(prod){
      setTitle(Title);setCurprice(Curprice);setPrevprice(Prevprice);setDescription(Description);
      setCategory(Category);setImages(MorePhoto);setFeatured(Featured)
     }
  },[prod])
   
   
   

  // console.log(LocalImages);

  const UpoloadImges = (file) =>  {
        
    const  formData=new FormData();
    formData.append("file",file.target.files[0]);
     formData.append("upload_preset","duvnigx5");
    
     axios.post("https://api.cloudinary.com/v1_1/dizlyig0d/image/upload",formData).then((res)=>{


     setImages((prev)=>[...prev ,res.data.secure_url]);
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
      console.log(product);
      dispatch(UpdateProduct(Id,product));
    }
  };

  return (
      
    <main class="container">
  <h2 class=" text-center fw-bold p-3 h2">
    Update Product
  </h2>
  <div class="container justify-content-center d-lg-flex d-sm-block ">
    <form class="row  all pt-5 ms-1 justify-content-center d-flex col-lg-7">
        <div class="col-lg-10 col-sm-12 mb-3">
          <label for="exampleFormControlInput1" class="form-label">Product title</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="title" required="required" 
            Value={Title}
          onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div class="col-lg-5 col-sm-6 mb-3">
          <label for="exampleFormControlInput1" class="form-label">Previous price</label>
          <input type="number" min="0" class="form-control" id="exampleFormControlInput1" placeholder="Dhs" required="required" 
          Value={Prevprice}
          onChange={(e) => setPrevprice(e.target.value)}
          />
        </div>
        <div class="col-lg-5 col-sm-6 mb-3 ">
          <label for="exampleFormControlInput1" class="form-label col ">Current price</label>
          <input type="number" min="0" class="form-control" id="exampleFormControlInput1" placeholder="Dhs" required="required" 
          defaultValue={Curprice}
          onChange={(e) => setCurprice(e.target.value)}
          />
        </div>
        <div class="mb-3 col-lg-10 col-sm-12">
          <label for="exampleFormControlTextarea1" class="form-label">Description</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Type here" required="required" 
          defaultValue={Description}
          onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <label for="" class="col-lg-10 col-sm-12 pb-2 form-label">Images</label>
        <div class="mb-3 col-lg-10 col-sm-10 col-md-10">
          <div class="mb-3">
            <input class="form-control" type="file"  id="formFile"
            onChange={(e) => {
              UpoloadImges(e);
          }}
            />
          </div>
          <div className='d-flex align-items-center '>
          
          {/* <img class=" upload me-3"  src={Photo} alt=""/> */}
            {images.map(picture=>{
              return (
                <img class=" upload me-3"  src={picture} alt=""/>
              )
            })
            }
            <button type='button'
          class="btn btn-primary  adp shadow-none w-25 me-3"
          onClick={()=>setImages([])}
          >Clear</button>
          </div>
         
        </div> 
        <div class="col-lg-10 col-sm-12 mb-2">
          <label for="inputState" class="form-label">Category</label>
          <select id="inputState " class="form-select w-50 mb-3" required="required"
            onChange={(e) => setCategory( e.target.value)}
          >
          <option selected >{Category?Category:"Choisir..."}</option>
            {
             (categories.length>0)&&(
                categories.map(cat=>{
                  return(
                        <option value={cat.CatName}>{cat.CatName}</option>
                  )
                })
              )
            }
          </select>
          <div class="form-check form-switch d-flex gap-5  col-lg-5 col-sm-6 p-0">
            <p  className="fw-bold ">Featured</p>
           {featured?
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked  onChange={(e)=>setFeatured(e.target.checked)} />
          :
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"   onChange={(e)=>setFeatured(e.target.checked)} />
          }
        </div>
        </div>
    
 
        
       
         
        {/* <div class="col-lg-10 col-sm-12 p-3 mb-2 ps-2">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck"/>
            <label class="form-check-label" for="gridCheck">
              Publish on site
            </label>
          </div>
        </div> */}
        <div class="col-lg-10 col-sm-12">
          <button type='button' class="btn btn-primary mb-3 adp shadow-none"
          onClick={()=>UpdateSingleProduct()}
          >Update Product</button>
        </div>
    </form>
  </div>
</main>
  )
}

export default UpdateProductt

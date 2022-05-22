import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCategories  } from "../../Actions/Categorie";
import { ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
import { db, storage } from "../../FirebaseConfig/FirebaseConfig";
import { toast } from "react-toastify";
import { AddProduct } from "../../Actions/ListProduct";
import axios, { Axios } from "axios";



function AddProducts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCategories());
  }, []);

  const Categories = useSelector((state) => state.Categories);

  const [Title, setTitle] = useState();
  const [Prevprice, setPrevprice] = useState();
  const [Curprice, setCurprice] = useState();
  const [Description, setDescription] = useState();
  const [Images, setImages] = useState([]);
  const [LocalImages, setLocalImages] = useState([]);
  const [Category, setCategory] = useState();
  const [files, setFiles] = useState([]);
  const [Featured, setFeatured] = useState(false);
  const [Task, setTask] = useState([]);



  const UpoloadImges = (file) =>  {

    
     const  formData=new FormData();
     formData.append("file",file.target.files[0]);
      formData.append("upload_preset","duvnigx5");
     
      axios.post("https://api.cloudinary.com/v1_1/dizlyig0d/image/upload",formData).then((res)=>{


      setImages((prev)=>[...prev ,res.data.secure_url]);
      toast.success("Image Uploaded");
      })



  };



  const GetUrls = (uploadTask) => {

      uploadTask.map(item=>{
        item.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            toast.error("Error in uploading");
          },
             async (res) => {
             await  getDownloadURL(item.snapshot.ref).then((url) => {
              setImages((prev) => [...prev, url]);
              // localStorage.setItem("Images", Images);
                toast.success("Image Uploaded");
              console.log(url);
            });
          }
        );
      })
 
  }
  const AddSingleProduct = () => {
    if (
      !Title ||
      !Prevprice ||
      !Curprice ||
      !Description ||
      !Category ||
      !Images
      || Images.length <3
      
    ) {
      toast.warning("Please fill all the fields");
    } else {

      console.log(Images);
      const product = {
        Title,
        Prevprice,
        Curprice,
        Description,
        Category,
        Photo: Images[0],
        MorePhoto: Images,
        Featured,
      };

      console.log(product);
      dispatch(AddProduct(product));
    }
  };

  return (
    <main className="container">
      <h2 className=" text-center fw-bold p-3 h2">Create Product</h2>
      <div className="container justify-content-center d-lg-flex d-sm-block ">
        <form className="row  all pt-5 ms-1 justify-content-center d-flex col-lg-7">
          <div className="col-lg-10 col-sm-12 mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Product title
            </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="title"
              required="required"
            />
          </div>
          <div className="col-lg-5 col-sm-6 mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Previous price
            </label>
            <input
              onChange={(e) => setPrevprice(e.target.value)}
              type="number"
              min="0"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Dhs"
              required="required"
            />
          </div>
          <div className="col-lg-5 col-sm-6 mb-3 ">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label col "
            >
              Current price
            </label>
            <input
              onChange={(e) => setCurprice(e.target.value)}
              type="number"
              min="0"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Dhs"
              required="required"
            />
          </div>
          <div className="mb-3 col-lg-10 col-sm-12">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Description
            </label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Type here"
              required="required"
            />
          </div>
          <label className="col-lg-10 col-sm-12 pb-2 form-label">Images</label>
          <div className="mb-3 col-lg-10 col-sm-10 col-md-10">
            <div className="mb-3">
              <input
                onChange={(e) => {
                    
                  
                    UpoloadImges(e);
                    
                  
                }}
                accept="image/*"
                className="form-control"
                type="file"
                
                id="formFile"
              />
              {/* <button  type='button'   onClick={()=>  UpoloadImges()   } className="btn  btn-primary fw-bold   mt-2"   > */}

              {/* Upload
              </button> */}
            </div>
            {Images.map((image) => {
              return <img src={image} className="upload me-3" alt="" />;
            })}
          </div>
          <div className="col-lg-10 col-sm-12 mb-2">
            <label htmlFor="inputState" className="form-label">
              Category
            </label>
            <select
              id="inputState "
              className="form-select w-50 mb-3"
              required="required"
              onChange={(e) => setCategory( e.target.value)}
              
            >
              <option value="Choose...">Choose...</option>

              {Categories.map(({CatName}) => {
                return (
                  <option value={CatName} >
                    {CatName}
                  </option>
                );
              })}
            </select>
            <div class="form-check form-switch d-flex gap-5">
            <p  className="fw-bold ">Featured</p>

          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"   onChange={(e)=>setFeatured(e.target.checked)} />
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
            <button
              type="button"
              className="btn btn-primary mb-3 adp shadow-none"
              onClick={()=>AddSingleProduct()}
            > 
              Add Product
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default AddProducts;

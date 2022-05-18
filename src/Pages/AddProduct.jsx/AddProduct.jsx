import React from 'react'

function AddProduct() {
  return (
      
    <main class="container">
  <h2 class=" text-center fw-bold p-3 h2">
    Create Product
  </h2>
  <div class="container justify-content-center d-lg-flex d-sm-block ">
    <form class="row  all pt-5 ms-1 justify-content-center d-flex col-lg-7">
        <div class="col-lg-10 col-sm-12 mb-3">
          <label for="exampleFormControlInput1" class="form-label">Product title</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="title" required="required"/>
        </div>
        <div class="col-lg-5 col-sm-6 mb-3">
          <label for="exampleFormControlInput1" class="form-label">Previous price</label>
          <input type="number" min="0" class="form-control" id="exampleFormControlInput1" placeholder="Dhs" required="required"/>
        </div>
        <div class="col-lg-5 col-sm-6 mb-3 ">
          <label for="exampleFormControlInput1" class="form-label col ">Current price</label>
          <input type="number" min="0" class="form-control" id="exampleFormControlInput1" placeholder="Dhs" required="required"/>
        </div>
        <div class="mb-3 col-lg-10 col-sm-12">
          <label for="exampleFormControlTextarea1" class="form-label">Description</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Type here" required="required"/>
        </div>
        <label for="" class="col-lg-10 col-sm-12 pb-2 form-label">Images</label>
        <div class="mb-3 col-lg-10 col-sm-10 col-md-10">
          <div class="mb-3">
            <input class="form-control" type="file" multiple id="formFile"/>
          </div>
          <img class=" upload me-3"  src="IMAGE/4 (1).jpg" alt=""/>
        </div> 
        <div class="col-lg-10 col-sm-12 mb-2">
          <label for="inputState" class="form-label">Category</label>
          <select id="inputState " class="form-select w-50 mb-3" required="required">
            <option selected>Choose...</option>
            <option>Category 1</option>
            <option>Category 2</option>
            <option>Category 3</option>
          </select>
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
          <button type="submit" class="btn btn-primary mb-3 adp shadow-none">Add Product</button>
        </div>
    </form>
  </div>
</main>
  )
}

export default AddProduct

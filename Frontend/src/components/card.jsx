import React from "react";


const card = ({title,price,image}) => {
  return (
    <>
      <div className="d-flex m-3">
      <div className="card wd-4 p-2 m-3" style={{ width: "20rem",height:"20rem"}}>
        <img src={image} className="card-img-top" alt="..." id="cardimg" />
        <div className="card-body">
        <h5>{title}<sup className="text text-danger ">free</sup></h5>
          <p className="card-text fs-10">
            Some quick example text to butild on the card title and make up the
            bulk of the card's content.
          </p>
          </div>
        <div className="d-flex justify-content-between">
          <button className='btn btn-secondary mb-5'>{price}</button>
          <button className="btn btn-primary mb-5">Buy Now</button>
        </div>
       </div>
    </div>

    </>
  );
};

export default card;

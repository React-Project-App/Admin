import React from "react";
import { Link, useNavigate } from "react-router-dom";


const Contact = ({ Name, Answer, Email,Messages }) => {
  console.log(Answer);
  const navigate=useNavigate();

  return (
    <tr className="position-relative">
      <td>{Name}</td>

      <td>{Email}</td>
      <td>
        {/* <Link to={`Messages/${Email}`}   class="position-absolute  translate-middle badge rounded-pill bg-secondary top-50 bg-danger text-decoration-none text-white">Answer</Link> */}
        {Answer === "NotViewed" ? (
          <button
          type="button"
          onClick={() =>navigate(`/Answer/${Email}`)} 
            class="btn btn-primary position-relative rounded-pill fw-bold  text-decoration-none text-white text-decoration-none"
            style={{ width: "100px ", height: "35px" }}
          >
            View
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ">
              {Messages} <span class="visually-hidden">unread messages</span>
            </span>
          </button>
        ) : (
          <a
            class="btn btn-success fw-bold position-relative rounded-pill  text-decoration-none text-white "
            style={{ width: "100px ", height: "35px" }}
          >
            Viewed
           
          </a>
        )}
      </td>
    </tr>
  );
};

export default Contact;

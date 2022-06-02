import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GetMessages } from "../../Actions/GetMessages";
import Contact from "../../Component/SingleComment/Contact";

const Messages = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetMessages());
  }, []);
  const contacts = useSelector((state) => state.Messages);
  console.log(contacts);
  return contacts.length > 0 ? (
    <main className="container d-flex  flex-column p-2 w-100">
  <h2 className=" ps-4 text-center fw-bold">List Products</h2>
  <div className="  d-flex  flex-column  pt-3 w-100 container h-auto">
    <table className="table "> 
    <tbody className="listor text-center "> 
        <tr> 
          <th>Name</th> 
          <th>Email</th>   
          <th>View</th>
        </tr>    
        {contacts.map((contact) => {
          return (
            <Contact
              Name={contact.Name}
              Answer={contact.Answer}
              Email={contact.Email}
               Messages={contact.Message.length}
              
            />
          );
        })}
      </tbody>    
    </table>
  </div>
</main>
  ) : (
    <div className="d-flex justify-content-center align-items-center load">
      <div className="loader"></div>
    </div>
  );
};

export default Messages;

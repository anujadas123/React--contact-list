import React, { useEffect, useState } from 'react'
import '../App.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getContact, EditContact } from '../Redux/UserDetails';

const Edit = () => {

  const dispatch=useDispatch()
  const{id}=useParams();

  const contacts=useSelector((state)=> state.app.contacts);
  useEffect(()=>{
    dispatch(getContact())
  },[dispatch])
  const contact=contacts.find((cont)=>cont._id===id)

  const [firstname,setFirstname]=useState(contact.firstname)
  const [secondname,setSecondname]=useState(contact.secondname)
  const [phonenumber,setPhonenumber]=useState(contact.phonenumber)
  const [email,setEmail]=useState(contact.email)


  const navigate = useNavigate();



  const handleUpdate =()=>{
    try{
      dispatch(EditContact({id, firstname,secondname,email,phonenumber}));
      dispatch(getContact())
      navigate('/')
    }
    catch(err){
      console.log(err);
    }
  
  }

  return (
    <div className='editlist'>
      <form>
      <div className='inputsection'>
      <h3>Edit Contact</h3>
      <div className='inpput'>
      <label htmlFor="form-control">
                    First Name<span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter a firstname"
                    id="firstname"
                    value={firstname}
                    onChange={(e)=>setFirstname(e.target.value)}
                    
                  />

                  <label htmlFor="form-control">
                    Last Name<span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter a lastname"
                    id="secondname"
                    value={secondname}
                    onChange={(e)=>setSecondname(e.target.value)}
                  />

                  <label htmlFor="form-control">
                    Phone Number<span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter a number"
                    id="phonenumber"
                    value={phonenumber}
                    onChange={(e)=>setPhonenumber(e.target.value)}
                  />

                  <label htmlFor="form-control">
                    Email<span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter a email"
                    id="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />

              <div className='editbtns'>
                <buttton className='closebtns'>Close</buttton>
                <buttton className='editbtn' type='button' onClick={handleUpdate} >Update</buttton>
              </div>
              </div>
              </div>

    </form>
    </div>
  )
}

export default Edit




































































































// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// const Edit = ({showEdit , setShowedit}) => {
// //   const [Editval, setedit] = useState(!false);
// //   console.log("edit",Editval);

//   const editbtn = () => {
//     setShowedit(showEdit)
//   };


//   return (

//     <div className="editcontact">

//         <div
//           className="modal show"
//           style={{ display: "block", position: "initial" }}
//         >
//           <Modal.Dialog>
//             <Modal.Header closeButton onClick={editbtn}>
//               <Modal.Title>Edit Contact</Modal.Title>
//             </Modal.Header>

//             <Modal.Body>
//               <div className="rowsec">
//               <label htmlFor="form-control">
//                     First Name<span>*</span>
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="enter a firstname"
//                     id="firstname"
                   
//                   />

//                   <label htmlFor="form-control">
//                     Last Name<span>*</span>
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="enter a lastname"
//                     id="secondname"
                    
//                   />

//                   <label htmlFor="form-control">
//                     Phone Number<span>*</span>
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="enter a number"
//                     id="phonenumber"
                    
//                   />

//                   <label htmlFor="form-control">
//                     Email<span>*</span>
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="enter a email"
//                     id="email"
                    
//                   />
                  
//               </div>
            
//             </Modal.Body>

//             <Modal.Footer>
//               <Button variant="secondary" >
//                 Close
//               </Button>
//               <Button variant="primary" type="submit">
//                 EditPost
//               </Button>
//             </Modal.Footer>
//           </Modal.Dialog>
//         </div>
//     </div>
//   );
// };

// export default Edit;

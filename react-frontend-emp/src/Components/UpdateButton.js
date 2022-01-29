import React from 'react';
import { useParams, useNavigate } from "react-router-dom";

function UpdateButton() {
  let navigate = useNavigate();

  //navigate(`/stuff/${newRecord.id}`);


    
  return (
  <button className='btn btn-danger'  onClick={()=> navigate("/employees")}   style={{marginLeft:"10px"}}>Update</button>);
}

export default UpdateButton;

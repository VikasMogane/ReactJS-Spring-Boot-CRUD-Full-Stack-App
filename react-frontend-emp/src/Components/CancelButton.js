import React from 'react';
import { useParams, useNavigate } from "react-router-dom";

function CancelButton() {
  let navigate = useNavigate();


    
  return (<button className='btn btn-danger'  onClick={()=> navigate("/employees")}   style={{marginLeft:"10px"}}>Cancel</button>);
}

export default CancelButton;

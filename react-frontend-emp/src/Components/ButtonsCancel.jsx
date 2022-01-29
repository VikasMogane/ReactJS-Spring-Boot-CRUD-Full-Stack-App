import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ButtonsCancel = () => {
   
   const navigate = useNavigate();
    return (
        <div>Cancel
          <button className='btn btn-danger'  onClick={() => navigate('/employees',{state:{name:"React Js"}})} 
                            style={{marginLeft:"10px"}}>Cancel</button>
        </div>
    )
}

export default ButtonsCancel

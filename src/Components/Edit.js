import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { editData } from '../Feature/slice';


function Edit() {
   const location = useLocation(); // returns the location object 
   const navigate = useNavigate();
   const index = (location.state.data);
   const dispatch = useDispatch();
   const array = useSelector((state)=>state.dataKey); // 

    // array of objects : context.entries
    // function         : context.updateFunction


    // the object in which the changes will be done 
    const newObj = {
        name : array[index].name,
        age : array[index].age,
        course : array[index].course,
        batch : array[index].batch
        
    }
    
    console.log("Index : " + index)
    const handleChange = (event) =>
    {
        newObj[event.target.name] = event.target.value;
       // console.log(newObj);     
    }

   const handleUpdate = (event) =>{
       // console.log(context.entries[index])
       dispatch(editData({newObj,index}));
       // payload : parameter passed with the action 
    //    context.updateFunction(
    //     (prevObj)=>{
    //         prevObj[index] = newObj;
    //         return (prevObj) //  updated prevObj is the new state 
    //     }
    //    );
       navigate('/table');
    }


   return (
    <>
    <div className='input-edit'>
        <span>
            {/* <div> */}
            
        <label className='forname' htmlFor='text'>Name</label>
        <input onChange={handleChange} name='name' placeholder= {array[index].name}></input>
        {/* </div> */}
         </span>

        <label className='forage lable' htmlFor='text'>Age</label>
        <input onChange={handleChange} name='age'   placeholder= {array[index].age}></input>
       
        <br/><br /><br />

        <label className='forcourse lable' htmlFor='text'>Course</label>
        <input onChange={handleChange} name='course'   placeholder= {array[index].course}></input>
        
        <label className='forbatch lable' htmlFor='text'>Batch</label>
        <input onChange={handleChange} name='batch'   placeholder= {array[index].batch}></input>
        </div>
        <br/>
        <div className='update'>
        <button className='edit-update' onClick={handleUpdate}>Update</button>
        </div>
    </>
  )
}

export default Edit;

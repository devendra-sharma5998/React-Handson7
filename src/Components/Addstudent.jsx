import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { addData } from '../Feature/slice';

const Addstudent = () => {

const navigate=useNavigate();
const dispatch=useDispatch()
navigate('/table')

const newObj2 = {
  name: "",
  age:"",
  course:"",
  batch:""
}
const handleChange = (event) =>
{
 
  newObj2[event.target.name] = event.target.value;
  console.log(newObj2);     
}


const AddStudentFun=(e)=>{
  e.preventDefault();
  dispatch(addData(newObj2))
  navigate('/table')

  };

  return (
    <div id="Main">
      {/* <div className='inputs'> */}
        {/* <div className='box'> */}
    <label htmlFor='name' className='forname' >Name</label>
    <input  name='name' id='addName'  onChange={handleChange}></input>
    {/* </div> */}
   
    {/* <div className='box'> */}
    <label htmlFor='age' className='forage lable'>Age</label>
    <input  name='age'   id='addAge' onChange={handleChange}></input>
    {/* </div> */}
    
    <br/><br /><br />
   
    {/* <div className='box'> */}
    <label htmlFor='course' className='forcourse lable'>Course</label>
    <input  name='course' id='addCourse' onChange={handleChange}></input>
    {/* </div> */}
   
    {/* <div className='box'> */}
    <label htmlFor='batch' className='forbatch lable'>Batch</label>
    <input  name='batch' id='addBatch' onChange={handleChange}></input>
    {/* </div> */}
   
    {/* </div> */}
 <br></br> 
 <div className='button'>
   <button className='btnforUpdateEdit' onClick={AddStudentFun}>Add</button>
 
 <Link to='/table'>
 <button className='btnforcancelEdit' >Cancel</button>
 </Link>
 </div>
 </div>
  )
}

export default Addstudent
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const handleAdd = ()=>
{
    console.log("Add called")
}

function Table() {
  const array = useSelector((state)=>state.dataKey); // 
  console.log(array)
  return (
    <>
    <div className='student-page'>
    <h1 style={{textAlign:"center"}}>Students List</h1>
    <Link to='/addstudent'>
    <button className='Add-New' onClick={handleAdd}>Add New Student</button>
    </Link>
    </div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        {
        array.map((item,index) => (
          // each item is an object
            <tr key={index}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.course}</td>
            <td>{item.batch}</td>
            <td>
              {/* Pass the ID of the row to fetch the data in the edit compoennt */}
                {console.log("Item.id : " + item.id)}
                <Link style={{color:"orange"}} to='/editStudent' state={{data:index}}>
                    Edit
                </Link> 
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
}

export default Table;
import React, { useState } from "react";
import axios from 'axios'

export const Admin = () => {
  const[name,setname]=useState('')
  const[marks,setmarks]=useState('')
  const[iq,setiq]=useState('')
  const[img,setimage]=useState('')
  const handlesignup=()=>{
    axios.post('http://localhost:3001/student',
    {"name":name,"marks":marks,"iq":iq,"img":img})
    .then(res=>console.log(res))
    .catch(err=>console.log(err))}
  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div>
       
    <form onSubmit={handlesignup}>
         
    <h1>User Details</h1>
        <label> Emp Name:</label>
        <input type='text' value={name} onChange={(e)=>{
            setname(e.target.value)}}/><br></br><br></br>
        <label>Emp id:</label>
        <input type='text' value={marks} onChange={(e)=>{
            setmarks(e.target.value)}}/><br></br><br></br>
         <label>Emp address</label>
          <input type='text' value={iq} onChange={(e)=>{
            setiq(e.target.value)}}/>
             <h2>Add Image:</h2>
             <input type='text' value={img} onChange={(e)=>{
            setimage(e.target.value)}}/><br></br><br></br>
    <button type='submit'>Submit</button><br></br><br></br>
    </form>
</div>  )
}

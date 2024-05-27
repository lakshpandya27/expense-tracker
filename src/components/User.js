import react ,{useState,useEffect} from 'react';
import './User.css';
import axios from 'axios';
export const User = () => {
  const[post,setpost]=useState([])
  useEffect(()=>{axios.get('http://localhost:3001/student').then(res=>{setpost(res.data)}).catch(err=>{console.log(err)})})
  return (
    <div>
      <div className='flex-container'>
        {post.map(x=>(<div className='flex-items'><img src={x.img} width={150} height={150} />
        <h1>{x.name}</h1>
        <p>{x.marks}</p>
        <p>{x.iq}</p>
        <button id='seemrk'>see details</button>
         </div>))}
      </div>
    </div>
  )
}

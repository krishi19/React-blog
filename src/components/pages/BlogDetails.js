import React, { useEffect,useState } from 'react'
import Image1 from "../../img-1.jpg";
import {UserContext, UserProvider} from "../../context/UserContext"
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import EditBlog from './EditBlog';
export default function BlogDetails(props) {
  const [data,setData]=useState(null)
  console.log(props)

  useEffect(()=>{
      setData(props.location.blogProp)
  },[props])
  // const data = props.location.blogProp;

  // console.log("Data",data)
  return (
    <div>
        <div className='container'>
      <div className='blog_detail'>
        <div className='detail_image'>
            <img src={data?.images[1]?.imageUrl}></img>
        </div>
        <div className='blog_date'>
            <p>{data?.createdAt}</p>
        </div>
        <div className='blog_detail'>
            <h2>{data?.title?data.title:""}</h2>
            <p>{data?.description?data?.description:""}</p>
        </div>
        <div className='blog_buttons'>

        <Link  to={{pathname: "/edit", blogProp : data}}  className='btn'><i class="fa-solid fa-pencil-alt"></i>Edit</Link>
        <Link  to={{pathname: "/delete", blogProp : data}}  className='btn'><i class="fa-solid fa-trash-alt"></i>Delete</Link>

            {/* <button className='btn'><i class="fa-solid fa-trash"></i>delete</button>
             */}
        </div>
      </div>
    </div>
    </div>

  )
}

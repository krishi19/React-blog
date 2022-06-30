import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Route } from 'react-router';
import http from "../../http_common";

function EditBlog(props) {
    const [data,setData]=useState(null)
    console.log(props)
  
    useEffect(()=>{
        setData(props.location.blogProp)
    },[props])
    console.log(data)
return <>
<h1>{data?.title}</h1>
<p>{data?.description}</p>
</>
}

export default EditBlog

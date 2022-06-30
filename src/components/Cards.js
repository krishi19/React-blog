import React, { useEffect, useState } from 'react';
import './Cards.css';
import CardItem from './CardItem';
import axios from 'axios';

function Cards() {

  const [blogs,setBlogs] = useState([]);

  const getAllBlogs = () => {
    axios.get("http://localhost:1234/blogs")
    .then((response) => {
       setBlogs(response.data.data);
    })
    .catch((error) => console.log(error))
  }

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div className='cards'>
      <h1>Read out these interesting Blogs!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        
          {blogs.map((blog, id) => {
            console.log('blog data : ', blog.images);
            return   <ul className='cards__items'>
            <CardItem
            src={blog.images.length > 0 ? blog.images[0].imageUrl : 'images/img-2.jpg'}
            title={blog.title}
            blog = {blog}
            description={blog.description}
            path={'/blogdetails/'+blog.id}
          /></ul>;
          })}

            
            
        </div>
      </div>
    </div>
  );
}

export default Cards;

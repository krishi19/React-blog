import React, {useState, axios} from 'react';
import '../../App.css';
import '../AddBlog.css';
import UploadService from '../../services/upload_files_services';
import http from "../../http_common";

export default function AddBlog({addBlogItem}) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImage] = useState([]);

  const handleTitleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionOnChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageOnChange =async (e) => {
    // setImage(e.target.value);
   const files = e.target.files;
   console.log(files);
  //  const formData = new FormData();
  //   formData.file = files[0];
  //   console.log(formData)
  // let uploadPromise = Promise();
    let imageNewArray = [];
   try{
    for(let i = 0; i<files.length; i++){
      const file = files[i];
      let data = await UploadService.upload(file, (event) => {
        // this.setState({
        //   progress: Math.round((100 * event.loaded) / event.total),
        // });
        console.log('upload image : ', event.loaded);
      });
      console.log('data upload image : ', data.data.data.fullPath);
      imageNewArray.push(data.data.data.fullPath);
    }
    setImage(imageNewArray);
    console.log('all image after upload : ', images, images.length);
   }catch(e){
    console.log('error store iamge: ' ,e );
   }

  };

  const handleSubmit = async (e) => {
    console.log("submitted : ", images);
    e.preventDefault();
    if (!title) return;
    let blogData = { title: title, description: description , writer: 'Dipak Shrestha', images: images};
    const blogRes = await http.post('/blogs', blogData);
    console.log('blog response : ', blogRes);
    setTitle("");
    setDescription("");
  };
  console.log('inside return : ', images)
  return(
    <div className="write">
      <img
        className="writeImg"
        src = {images.length > 0 ? images[0] : 'images/img-2.jpg'}
        crossorigin="anonymous" 
        // src="http://localhost:1234/media/file_1656064458429_Screenshot.png"
        alt=""
      />
    <form onSubmit={handleSubmit} className="writeForm">
          <div className="writeFormGroup">
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            name='title'
            autoFocus={true}
            value={title}
            onChange={handleTitleOnChange}
          />
          <label htmlFor='fileInput'> <i class="fas fa-plus"></i></label>
          <input type="file" name='images[]' id="fileInput" style={{display:"none"}}  multiple onChange={handleImageOnChange}>
           
          </input>
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            name='description'
            autoFocus={true}
            value={description}
            onChange={handleDescriptionOnChange}

          />
          
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );

  //  <h1 className='addblog'>AddBlog</h1>;
}

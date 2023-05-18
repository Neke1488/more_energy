import React from 'react';
import { useState, handleSubmit, imagePreviewUrl, handleImageChange } from 'react'

const AddArticles = () => {
    const [file, setFile] = useState('');
    const [imagePreviewUrl, setImagePreviewUrl] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handle uploading-', file);
      }
      const handleImageChange = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
          setFile(file);
          setImagePreviewUrl(reader.result);
        }
        reader.readAsDataURL(file)
      }
    return (
        <div className='name_wrapper'>
            <div className='wrapper'>
            <div className='name_add'>
                <h1 className='new_article'>Add New Article</h1>
            </div>
            <div className='buttons_add'>
                <button type='submit' className='cancel'>Cancel</button>
                <button type='submit' className='save'>Save</button>
            </div>
            </div>
            <div className='add_photo'>
            <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleImageChange} />
            <button type="submit" onClick={handleSubmit}>Upload Image</button>
            </form>
            <div className='img_preview'>
            {imagePreviewUrl && <img src={imagePreviewUrl} />}
            </div>
            </div>
        </div>
    )
}


export default AddArticles;




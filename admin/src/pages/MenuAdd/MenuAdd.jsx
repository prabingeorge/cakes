import React, { useState } from 'react';
import './MenuAdd.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';

const MenuAdd = ({ url }) => {

  const [image, setImage] = useState(false);
  const initialData = {
    name: "",
    category: ""
  };

  const [data, setData] = useState(initialData);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data?.name);
    formData.append("category", data?.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/menu/menu-add`, formData);
    if (response?.data.success) {
      setData(initialData);
      setImage(false);
      toast.success(response?.data?.message);
    } else {
      toast.error(response?.data?.message);
    }
  };

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="uploadarea" />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
        </div>
        <div className="add-product-name flex-col">
          <p>Menu name</p>
          <input onChange={onChangeHandler} type="text" value={data?.name} name="name" placeholder='Type here' />
        </div>
        <div className="add-product-category flex-col">
          <p>Category name</p>
          <input onChange={onChangeHandler} type="text" value={data?.category} name="category" placeholder='Type here' />
        </div>
        <button type="submit" className='add-btn'>ADD</button>
      </form>
    </div>
  )
}

export default MenuAdd;

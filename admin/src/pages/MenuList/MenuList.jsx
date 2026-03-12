import React, { useEffect, useState } from 'react';
import './MenuList.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const MenuList = ({url}) => {

  const [list, setList] = useState([]);

  // duplicate code
  const fetchList1 = async () => {
      const respone = await axios.get(`${url}/api/menu/menu-list`);
      if (respone?.data?.success) {
        setList(respone?.data?.data);
      } else {
        toast.error("Error");
      }
    }

  const removeMenu = async(foodId)=> {
    const response = await axios.post(`${url}/api/menu/menu-remove`, {id: foodId});
    await fetchList1();
    if (response?.data?.success) {
      toast.success(response?.data?.message);
    } else {
      toast.error("Error");
    }
  }

  useEffect(() => {
    const fetchList = async () => {
      const respone = await axios.get(`${url}/api/menu/menu-list`);
      if (respone?.data?.success) {
        setList(respone?.data?.data);
      } else {
        toast.error("Error");
      }
    }
    fetchList();
  }, []);

  return (
    <div className='list add flex-col'>
      <p>All Cakes List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Action</b>
        </div>
        {list?.map((item, index) => {
          return (
            <div key={index} className='list-table-format'>
              <img src={`${url}/images-menu/`+item?.image} alt="" />
              <p>{item?.name}</p>
              <p>{item?.category}</p>
              <p onClick={()=>removeMenu(item?._id)} className='cursor'>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MenuList;

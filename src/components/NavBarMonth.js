import { collection, getDocs } from "firebase/firestore";
import React, {useState} from "react";
import { db } from "./firebase";
import {query, where} from 'firebase/firestore'
import { useNavigate } from "react-router-dom";

import "./NavBarMonth.css";

const NavBarMonth = () => {
  const [firstMonth, setFirstMonth] = useState('');
  const [lastMonth, setLastMonth] = useState('');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const fetchEvents = async () => {
    const searchEvents = collection(db, 'events');
    const q = query(searchEvents, where('month_id', '>=', firstMonth), where('month_id', '<=', lastMonth));
    const data = await getDocs(q);    
    setSearch(data.docs.map((search) => ({...search.data(), id:search.id})));
    console.log(search);
  };

  const _handleSubmit = (event) => {
    event.preventDefault();
   setFirstMonth(document.getElementById('first').value);    
   setLastMonth(document.getElementById('last').value); 
   fetchEvents();
   navigate('/search');
  }

  return (
    <div className="container">
    <form onSubmit={ _handleSubmit }>
      <label className="start">Start date</label>  
        <select id='first' className="start">
          <option value='1'>JANUARY</option>
          <option value='2'>FEBRUARY</option>
          <option value='3'>MARCH</option>
          <option value='4'>APRIL</option>
          <option value='5'>MAY</option>
          <option value='6'>JUN</option>
          <option value='7'>JULY</option>
          <option value='8'>AUGUST</option>
          <option value='9'>SEPTEMBER</option>
          <option value='10'>OCTOBER</option>
          <option value='11'>NOVEMBER</option>
          <option value='12'>DECEMBER</option>
        </select> 
        <label className="end">End date:</label>
        <select id='last'>        
          <option value='1'>JANUARY</option>
          <option value='2'>FEBRUARY</option>
          <option value='3'>MARCH</option>
          <option value='4'>APRIL</option>
          <option value='5'>MAY</option>
          <option value='6'>JUN</option>
          <option value='7'>JULY</option>
          <option value='8'>AUGUST</option>
          <option value='9'>SEPTEMBER</option>
          <option value='10'>OCTOBER</option>
          <option value='11'>NOVEMBER</option>
          <option value='12'>DECEMBER</option>
        </select>
        <input type="submit" value="Search" />
    </form>   
    </div>
  )
}

export default NavBarMonth;
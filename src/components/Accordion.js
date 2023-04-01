import React,{useState} from "react";
import data from "./data.js";
import './Accordion.css';
import {MdArrowUpward} from 'react-icons/md';
import {MdArrowDownward} from 'react-icons/md';

function Accordion() {
  const [selected,setSelected] = useState(null);
  const toggle = (i) => {
    if(selected==i)
    return setSelected(null);
    setSelected(i)
  }
  return (
    <div className="wrap">
      <div className="accordion">
        {data.map((item, i) => (
          <div className="item">
            <div className="title" onClick={()=> toggle(i)}>
              <h2>{item.ques}</h2>
              <span>{selected===i?<MdArrowUpward/>:<MdArrowDownward/>}</span>
            </div>
            <div className={selected===i?'content show':'content'}>
              <h3>{item.ans}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
